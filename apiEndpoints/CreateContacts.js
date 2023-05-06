import express from "express";
import mongoose from "mongoose";
import ContactSchema from "../Schema/ContactSchema.js";

const addr = express.Router()

addr.post("/add",(req,res)=>{
    const model = mongoose.model('data',ContactSchema)
    model.create({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number
    })
    .then(()=>{
        console.log('====================================');
        console.log("data added");
        console.log('====================================');
    })
})
export default addr
