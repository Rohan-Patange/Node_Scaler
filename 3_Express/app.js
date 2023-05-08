const express = require('express');

const app = express();

//get, post, put, delete


app.use(express.json());

let courses = [
    {id:1,name:'JavaScript'},
    {id:2,name:'Java'},
    {id:3,name:'Python'}
]



//Get Methods
app.get('/', (req, res) => {

    res.send('Hello, world!');
})

app.get('/about', (req, res) => {

    res.send('This is Rohan!');
})

app.get('/contact', (req, res) => {

    res.send('Contact us at test.com');
})


app.get('/courses', (req, res) => {

    res.send(courses);
})

//Route Parameters

app.get('/courses/:id', (req, res) => {

    // res.send(req.params);
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course does not exist');

    res.send(course);
})

// Post Method
app.post('/courses', (req, res) => {

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course)

    res.send(course);
})


//Put Method
app.put('/courses/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course does not exist');
    
    course.name = req.body.name;

    res.send(course);
})


//Delete Method
app.delete('/courses/:id', (req, res) => {
    let updatedCourses = courses.find(course => course.id === parseInt(req.params.id));
    if(!updatedCourses) res.status(404).send('The course does not exist');
    
    const index = courses.indexOf(updatedCourses);
    courses.splice(index, 1);
    res.send(updatedCourses);
})

let port = process.env.PORT || 8000;

app.listen(8000, () => console.log(`Listening on ${port}`));

