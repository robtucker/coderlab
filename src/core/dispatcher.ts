import { getAppStore } from "../store";
import config from "../config";

export class Dispatcher {

    _store;

    _store() {
        return this._store || (this._store = getAppStore());
    }

    _dispatch(action) {
        return this._store().dispatch(action);
    }

    _state() {
        return this._store().getState();
    }

}