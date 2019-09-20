'use strict';

const _     = require('lodash');
const Model = require('./model');

class ModelCollection {

    /**
     * @param {Model} model
     * @param {Array} [resources=[]]
     * @returns {ModelCollection}
     */
    constructor(model, resources) {
        this.model     = model;
        this.resources = this._generateModels(resources || []);
    }

    /**
     * @param {Array} resources
     * @returns {Model[]}
     * @private
     */
    _generateModels(resources) {
        return _.map(resources, resource => resource instanceof Model ? resource : new this.model(resource));
    }

    /**
     * @returns {string}
     */
    toJson() {
        return JSON.stringify(_.map(this.resources, resource => resource.toJson()));
    }

    /**
     * @returns {Model[]}
     */
    toArray() {
        return _.map(this.resources, resource => resource.toArray());
    }

    /**
     * @param {number} id
     * @return {Model}
     */
    findById(id) {
        return _.find(this.resources, resource => resource.getId() === Number(id));
    }

    /**
     * Merge resources with new ones
     * @param {Model[]} resources
     * @todo Validate received resources to be a valid Model
     */
    concat(resources) {
        this.resources = _.unionBy(this.resources.concat(resources), '_id');

        return this.resources;
    }

    /**
     * @returns {number}
     */
    count() {
        return this.length();
    }

    /**
     * @returns {number}
     */
    length() {
        return this.resources.length;
    }
}

module.exports = ModelCollection;
