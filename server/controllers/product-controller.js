'use strict';

const ProductCollection = require('../models/product-collection');
const Http400Exception  = require('../exceptions/http-400-exception');
const Http404Exception  = require('../exceptions/http-404-exception');
const data              = require('../data');

class ProductController {

    /**
     *
     * @param req
     * @param  res
     * @returns {*|Promise<any>}
     */
    static search(req, res) {
        // Init full product collection
        const productsCollection = new ProductCollection(data);

        // Check term parameter is exist
        if (!req.params.term) {
            throw new Http400Exception('Term value is required.');
        }

        const term             = req.params.term;
        // Init empty product collection to keep results
        const resultCollection = new ProductCollection();

        resultCollection.concat(productsCollection.filterByTags(term));
        resultCollection.concat(productsCollection.filterByName(term));

        if (resultCollection.count() <= 0) {
            throw new Http404Exception('No Product found!');
        }

        return res.json(resultCollection.toArray());
    }
}

module.exports = ProductController;
