import config from '../config';

export default class LocalStorageManager {
    static get(field) {
        if (this.__isExists()) {
            const data = JSON.parse(localStorage.getItem(config.localStorage.name));

            if (!field) return data;
            if (data[ field ] ) return data[ field ];

            return undefined;
        }
        return undefined;
    }

    static set(field, data = {}) {
        let dataToStorage = {};

        if (field) {
            dataToStorage = this.get();
            if (!dataToStorage) dataToStorage = {};
            dataToStorage[ field ] = data;
        } else {
            dataToStorage = data;
        }

        localStorage.setItem(config.localStorage.name, JSON.stringify(dataToStorage));
    }

    static __isExists() {
        return localStorage.getItem(config.localStorage.name) ? true : false;
    }

}
