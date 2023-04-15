const mongoose=require("mongoose");

const question= new mongoose.Schema({
    name:{type:String},
    question:{type:String}




});
const Question=mongoose.model("question",question);
module.exports=Question