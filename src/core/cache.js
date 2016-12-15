import { Dispatcher } from "./dispatcher";

export class Cache extends Dispatcher {

    constructor() {
        super();
        this._cache = window.localStorage;
    }
    
    get(key) {
        return this._cache.getItem(key);
    }

    set(key, val) {
        return this._cache.setItem(key, val);
    }

    delete(key) {
        return this._cache.removeItem(key, val);
    }
}

export const cache = new Cache();