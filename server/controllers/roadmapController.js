const Roadmap=require("../models/Roadmap");



exports.createRoadmap=async(req,res)=>{


const data=await Roadmap.create(req.body);


res.json(data);


}



exports.getRoadmap=async(req,res)=>{


const data=
await Roadmap.findOne({
career:req.params.career
});


res.json(data);


}