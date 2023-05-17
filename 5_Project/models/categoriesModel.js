const Joi = require('joi');
const mongoose = require('mongoose');

//Schema
const categorySchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 50},
   
})

const Category = mongoose.model('Category', categorySchema);



function validateData(category){
    const schema = {
        name: Joi.string().min(3).required(),
    }
    return Joi.validate(category, schema)

}

exports.Category = Category
exports.validate = validateData

