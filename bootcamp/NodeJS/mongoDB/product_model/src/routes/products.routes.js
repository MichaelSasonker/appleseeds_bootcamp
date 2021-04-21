const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

router.get('/', (req, res) => productController.getProducts(req, res))
.get('/product/:id', (req, res) => productController.getProductByID(req, res))
.get('/byName/:name', (req, res) => productController.getProductByName(req, res))
.get('/byActive', (req, res) => productController.getActiveProducts(req, res))
.get('/byPriceRange', (req, res) => productController.getProductsInPriceRange(req, res))
.post('/', (req, res) => productController.addProduct(req, res))
.patch('/updateProduct/:id', (req, res) => productController.updateProductByID(req, res))
.delete('/deleteByID/:id', (req, res) => productController.deleteOneByID(req, res))
.delete('/deleteAll', (req, res) => productController.deleteAll(req, res));


module.exports = router;