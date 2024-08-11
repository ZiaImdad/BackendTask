const Banner = require('../models/bannerModel');

exports.getBanners = async (req, res) => {
    try {
        const banners = await Banner.find();
        res.json(banners);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createBanner = async (req, res) => {
    const banner = new Banner(req.body);
    try {
        const newBanner = await banner.save();
        res.status(201).json(newBanner);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
