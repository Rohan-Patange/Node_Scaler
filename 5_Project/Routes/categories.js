const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Joi = require('joi');


//Schema
const categorySchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 50},
   
})

const Category = mongoose.model('Category', categorySchema);



//Get API to get categories
router.get('/api/categories',async (req,res)=>{
    let categories = await Category.find()
    res.send(categories);
})

//Post API to add categories
router.post('/api/categories', async(req,res)=>{

    const {error} = validateData(req.body);
    if(error) res.status(400).send(error.details[0].message);
    const category = new Category({
        name : req.body.name
    })

    await category.save()
    res.send(category);
})

//Put API to update categories
router.put('/api/categories/:id',async (req, res)=>{
    const {error} = validateData(req.body);
    if(error) res.status(400).send(error.details[0].message);

    const category = await Category.findByIdAndUpdate(req.params.id, {name: req.body.name},{new: true});
    if (!category) return res.status(404).send('The category with given ID ' + req.params.id + ' was not found.');
    
    res.send(category);
});

//Delete API to delete categories
router.delete('/api/categories/:id',async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id);
    if (!category) return res.status(404).send('The category with given ID ' + req.params.id + ' was not found.');
    
   
    res.send(category);
});

//Get API to get category by ID 
router.get('/api/categories/:id',async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send('The category with given ID ' + req.params.id + ' was not found.');
    
   
    res.send(category);
});


function validateData(category){
    const schema = {
        name: Joi.string().min(3).required(),
    }
    return Joi.validate(category, schema)

}


module.exports = router;