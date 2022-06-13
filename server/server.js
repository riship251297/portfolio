import mongoose from "mongoose";
import { Express } from "express";
import cors from "cors";

require('dotenv').config();
const app = Express();
app.use(cors());
app.use(express.json());



app.listen(2050,()=>{
    console.log("hey iam great !");
})