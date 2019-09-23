'use strict';

module.exports = (req, res, next) => {
    // Website you wish to allow to connect
    res.set('Access-Control-Allow-Origin', 'http://localhost:3030');

    // Request methods you wish to allow
    res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');

    // Request headers you wish to allow
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type,accept');

    next();
};
