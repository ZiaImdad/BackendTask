const StudentCourse = require('../models/studentcourse');

// Get all courses for a specific student by student ID (sid)
exports.getAllCoursesByStudentId = async (req, res) => {
    try {
        const { sid } = req.params;
        const courses = await StudentCourse.find({ sid });
        
        if (!courses || courses.length === 0) {
            return res.status(404).json({ message: 'No courses found for this student' });
        }

        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new course for a student
exports.addNewCourse = async (req, res) => {
    try {
        const newCourse = new StudentCourse(req.body);
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a course by its ID
exports.deleteCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourse = await StudentCourse.findByIdAndDelete(id);

        if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a course by its ID
exports.updateCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCourse = await StudentCourse.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
