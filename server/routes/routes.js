'use strict';

const router            = require('express').Router();
const ProductController = require('../controllers/product-controller');

router.get('/search/:term', ProductController.search);

module.exports = router;
