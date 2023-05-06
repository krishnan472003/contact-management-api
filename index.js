import express from "express"
import dotenv from "dotenv"
import mongoDB from "./db.js";
import bodyParser from "body-parser";
import addr from "./apiEndpoints/CreateContacts.js";
import showr from "./apiEndpoints/ShowContacts.js";
import uptr from "./apiEndpoints/UpdateContacts.js";
import delr from "./apiEndpoints/DeleteContacts.js";
const app = express();
//parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//for solving CORS issue
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
dotenv.config();
mongoDB()
app.use("/api",addr)
app.use("/api",showr)
app.use("/api",uptr)
app.use("/api",delr)

const PORT = process.env.PORT
app.get('/',(req,res) =>{
    
    
})
app.listen(PORT,()=>{
    console.log(`connect to port ${PORT}`);
})