const express = require('express');
const router = express.Router();
const {Category, validate} = require('../models/studentsModels');

//Get API to get students
router.get('/api/students',async (req,res)=>{
    let students = await Student.find()
    res.send(students);
})


//Post API to add students
router.post('/api/students', async(req,res)=>{

    const {error} = validate(req.body);
    if(error) res.status(400).send(error.details[0].message);
    const student = new Student({
        name : req.body.name,
        phone : req.body.phone,
        isEnrolled : req.body.isEnrolled
    })

    await student.save()
    res.send(student);
})

//Put API to update students
router.put('/api/students/:id',async (req, res)=>{
    const {error} = validate(req.body);
    if(error) res.status(400).send(error.details[0].message);

    const student = await Student.findByIdAndUpdate(req.params.id, {name: req.body.name, phone: req.body.phone, isEnrolled: req.body.isEnrolled},{new: true});
    if (!student) return res.status(404).send('The student with given ID ' + req.params.id + ' was not found.');
    
    res.send(student);
});

//Delete API to delete students
router.delete('/api/students/:id',async (req, res) => {
    const student = await Student.findByIdAndRemove(req.params.id);
    if (!student) return res.status(404).send('The student with given ID ' + req.params.id + ' was not found.');
    
   
    res.send(student);
});

//Get API to get students by ID 
router.get('/api/students/:id',async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send('The student with given ID ' + req.params.id + ' was not found.');
    
   
    res.send(student);
});


module.exports = router;