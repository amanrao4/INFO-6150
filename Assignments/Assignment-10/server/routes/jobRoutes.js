const express = require("express");

const { createJob, getAllJobs,deleteAllJob } = require('../controllers/jobController');

const router = express.Router();

router.post('/create', createJob)
router.get('/get_all_jobs', getAllJobs)

router.delete('/delete_all_jobs', deleteAllJob)

module.exports = router