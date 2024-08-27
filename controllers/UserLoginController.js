const UserLogin = require("../models/userLogin");
const bcrypt = require("bcrypt");

// Authenticate user
exports.authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find the user by email
    const user = await UserLogin.findOne({ email });

    // Check if user exists and the password matches

    if (
      user &&
      (await bcrypt.compare(password, user.password)) &&
      user.status === "approved"
    ) {
      // Return the user data object if authentication is successful
      return res.status(200).json(user);
    } else {
      // Invalid credentials or unapproved status
      return res.status(401).json({
        message: "Invalid username or password, or account not approved",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { password, newpassword } = req.body;
    const { id } = req.params;

    const user = await UserLogin.findById(id); // Corrected to use the UserLogin model

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Hash the new password before saving
    user.password = await bcrypt.hash(newpassword, 10);
    await user.save();

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
