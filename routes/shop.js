const path = require('path');

const express = require('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.getProductsControl);

module.exports = router;