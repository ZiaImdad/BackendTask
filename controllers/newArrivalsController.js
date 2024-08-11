const NewArrival = require('../models/newArrivalModel');

exports.getNewArrivals = async (req, res) => {
    try {
        const products = await NewArrival.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createNewArrival = async (req, res) => {
    const product = new NewArrival(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
