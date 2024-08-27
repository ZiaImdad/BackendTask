const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, default: 'not-approved' },
    role: { type: String, required: true }
});

const userLogin = mongoose.model('userLogin', userLoginSchema);

module.exports = userLogin;
