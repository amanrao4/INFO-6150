const express = require("express");
const { createUser, updateUser, deleteUser, getUser, getAllUsers, uploadImage} = require('../controllers/userController');
const router = express.Router();

router.post('/create', createUser)
router.put('/edit', updateUser)
router.delete('/delete', deleteUser)
router.get('/get', getUser)
router.get('/get_all', getAllUsers)

// Upload Image Old Code
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'userImages/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG and GIF are allowed.'), false);
    }
  };
  
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
      fileSize: 5 * 1024 * 1024 // 5MB limit
    }
  });

router.post('/uploadImage', upload.single('image'), uploadImage);


module.exports = router