const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware to verify JWT token
const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded; // Add user data to request object
        next(); // Move to the next middleware
    } catch (err) {
        res.status(401).json({ error: "Invalid token." });
    }
};

module.exports = authenticateUser;
