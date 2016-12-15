import config from "../config";
import { merge } from "lodash";
import * as Faker from "faker";
import {timestamp} from "../core";

// mock response object
// mimics the Response class of the fetch api
function MockResponse(res) {
    this.status = res.status;
    this.data = res.data;
}

MockResponse.prototype.json = function() {
    return this.data;
}

// HELPER FUNCTIONS - for mocking data
// take a request and mock the response data using the request body
const requestToResponse = function(optionsObject, desiredStatus, extraFields) {
    return {
        status: desiredStatus,
        data: merge(JSON.parse(optionsObject.body), extraFields)
    }
}

// mock an auth token
const getAuthFields = () => {
    return {
        token: Faker.random.uuid(), 
        id: Faker.random.uuid(),
        expiry: timestamp() + 86400
    }
}

// A list of endpoints, where each endpoint
// is mapped to a function which knows how to mock the response.
// Normally its just a question of returning the request data
// and maybe adding a few extra fields
// sometimes you might need to require a mock file
// or use the faker library to generate fake data
const responseProviders = {

    POST: {
        'auth/login': (url, options) => {

            return requestToResponse(options, 200, getAuthFields());
        },

        'auth/logout': (url, options) => {
            return requestToResponse(options, 200);
        },

        'auth/register': (url, options) => {
            return requestToResponse(options, 201, getAuthFields());
        }
    }

}

module.exports = function mockHttp (url, options) {
    
    return new Promise((resolve, reject) => {

        // annoyingly need to get the endpoint back out of the url
        let parts = url.split(config.API_PORT);
        let endpoint = parts[1];
        if(endpoint.charAt(0) === '/') endpoint = endpoint.substr(1);

        // each endpoint has a corresponding function which knows how to mock the response
        let provider = responseProviders[options.method][endpoint];

        if(!provider) {
            throw new Error(`Failed to mock the ${endpoint} endpoint`);
        }

        let data = provider(url, options);

        if(data.status && data.data) {
            let response = new MockResponse(data);
            resolve(response);
        } else {
            reject(data);
        }
    });
}