const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=>console.log('Connection is successful'))
.catch(err => console.log('Error connecting to mongodb',err))


//Schema
const courseSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 50},
    creator: {type: String, required: true, minlength: 2, maxlength: 50},
    publishedDate: {type:Date, default:Date.now},
    isPublished: {type: Boolean, required: true},
    rating: {type: Number, required: function(){return this.isPublished}},
    category: {type: String, required:true, enum : ['DSA','Web','Mobile','Data science']},
})

const Course = mongoose.model('Course', courseSchema)
//Model

// Create Courses Method
async function createCourse(){


    const course = new Course({
        name: 'C#',
        creator:'Rohan',
        isPublished: true,
        rating: 4.,
        category: 'Web'
    })
    
    
    const result = await course.save()
    
    console.log(result)
}

createCourse()


//Get Courses Method

async function getCourses(){

    const courses = await Course.find({rating:{$in:[4.5,4.8,3.5]}}).and([{creator: 'Rohan'},{isPublished: true}])
    
    
    console.log(courses)
}

// getCourses()

//Update Courses Method

async function updateCourses(id){

    let course = await Course.findById(id)
    if(!course) return;
    course.isPublished = true

    const updatedCourse = await course.save()
    console.log(updatedCourse)
}

updateCourses('6459c8e79f287a211b0f5f58')

//Delete Courses Method

async function deleteCourses(id) {

    let course = await Course.findByIdAndRemove(id)
    console.log(course)
}

deleteCourses('6459c8fc26b56690a71a0e02')