import config from "../config";
import { merge } from "lodash";
import * as Faker from "faker";
import { utils } from "../core/utils";

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
const requestToResponse = function(optionsObject, desiredStatus, extraFields = {}) {
    //console.log(optionsObject);
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
        expiry: utils.timestamp() + 86400
    }
}

// get some json data from the mocks folder
// the file path is built up from the endpoint
const getFileFromEndpointArray = (endpointArray, options) => {
    let path = endpointArray.join('/');
    //console.log(path);
    let data = require( './mocks/' + path);
    //console.log(data.default);
    return {status: 200, data: data.default};
}

// A list of endpoints, where each endpoint
// is mapped to a function which knows how to mock the response.
// Normally its just a question of returning the request data
// and maybe adding a few extra fields
// sometimes you might need to require a mock file
// or use the faker library to generate fake data
const responseProviders = {

    GET: {
        course: (endpointArray, options) => {
            return getFileFromEndpointArray(endpointArray, options)
        }
    },
    POST: {
        auth: {
            login: (endpointArray, options) => {

                let data = requestToResponse(options, 200, getAuthFields());
                return merge(data, {
                    firstName: Faker.name.firstName(),
                    lastName: Faker.name.lastName()
                })
            },

            logout: (endpointArray, options) => {
                return requestToResponse(options, 200);
            },

            register: (endpointArray, options) => {
                return requestToResponse(options, 201, getAuthFields());
            }
        }
    },
    PUT: {
        user: {
            me: (endpointArray, options) => requestToResponse(options, 200)
        }
    }

}

module.exports = function mockHttp (url, options) {
    
    return new Promise((resolve, reject) => {

        // annoyingly need to get the endpoint back out of the url
        let parts = url.split(config.API_PORT);
        //console.log(parts);
        let slug = parts[1];
        let endpointParts = slug.split('/');
        let endpointArray = endpointParts.filter(e => e !== "");
        //console.log('endpointParts', endpointArray);

        // each endpoint has a corresponding function which knows how to mock the response
        //let provider = responseProviders[options.method][endpoint];
        var provider = responseProviders[options.method];
        //console.log(provider);

        endpointArray.forEach((endpoint) => {
            //console.log(endpoint, typeof endpoint, provider[endpoint]);
            if(endpoint.length && provider[endpoint]) {
                provider = provider[endpoint];
            }
        });

        if(typeof provider === 'Function') {
            throw new Error(`Failed to mock the ${endpoint} endpoint`);
        }
        //console.log(provider);
        let data = provider(endpointArray, options);

        if(data.status && data.data) {
            let response = new MockResponse(data);
            // let's make this bad boy async
            setTimeout(function() {
                resolve(response);
            }, 500);
        } else {
            reject(data);
        }
    });
}
