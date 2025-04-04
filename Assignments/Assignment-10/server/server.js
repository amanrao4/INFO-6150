const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const path = require('path');
const cors = require('cors');

const PORT =  3001;
const MONGODB_URL = "mongodb://localhost:27017/assignment_db"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))// parse url-encoded bodies(from data)
app.use(express.json())// parse JSON requests

app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/job', jobRoutes);
app.use('/user', userRoutes);
app.use('/companies', companyRoutes);
app.use('/static', express.static('public'))
app.use('/files', express.static('images'))
app.use('/company_images', express.static('images'))


//Old code to upload user images
app.use('/images', express.static(path.join(__dirname, 'userImages')));
app.use((err, req, res, next) => {
      return res.status(400).json({
        status: 'error',
        message: 'Error: ' + err.message
      });
  });

mongoose.connect(MONGODB_URL,{})
        .then(() => console.log('MongoDB connected successfully!'))
        .catch(err => console.log(err))

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`)
})

module.exports = app