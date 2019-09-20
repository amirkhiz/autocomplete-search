'use strict';
/**
 * Here we are defining project schemas
 */

module.exports = {
    product: {
        _id     : String,
        isActive: Boolean,
        price   : Number,
        picture : String,
        name    : String,
        about   : String,
        tags    : Array,
    },
};
