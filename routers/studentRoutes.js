const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/StudentController');

// Route to create a new student
router.post('/', StudentController.createStudent);

// Route to get all students
router.get('/', StudentController.getAllStudents);

// Route to update a student by ID
router.put('/:id', StudentController.updateStudent);

// Route to update a student's status by ID
router.put('/updatestatus/:id', StudentController.updateStatus);

// Route to delete a student by ID
router.delete('/:id', StudentController.deleteStudent);

module.exports = router;
