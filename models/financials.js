const mongoose = require('mongoose');

const financialsSchema = new mongoose.Schema({
    paymentDate: { type: Date, required: true },
    semester: { type: String, required: true },
    feeInvoice: { type: Number, required: true },
    paymentAmu: { type: Number, required: true }, // payment amount
    balance: { type: Number, required: true },
    sid: { type: mongoose.Schema.Types.ObjectId, ref: 'student', required: true }
});

const financials = mongoose.model('financials', financialsSchema);

module.exports = financials;
