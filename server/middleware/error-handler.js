'use strict';

const AppException = require('../exceptions/app-exception');

module.exports = (err, req, res, next) => {
    if (err instanceof AppException) {
        return res
            .status(err.getStatusCode())
            .json(err.toJson());
    }

    return res.status(500);
};
