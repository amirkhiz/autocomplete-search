'use strict';

class Model {

    /**
     * @param {Array} data
     * @returns {Model}
     */
    constructor(data) {
        this.attributes = data;

        return new Proxy(this, handler);
    }

    /**
     * @returns {string}
     */
    toJson() {
        return JSON.stringify(this.attributes);
    }

    /**
     * @returns {string}
     */
    toArray() {
        return this.attributes;
    }

    /**
     * @returns {number}
     */
    getId() {
        return Number(this.attributes['_id']);
    }
}

const handler = {
    get(target, key) {
        const value = Reflect.get(target, key);

        // Check if the requested key is not one of target object methods or attributes property
        if (typeof value === 'function' || key === 'attributes') {
            return value;
        }

        return target.attributes[key];
    },
    set(obj, prop, value) {
        return obj.attributes[prop] = value;
    },
};

module.exports = Model;

