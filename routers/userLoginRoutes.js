const express = require('express');
const router = express.Router();
const UserLoginController = require('../controllers/UserLoginController');

// Route to authenticate user
router.post('/login', UserLoginController.authenticateUser);

router.put('/changePassword/:id', UserLoginController.updatePassword);

module.exports = router;
