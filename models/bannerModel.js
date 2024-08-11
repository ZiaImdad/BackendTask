const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    link: { type: String },
    title: { type: String, required: true },
    description: { type: String }
});

const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;
