import config from '../config.js';

export default LocalStorageManager {
    get(field) {
        if (this._isExists()){
            const data = JSON.parse(localStorage.getItem(config.localStorage.name));

            if(!field) return data;
            if(data[field]) return data[field];

            return undefined;
        }
        return undefined;
    }
    set(field, data{}) {
        let dataToStorage = {};

        if (field) {
            dataToStorage = this.get();
            if (!dataToStorage) dataToStorage = {};
            dataToStorage [ field ] = data;

        } else {
            dataToStorage = data;
        }

        localStorage.setItem(config.localStorage.name, JSON.stringify(dataToStorage))
    }
    _isExists() {
        return localStorage.getItem(config.localStorage.name) ? true : false;
    }
}
