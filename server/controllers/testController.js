const Test=require("../models/TestResult");



exports.saveTest=async(req,res)=>{


const result=
await Test.create(req.body);



res.json(result);


}




exports.getResult=async(req,res)=>{


const data=
await Test.find();


res.json(data);


}