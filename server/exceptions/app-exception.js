'use strict';

class AppException extends Error {

    /**
     * @param {string} message
     * @param {number} [code=0]
     */
    constructor(message, code) {
        super(message);
        this._message = message;
        this._code    = code || 0;
    }

    /**
     * @returns {{error: {code: number, message: string}}}
     */
    toJson() {
        return {
            error: {
                message: this.getMessage(),
                code   : this.getCode(),
            },
        };
    }

    /**
     * @returns {string}
     */
    getMessage() {
        return this.message;
    }

    /**
     * @returns {number}
     */
    getCode() {
        return this.code;
    }

    /**
     * @returns {string}
     */
    get message() {
        return this._message;
    }

    /**
     * @returns {number}
     */
    get code() {
        return this._code;
    }
}

module.exports = AppException;
