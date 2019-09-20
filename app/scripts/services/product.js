/**
 * This is Product Service
 */

import axios from 'axios';

class Product {

    /**
     * Product constructor
     */
    constructor() {
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
     */
    search(term) {
        this._request.get(`search/${term}`)
            .then(response => console.log('RESPONSE ::: ', response.data))
            .catch(error => console.warn('ERROR ::: ', error.message));
    }
}

export default Product;
