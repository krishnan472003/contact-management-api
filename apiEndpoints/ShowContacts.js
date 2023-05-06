import express from "express";
import mongoose from "mongoose";
import ContactSchema from "../Schema/ContactSchema.js";

const showr = express.Router()
showr.get("/retrieve",async (req,res)=>{
    const model = mongoose.model('data', ContactSchema)
            // model.create({name:"krishnan",email:"kri.@ac.in,",number:"dsfd"})
            const data = await model.find({});
            console.log(data);
            res.json(data);
            
})
export default showr
