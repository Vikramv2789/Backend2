const express = require('express')
const app = express();
app.use(express.json());
const courses = [
    {id: 1, name: "Fundamentals of IT Infrastucture"},
    {id: 2, name: "AP Calculus AB"},
    {id: 3, name: "Web Development"},
]

app.post('/api/courses', (req,res)=> {
    if(Object.values(req.body)[0].length > 3){
        const course ={
            //we assign an ID and a name property
            id: courses.length +1,
            name:req.body.name    
        }
        courses.push(course);
        res.send(course);
        return 200;
    }
    else{
        return 404;
    }
})

app.put('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID was not found");
        return 404;
    }
    else if(Object.values(req.body)[0].length > 3){
        const newCourse ={
            //we assign an ID and a name property
            id: req.params.id,
            name:req.body.name    
        }
        const num = courses.indexOf(course)
        courses[num] = newCourse;
        res.send(newCourse);
        return 200;
    }
    else{
        return 404;
    }
});

app.delete('/api/courses/:id', (req,res)=>{
    //code the following logic
    //look up the course by id
        //return 404 if does not exist
        //delete the course by index HINT: use the indexOf() and splice() methods
        // return the response to the client the course that was deleted
        const course = courses.find(c=> c.id === parseInt(req.params.id));
        if(!course){
            res.status(404).send("The course with the given ID was not found");
            return 404;
        }
        else if(Object.values(req.body)[0].length > 3){
            const num = courses.indexOf(course)
            courses.splice(num);
            res.send(course);
            return 200;
        }else{
            return 404;
        }


});


app.get('/api/courses', (req,res)=>{
    res.send(courses);
})

app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID was not found");
        return;
    }
        res.send(course);
}
)
app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})
