const express = require('express');
const router = express.Router();
const { getNewArrivals, createNewArrival } = require('../controllers/newArrivalsController');

router.get('/', getNewArrivals);
router.post('/', createNewArrival);

module.exports = router;
