const Financials = require('../models/financials');

// Get all financial records for a specific student by student ID (sid)
exports.getAllFinancialsByStudentId = async (req, res) => {
    try {
        const { sid } = req.params;
        const financials = await Financials.find({ sid });
        
        if (!financials || financials.length === 0) {
            return res.status(404).json({ message: 'No financial records found for this student' });
        }

        res.status(200).json(financials);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new financial record for a student
exports.addNewFinancial = async (req, res) => {
    try {
        const newFinancial = new Financials(req.body);
        await newFinancial.save();
        res.status(201).json(newFinancial);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a financial record by its ID
exports.deleteFinancialById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFinancial = await Financials.findByIdAndDelete(id);

        if (!deletedFinancial) {
            return res.status(404).json({ message: 'Financial record not found' });
        }

        res.status(200).json({ message: 'Financial record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a financial record by its ID
exports.updateFinancialById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFinancial = await Financials.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedFinancial) {
            return res.status(404).json({ message: 'Financial record not found' });
        }

        res.status(200).json(updatedFinancial);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
