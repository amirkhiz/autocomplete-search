/**
 * This is Product Service
 */

import axios from 'axios';

class Product {

    /**
     * Product constructor
     */
    constructor() {
        // TODO Read this value from config
        this._baseUrl = 'http://localhost:3035/';
        this._request = axios.create(
            {
                baseURL: this._baseUrl,
                timeout: 3000,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept'      : 'application/json',
                },
            },
        );
    }

    /**
     * @param {string} term
     * @param {function} callback - (error, response) => { }
     */
    search(term, callback) {
        this._request.get(`search/${term}`)
            .then(response => callback(null, response))
            .catch(error => callback(error));
    }
}

export default Product;
