'use strict';

const HttpException = require('./http-exception');

class Http400Exception extends HttpException {

    /**
     * @inheritDoc
     */
    constructor(message, code) {
        super(message, code, 400);
    }
}

module.exports = Http400Exception;
