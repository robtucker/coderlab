function mockHttp(method, endpoint) {
    return new Promise((resolve, reject) => {

        if(url.charAt(0) !== '/') {
            url = '/' + url;
        }

        let data = require("./mocks" + `${url}.json`);

        if(data) {
            resolve(data);
        } else {
            reject(data);
        }
    });
}

export default mockHttp;
