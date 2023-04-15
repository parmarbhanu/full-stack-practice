const router=require("express").Router();
const Question=require("../Model/QuestionModel");


router.get("/ask",async(req,res)=>{
   try{
    const {name}=req.body;
    if(!name)
     return res.status("404").json("enter it")
      console.log("okkkk")
      

   }
   catch{
    return res.status("200").json("connect t net")
  console.log("err")
   }

});

module.exports=router