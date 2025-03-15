const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
app.use(express.json());
mongoose.connect('mongodb+srv://rvsraghuram07:Raghu2005@cluster0.oae0x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=> console.log("Successfully connected"))
    .catch((err)=> console.log(err));

const tokenSchema = new mongoose.Schema({
    "username":{type:String, required:true, unique:true},
    "password":{type:String, required:true, unique:true},
    "role" : {type:String, required:true}
})
const token = mongoose.model('token', tokenSchema);

const studentSchema = new mongoose.Schema({
    "name":{type:String, required:true, unique:true},
    "age":{type:Number, required:true},
    "rollNo":{type:Number, required:true, unique:true}
})
const student = mongoose.model('student', studentSchema);

app.post('/addStudent', (req, res) => {
    const newStudent = new student(req.body);
    newStudent.save()
    .then(()=>{
        req.status(200).json({message:'Student added'});
    })
    .catch((err)=>{
        res.status(400).json({message:'Student not added'});
    })
    res.send('Student added');
}); 


app.get('/getStudents', (req, res) => {
    student.find()
    .then((students)=>{
        res.status(200).json(students);
    })
    .catch((err)=>{
        res.status(400).json({message:'Students not found'});
    })
});

app.get('/getStudent/:name', (req, res) => {
    student.findOne({name:req.params.name})
    .then((student)=>{
        if(student){
            res.status(200).json({
                "message":"Student found",
                "student":student
            });
        }
        else{
            res.status(404).json({
                "message":"Student not found"
            });
        }
        
    })
    .catch((err)=>{
        res.status(400).json({message:'Student not found'});
    })
});

app.put('/updateStudent/:name',authenticateToken, (req, res) => {
    student.findOneAndUpdate({name:req.params.name}, req.body)
    .then((student)=>{
        if(student){
            res.status(200).json({
                "message":"Student updated",
                "student":student
            });
        }
        else{
            res.status(404).json({
                "message":"Student not found"
            });
        }
        
    })
    .catch((err)=>{
        res.status(400).json({message:'Student not updated'});
    })
});

app.delete('/deleteStudent/:name', (req, res) => {
    student.findOneAndDelete({name:req.params.name})
    .then((student)=>{
        if(student){
            res.status(200).json({
                "message":"Student deleted",
                "student":student
            });
        }
        else{
            res.status(404).json({
                "message":"Student not found"
            });
        }
        
    })
    .catch((err)=>{
        res.status(400).json({message:'Student not deleted'});
    })
});

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    jwt.verify(token, "cvrcollege", (err, decoded)=>{
        if(err){
            return res.status(403).json({message: "Forbidden"});
        }
        else{
            // res.status(200).json({decoded});
            next();
        }
    });
}
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});