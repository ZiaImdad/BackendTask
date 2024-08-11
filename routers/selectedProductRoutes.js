const express = require('express');
const router = express.Router();
const { getSelectedProducts, createSelectedProduct } = require('../controllers/selectedProductsController');

router.get('/', getSelectedProducts);
router.post('/', createSelectedProduct);

module.exports = router;
