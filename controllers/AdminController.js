const Admin = require('../models/admin');
const UserLogin = require('../models/userLogin');
const bcrypt = require('bcrypt');

// Insert a new admin
exports.createAdmin = async (req, res) => {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Step 1: Create a new user in the UserLogin table
        const user = new UserLogin({
            email,
            password: hashedPassword, // Store hashed password
            role: 'admin',
            status: 'not-approved'
        });

        await user.save();

        // Step 2: Create a new admin in the Admin table
        const admin = new Admin({
            name,
            email,
            phone,
            userId: user._id  // Use the _id from the UserLogin table
        });

        await admin.save();

        res.status(201).json({
            message: 'Admin created successfully',
            admin
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update admin password
exports.updateAdminPassword = async (req, res) => {
   
    const { email, phone, newPassword } = req.body;
  

    if (!email || !phone || !newPassword) {
        return res.status(400).json({ message: 'Please provide email, phone, and new password' });
    }

    try {
        // Step 1: Find the admin by email and phone
        const admin = await Admin.findOne({ email, phone });
       

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Step 2: Find the corresponding user in the UserLogin table
        const user = await UserLogin.findById(admin.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Step 3: Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Step 4: Update the password in the UserLogin table
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


///list of all admin whose status is not approved
exports.getNotApprovedAdmins = async (req, res) => {
    try {
        // Step 1: Find all users in UserLogin with status 'not-approved' and role 'admin'
        const notApprovedUsers = await UserLogin.find({ status: 'not-approved', role: 'admin' });

        // Step 2: Extract user IDs from the results
        const userIds = notApprovedUsers.map(user => user._id);

        // Step 3: Find all admins that match the user IDs
        const admins = await Admin.find({ userId: { $in: userIds } });

        // Step 4: Create a list with the desired data (phone, name, email)
        const notApprovedAdmins = admins.map(admin => {
            const correspondingUser = notApprovedUsers.find(user => user._id.equals(admin.userId));
            return {
                name: admin.name,
                email: admin.email,
                phone: admin.phone,
                userId:admin.userId,
                status: correspondingUser ? correspondingUser.status : null
            };
        });

        // Step 5: Return the list of not-approved admins
        res.status(200).json(notApprovedAdmins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.approveAdminStatus = async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ message: 'Please provide a userId' });
    }

    try {
        // Step 1: Find the user by userId in the UserLogin table
        const user = await UserLogin.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Step 2: Update the status to 'approved'
        user.status = 'approved';
        await user.save();

        res.status(200).json({ message: 'Admin status updated to approved' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete admin and user by userId
exports.deleteAdmin = async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ message: 'Please provide a userId' });
    }

    try {
        // Step 1: Find and delete the user by userId in the UserLogin table
        const user = await UserLogin.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Step 2: Find and delete the corresponding admin in the Admin table
        await Admin.findOneAndDelete({ userId });

        res.status(200).json({ message: 'Admin and user deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};