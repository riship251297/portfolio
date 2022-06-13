import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongoose database connection successful");
})

app.get('/',function(req,res){
    res.send('hello');
})


app.listen(4000);
