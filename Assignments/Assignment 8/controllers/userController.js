const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//  Create User
exports.createUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const user = new User({ fullName, email, password });
        await user.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

//  Update User Details
exports.updateUser = async (req, res) => {
    try {
        const { email, fullName, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        // Update fields
        if (fullName) user.fullName = fullName;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        await user.save();
        res.status(200).json({ message: "User updated successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

//  Delete User
exports.deleteUser = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOneAndDelete({ email });

        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

//  Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        console.log("🔹 Request Body:", req.body);

        const { email, password } = req.body;

        if (!email || !password) {
            console.log(" Missing email or password");
            return res.status(400).json({ error: "Email and password are required." });
        }

        const user = await User.findOne({ email });

        if (!user) {
            console.log(" User not found:", email);
            return res.status(401).json({ error: "Invalid credentials." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log(" Password mismatch for user:", email);
            return res.status(401).json({ error: "Invalid credentials." });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        console.log(" Login Successful:", email);
        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        console.error(" Internal Server Error:", err);
        res.status(500).json({ error: "Internal server error." });
    }
};

