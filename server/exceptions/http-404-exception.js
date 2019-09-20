'use strict';

const HttpException = require('./http-exception');

class Http404Exception extends HttpException {

    /**
     * @inheritDoc
     */
    constructor(message, code) {
        super(message, code, 404);
    }
}

module.exports = Http404Exception;
