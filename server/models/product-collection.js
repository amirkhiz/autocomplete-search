'use strict';

const ModelCollection = require('./model-collection');
const Product         = require('./product');
const _               = require('lodash');

class ProductCollection extends ModelCollection {

    /**
     * @param {Array} [resources=[]]
     */
    constructor(resources) {
        super(Product, resources);
    }

    /**
     * @param {string} term
     * @return {Product[]}
     */
    filterByTags(term) {
        return _.filter(
            this.resources,
            resource => _.find(
                resource.tags,
                tag => tag.toLowerCase().includes(term.toLowerCase()) && this._generalFilters(resource),
            ),
        );
    }

    /**
     * @param {string} term
     * @return {Product[]}
     */
    filterByName(term) {
        return _.filter(
            this.resources,
            resource => resource.name.toLowerCase().includes(term.toLowerCase()) && this._generalFilters(resource),
        );
    }

    /**
     * @param {string} term
     * @return {Product[]}
     */
    filterByAbout(term) {
        return _.filter(
            this.resources,
            resource => resource.about.toLowerCase().includes(term.toLowerCase()) && this._generalFilters(resource),
        );
    }

    /**
     * @param {Product} resource
     * @return {boolean}
     */
    _generalFilters(resource) {
        return resource.isActive;
    }
}

module.exports = ProductCollection;
