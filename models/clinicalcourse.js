const mongoose = require('mongoose');

const clinicalCourseSchema = new mongoose.Schema({
    rotations: { type: String, required: true },  // Type or name of rotation
    coreElective: { type: String, required: true },  // Specify if it's core or elective
    semester: { type: String, required: true },
    noOfWeeks: { type: Number, required: true },
    preceptor: { type: String, required: true },  // Name of the supervising preceptor
    duration: { type: String, required: true },  // Duration in hours, days, etc.
    status: { type: String, default: 'ongoing' },  // Course status, e.g., ongoing, completed
    sid: { type: mongoose.Schema.Types.ObjectId, ref: 'student', required: true }  // Foreign key referencing the Student model
});

const clinicalcourse = mongoose.model('clinicalcourse', clinicalCourseSchema);

module.exports = clinicalcourse;
