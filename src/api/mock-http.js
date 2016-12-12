import config from "../config";

function MockResponse(res) {
    this.status = res.status;
    this.data = res.data;
}

MockResponse.prototype.json = function() {
    return this.data;
}

module.exports = function mockHttp (url, options) {
    
    return new Promise((resolve, reject) => {

        // annoyingly need to get the endpoint back out of the url
        let parts = url.split(config.API_PORT);
        let endpoint = parts[1];

        let res = require("./mocks" + endpoint);

        if(res.status && res.data) {
            let response = new MockResponse(res);
            resolve(response);
        } else {
            reject(res);
        }
    });
}

