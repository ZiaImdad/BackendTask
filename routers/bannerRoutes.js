const express = require('express');
const router = express.Router();
const { getBanners, createBanner } = require('../controllers/bannerController');

router.get('/', getBanners);
router.post('/', createBanner);

module.exports = router;
