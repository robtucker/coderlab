import config, {dbConfig} from "../config";
import { Dispatcher } from "./dispatcher";
import dbProvider from "idb";
import { cacheFailure } from "../common/actions";
import { getAppStore } from "../store";

export class Db  {

    _db;
    _dbConfig = dbConfig;

    constructor(db) {
        //super();

        if(config.INDEX_DB_WIPE_ON_REFRESH) {
            dbProvider.delete(config.INDEX_DB_NAME).then(() => 
                this._getDb().then(db => this._init(db))
            );
        } else {
            this._getDb().then(db => this._init(db));
        }
    }

    _init() {
        // console.log('indexed db has been initialized');
        // console.log(db);
    }

    _getDb() {
        return this._db || (this._db = dbProvider.open(config.INDEX_DB_NAME, config.INDEX_DB_VERSION, upgradeDb => {
            let stores = this._dbConfig;

            for(var store in stores) {
                let config = this._dbConfig[store]
                // console.log('creating store', store, config.options);
                upgradeDb.createObjectStore(store, config.options)

                // todo
                // config.indexes.forEach((index) => {
                //     db.createIndex(index.name, index.name, { unique: index.unique });
                // });
            }
        }));
    }

    _upgradeDb(db) {
        let stores = this._dbConfig;
        for(var store in stores) {

            // console.log('creating database');

            db.createObjectStore(store, config.options)

            // todo
            // config.indexes.forEach((index) => {
            //     db.createIndex(index.name, index.name, { unique: index.unique });
            // });
        }
    }

    get(table, key) {
        return this._db.then(db => {
            return db.transaction(table).objectStore(table).get(key);
        });
    }



    set(table, data) {
        return this._db.then(db => {

            const tx = db.transaction(table, 'readwrite');
            // console.log('insert db record', data);
            tx.objectStore(table).put(data);

            return tx.complete;
        });
    }

    keys(table) {
        return this._db.then(db => {
            const tx = db.transaction(table);
            const keys = [];
            const store = tx.objectStore(table);

            // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
            // openKeyCursor isn't supported by Safari, so we fall back
            (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
                if (!cursor) return;
                keys.push(cursor.key);
                cursor.continue();
            });

            return tx.complete.then(() => keys);
        });
    }

    del(table, key) {
        return this._db.then(db => {
            const tx = db.transaction('keyval', 'readwrite');
            tx.objectStore('keyval').delete(key);
            return tx.complete;
        });
    }

}

export const db = new Db();