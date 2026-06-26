const express=require("express");

const router=express.Router();


const {
saveTest,
getResult

}=require("../controllers/testController");



router.post("/submit",saveTest);


router.get("/result",getResult);



module.exports=router;