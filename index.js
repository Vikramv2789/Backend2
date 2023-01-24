const express = require('express')
const app = express();
app.use(express.json());
const courses = [
    {id: 1, name: "Fundamentals of IT Infrastucture"},
    {id: 2, name: "AP Calculus AB"},
    {id: 3, name: "Web Development"},
]

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})

app.post('/api/courses', (req,res) => 
    if(!course){
        res.send()
    }
        const course ={
            id: courses.length +1,
            name:req.body.name
    }
  });
