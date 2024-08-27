const mongoose = require('mongoose');

const studentCourseSchema = new mongoose.Schema({
    semester: { type: String, required: true },
    status: { type: String, default: 'ongoing' },
    cname: { type: String, required: true },  // course name
    credits: { type: Number, required: true },
    grade: { type: String },
    sid: { type: mongoose.Schema.Types.ObjectId, ref: 'student', required: true }
});

const studentcourse = mongoose.model('studentcourse', studentCourseSchema);

module.exports = studentcourse;
