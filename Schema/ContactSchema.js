import {Schema,model} from "mongoose"

const ContactSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    number:{
        type: String,
    }
});

export default ContactSchema