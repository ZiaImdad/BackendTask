const express = require('express');
const router = express.Router();
const FinancialsController = require('../controllers/FinancialsController');

// Route to get all financial records for a specific student by student ID (sid)
router.get('/student/:sid', FinancialsController.getAllFinancialsByStudentId);

// Route to add a new financial record
router.post('/', FinancialsController.addNewFinancial);

// Route to delete a financial record by its ID
router.delete('/:id', FinancialsController.deleteFinancialById);

// Route to update a financial record by its ID
router.put('/:id', FinancialsController.updateFinancialById);

module.exports = router;
