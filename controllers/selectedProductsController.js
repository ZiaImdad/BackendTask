const SelectedProduct = require('../models/selectedProductModel');

exports.getSelectedProducts = async (req, res) => {
    try {
        const products = await SelectedProduct.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createSelectedProduct = async (req, res) => {
    const product = new SelectedProduct(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
