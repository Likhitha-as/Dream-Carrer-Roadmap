const mongoose=require("mongoose");


const testSchema=new mongoose.Schema({

userId:String,

career:String,

score:Number,

skills:[String],

weakness:[String],

createdAt:{
type:Date,
default:Date.now
}


});


module.exports=
mongoose.model("TestResult",testSchema);