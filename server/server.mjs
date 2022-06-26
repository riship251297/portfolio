import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import multer from "multer";

import postroutes from './routes/posts.js';
import test from './routes/posts.js';
// import firstpage from "./controllers/posts.js";

import contact from './routes/posts.js'
import friends from './models/friends.js'
import images from './models/image.js'



dotenv.config();


const app = express();
app.use(express.json());

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri).then(function (){
    console.log("Mongoose connected successfully");
})


app.get('/',(req,res)=>{
    res.send("can you see me !");
});

app.post('/tests',(req,res)=>
{
    try 
    {
        const username = req.body.username;
        res.send("The username is "+username);
    } 
    catch (error) 
    {
        res.sendStatus(404).json({message:error.message});
    }
});

import CryptoJS from 'crypto-js';
app.post("/contact",async (req,res)=>{
    const newfriend = new friends({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
    });
    try
    {
        const savedfriend = await newfriend.save();
        res.sendStatus(200).json(savedfriend);
    }
    catch(error)
    {
        res.sendStatus(500).json({message:error.message});
    }
});



const Storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb) =>{
        cb(null,file.originalname);
    },
});


const upload = multer({
    storage:Storage
}).single('testImage')

app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if (err)
        {console.log(err)}
        else{
            const newimage = new images({
                name:req.body.name,
                image :{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
            newimage.save()
            .then(()=>res.send("successfully uploaded")).catch(err=>console.log(err))
        }
    })
})




app.listen(3501,function (){
    console.log("rishikesh");
});
