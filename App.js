const express = require("express");
const mongoose = require("mongoose");
const StudentModule = require("./api/modules/student.modules");

const app=express();
app.use(express.json());
const mongooseLink="mongodb+srv://egbaryasalih:ukW97XN6zdalHocy@cluster0.6x5gfmz.mongodb.net/"
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () =>{
console.log(" mongo connected");


})

app.get("/app",(request,response) => {
    response.status(200).json({
        massage:"no",
        batata:"5kg", 

    });
}) ;

app.post("/creatNewStudent", (req, res) => {
    StudentModule.create({
      name: req.body.name,
      id: req.body.id,
    }).then((response) => {
      res.status(200).json({
        message: "done",
      });
    }).catch(e=>{
      res.status(500).json({message:'error'})
    });
  });
  
  app.get("/getAllUsers",  async ( req , res) => {
 try{
       const allUsers = await StudentModule.find();
     } catch (error) {
   console.log("get all students error: ", e);
     }
    StudentModule.find()
      .then((stRes) => {
        console.log("");
        res.status(200).json({
          message: "done",
          users: stRes,
        });
      })
      .catch((e) => {
        console.log("get all students error: ", e);
        res.status(500).json({error: true , errorMessage: e})
      });
  });
  
  app.post('/getUserByName' , (req , res) => {
    StudentModule.find({name:req.body.name})
    .then(students => {
      res.status(200).json(students)
    })
  })
  
  module.exports = app