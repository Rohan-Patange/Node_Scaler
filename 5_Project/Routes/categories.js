const express = require('express');
const router = express.Router();
const {Category, validate} = require('../models/categoriesModel');




//Get API to get categories
router.get('/api/students',async (req,res)=>{
    let categories = await Category.find()
    res.send(categories);
})

//Post API to add categories
router.post('/api/students', async(req,res)=>{

    const {error} = validate(req.body);
    if(error) res.status(400).send(error.details[0].message);
    const category = new Category({
        name : req.body.name
    })

    await category.save()
    res.send(category);
})

//Put API to update categories
router.put('/api/students/:id',async (req, res)=>{
    const {error} = validate(req.body);
    if(error) res.status(400).send(error.details[0].message);

    const category = await Category.findByIdAndUpdate(req.params.id, {name: req.body.name},{new: true});
    if (!category) return res.status(404).send('The category with given ID ' + req.params.id + ' was not found.');
    
    res.send(category);
});

//Delete API to delete categories
router.delete('/api/students/:id',async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id);
    if (!category) return res.status(404).send('The category with given ID ' + req.params.id + ' was not found.');
    
   
    res.send(category);
});

//Get API to get category by ID 
router.get('/api/students/:id',async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send('The category with given ID ' + req.params.id + ' was not found.');
    
   
    res.send(category);
});



module.exports = router;