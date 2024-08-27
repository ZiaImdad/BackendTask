const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

// Route to create a new admin
router.post('/', AdminController.createAdmin);


router.put('/updatepassword', AdminController.updateAdminPassword);

// Add other routes if necessary (e.g., get all admins, update admin, etc.)


router.get('/not-approved', AdminController.getNotApprovedAdmins);


router.put('/approve', AdminController.approveAdminStatus);

// Route to delete an admin by userId
router.delete('/delete', AdminController.deleteAdmin);


module.exports = router;
