import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import ContactSchema from "./Schema/ContactSchema.js"

const mongoDB = () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(
        ()=>{
            console.log("Connected")
           
        })
    .catch((err)=>console.log(err))
    

} 
export default  mongoDB