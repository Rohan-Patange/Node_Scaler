const express = require('express');
const categories = require('./Routes/categories');
const students = require('./Routes/students');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/learningPlatform')
app.use(express.json());

app.use(categories)
app.use(students);

let port = process.env.PORT || 8000;

app.listen(port, ()=> console.log(`Port is running on ${port}`));