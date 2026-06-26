const mongoose=require("mongoose");


const roadmapSchema=new mongoose.Schema({

career:String,

skills:[String],

learning:[String],

projects:[String],

certifications:[String]


});


module.exports=
mongoose.model("Roadmap",roadmapSchema);