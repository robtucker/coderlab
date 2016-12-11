import fetch from 'isomorphic-fetch'
import store from "../../store";
import config from "../../config";

import { Api } from "./api";

var httpService = fetch;

if(config.MOCK_API) {
    httpService = require('./mock-http');
}


const api = new Api(httpService, store);

export default api;