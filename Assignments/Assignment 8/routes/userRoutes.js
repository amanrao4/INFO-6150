const express = require("express");
const User = require("../models/User")
const { createUser, updateUser, deleteUser, getAllUsers , loginUser} = require("../controllers/userController");

const router = express.Router();

// Define Routes
router.post("/create", createUser);
router.put("/edit", updateUser);
router.delete("/delete", deleteUser);
router.get("/getAll", getAllUsers);
router.post("/login", loginUser);

const upload = require("../middleware/upload");

router.post("/uploadImage", upload.single("image"), async (req, res) => {
    try {
        console.log("🔹 Request Body:", req.body);
        console.log("🔹 Uploaded File:", req.file);

        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        if (user.image) {
            return res.status(400).json({ error: "Image already exists for this user." });
        }

        user.image = `/uploads/${req.file.filename}`;
        await user.save();

        res.status(201).json({ 
            message: "Image uploaded successfully.", 
            filePath: user.image 
        });

    } catch (err) {
        console.error(" Upload Error:", err);
        res.status(500).json({ error: "Internal server error." });
    }
});



module.exports = router;


