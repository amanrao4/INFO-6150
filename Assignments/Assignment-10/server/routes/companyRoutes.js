const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const companies = [
            {_id:1, name: "amazon", imagePath: "amazon.png"},
            {_id:2, name: "apple", imagePath: "apple.png"},
            {_id:3, name: "google", imagePath: "google.png"},
            {_id:4, name: "instacart", imagePath: "instacart.png"},
            {_id:5, name: "linkedin", imagePath: "linkedin.png"},
            {_id:6, name: "meta", imagePath: "meta.png"},
            {_id:7, name: "microsoft", imagePath: "microsoft.png"},
            {_id:8, name: "netflix", imagePath: "netflix.png"},
            {_id:9, name: "tesla", imagePath: "tesla.png"},
            {_id:10, name: "uber", imagePath: "uber.png"},
            {_id:11, name: "yahoo", imagePath: "yahoo.png"}
        ]; 
        res.json(companies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;