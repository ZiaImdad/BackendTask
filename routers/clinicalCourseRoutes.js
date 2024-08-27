const express = require('express');
const router = express.Router();
const ClinicalCourseController = require('../controllers/ClinicalCourseController');

// Route to get all clinical courses for a specific student by student ID (sid)
router.get('/student/:sid', ClinicalCourseController.getAllClinicalCoursesByStudentId);

// Route to add a new clinical course
router.post('/', ClinicalCourseController.addNewClinicalCourse);

// Route to delete a clinical course by its ID
router.delete('/:id', ClinicalCourseController.deleteClinicalCourseById);

// Route to update a clinical course by its ID
router.put('/:id', ClinicalCourseController.updateClinicalCourseById);

module.exports = router;
