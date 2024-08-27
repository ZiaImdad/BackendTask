const express = require('express');
const router = express.Router();
const StudentCourseController = require('../controllers/StudentCourseController');

// Route to get all courses for a specific student by student ID (sid)
router.get('/student/:sid', StudentCourseController.getAllCoursesByStudentId);

// Route to add a new course
router.post('/', StudentCourseController.addNewCourse);

// Route to delete a course by its ID
router.delete('/:id', StudentCourseController.deleteCourseById);

// Route to update a course by its ID
router.put('/:id', StudentCourseController.updateCourseById);

module.exports = router;
