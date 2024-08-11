const mongoose = require('mongoose');

const selectedProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    link: { type: String }
});

const SelectedProduct = mongoose.model('SelectedProduct', selectedProductSchema);

module.exports = SelectedProduct;
