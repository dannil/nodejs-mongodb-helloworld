// routes/products.route.js

'use strict';

const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/test', productController.test);

router.get('/', productController.getAll);
router.post('/create', productController.create);
router.get('/:id', productController.get);
router.put('/:id/update', productController.update);
router.delete('/:id/delete', productController.delete);

module.exports = router;