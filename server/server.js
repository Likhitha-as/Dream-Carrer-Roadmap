const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");


dotenv.config();

connectDB();

const app = express();


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use(express.json());


// routes

app.use("/api/auth",
require("./routes/authRoutes")
);


app.use("/api/test",
require("./routes/testRoutes")
);


app.use("/api/roadmap",
require("./routes/roadmapRoutes")
);



app.get("/",(req,res)=>{
    res.send("Dream Career AI Backend Running");
});


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});