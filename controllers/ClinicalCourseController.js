const ClinicalCourse = require('../models/clinicalcourse');

// Get all clinical courses for a specific student by student ID (sid)
exports.getAllClinicalCoursesByStudentId = async (req, res) => {
    try {
        const { sid } = req.params;
        const clinicalCourses = await ClinicalCourse.find({ sid });

        if (!clinicalCourses || clinicalCourses.length === 0) {
            return res.status(404).json({ message: 'No clinical courses found for this student' });
        }

        res.status(200).json(clinicalCourses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new clinical course for a student
exports.addNewClinicalCourse = async (req, res) => {
    try {
        const newClinicalCourse = new ClinicalCourse(req.body);
        await newClinicalCourse.save();
        res.status(201).json(newClinicalCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a clinical course by its ID
exports.deleteClinicalCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedClinicalCourse = await ClinicalCourse.findByIdAndDelete(id);

        if (!deletedClinicalCourse) {
            return res.status(404).json({ message: 'Clinical course not found' });
        }

        res.status(200).json({ message: 'Clinical course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a clinical course by its ID
exports.updateClinicalCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedClinicalCourse = await ClinicalCourse.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedClinicalCourse) {
            return res.status(404).json({ message: 'Clinical course not found' });
        }

        res.status(200).json(updatedClinicalCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
