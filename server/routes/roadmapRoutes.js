const express=require("express");

const router=express.Router();


const {
createRoadmap,
getRoadmap
}=require("../controllers/roadmapController");



router.post("/",createRoadmap);


router.get("/:career",getRoadmap);



module.exports=router;