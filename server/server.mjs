import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import postroutes from './routes/posts.js';
import getLogger from 'log4js';

dotenv.config();

export const logger = getLogger()

const app = express();
app.use(express.json());

app.use('/posts',postroutes);
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cors());


logger.info("Doing good huh")
const uri = process.env.ATLAS_URI;
mongoose.connect(uri).then(function (){
    console.log("Mongoose connected successfully");
})



app.get('/',function(req,res){
    res.send('hello');
})


app.listen(4000,function (){
    console.log("rishikesh")
});
