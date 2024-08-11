const mongoose = require('mongoose');

const newArrivalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    link: { type: String }
});

const NewArrival = mongoose.model('NewArrival', newArrivalSchema);

module.exports = NewArrival;
