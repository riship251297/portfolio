import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import postroutes from './routes/posts.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/posts',postroutes);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cors());



const uri = process.env.ATLAS_URI;
mongoose.connect(uri).then(function (){
    console.log("Mongoose connected successfully");
})

// const connection = mongoose.connection;
// connection.once('open',()=>{
//     console.log("Mongoose database connection successful");
// })


app.get('/',function(req,res){
    res.send('hello');
})


app.listen(4000,function (){
    console.log("rishikesh")
});
