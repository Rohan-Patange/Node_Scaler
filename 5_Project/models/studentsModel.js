const mongoose = require('mongoose');
const Joi = require('joi');

//Schema
const studentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 50},
    phone: {type: String, required: true, minlength: 10, maxlength: 25},
    isEnrolled: {type: Boolean, default:false},
    
})

const Student = mongoose.model('Student', studentSchema);


function validateData(student){
    const schema = {
        name: Joi.string().min(3).maxlength(50).required(),
        phone: Joi.string().min(10).maxlength(25).required(),
        isEnrolled: Joi.Boolean(),
    }
    return Joi.validate(student, schema)

}

exports.Student = Student
exports.validate = validateData