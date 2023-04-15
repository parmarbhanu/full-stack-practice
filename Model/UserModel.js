const mongoose = require("mongoose");

const user= new mongoose.Schema({
  
  name: { type: String },
  email:{type:String},
 phone:{type:Number,require:true},
 dob:{type:String,require:false},
 codchef:{type:String,require:false},
 leetcode:{type:String,require:false},
  
});

const Usersmodel = mongoose.model("User", user);

module.exports = Usersmodel





















// const mongoose=require('mongoose');
// const user=new mongoose.scheema({
//  name:{type:string,require:true,default:bhanu},
//  email:{type:string,require:false},
//  phone:{type:Number,require:true},
//  dob:{type:string,require:false},
//  codchef:{type:string,require:true},
//  leetcode:{type:string,require:true}

// });
// const User=mongoose.model("User",user);
// module.exports=User


//   reg_id: {  type: Number,required: true},
//   auth_name: { type: String, required: false },
//   auth_email: { type: String, required: false },
//   date_of_birth: { type: String, required: false },
//   gender: { type: String, required: false },
//   event: { type: String, required: false },
//   college: { type: String, required: false },
//   fees: {type:Number,required: true},
//   utr: { type: String, required: false },
//   payment_status: { type: String, default: "Pending" },
//   date_added: {  type: Date,default: Date.now},




  

















  // event: { type: String, required: false },
  // college: { type: String, required: false },
  // fees: {type:Number,required: true},
  // utr: { type: String, required: false },
  // payment_status: { type: String, default: "Pending" },
  // date_added: {  type: Date,default: Date.now},