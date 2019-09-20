'use strict';

const AppException = require('./app-exception');

class HttpException extends AppException {

    /**
     * @param {string} message
     * @param {number} [code=0]
     * @param {number} [statusCode=500]
     */
    constructor(message, code, statusCode) {
        super(message, code);

        this._statusCode = statusCode || 500;
    }

    /**
     * @returns {{error: {code: number, message: string, statusCode: number}}}
     */
    toJson() {
        return {
            error: {
                message   : this.getMessage(),
                code      : this.getCode(),
                statusCode: this.getStatusCode(),
            },
        };
    }

    /**
     * @returns {number}
     */
    getStatusCode() {
        return this.statusCode;
    }

    /**
     * @returns {number}
     */
    get statusCode() {
        return this._statusCode;
    }
}

module.exports = HttpException;
