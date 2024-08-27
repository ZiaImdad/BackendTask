const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    zipcode: { type: String, required: true },
    gender: { type: String, required: true },
    semester: { type: String, required: true },
    state: { type: String, required: true },
    status: { type: String, default: 'active' },
    streetAddress: { type: String, required: true },
    course: { type: String, required: true },
    city: { type: String, required: true },
    contact: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true, unique: true }
});

const student = mongoose.model('student', studentSchema);

module.exports = student;
