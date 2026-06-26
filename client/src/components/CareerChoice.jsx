import { useNavigate } from "react-router-dom";
import "./CareerChoice.css";


function CareerChoice(){

const navigate = useNavigate();


const careers = [
 "Software Developer",
 "Web Developer",
 "AI / ML Engineer",
 "Cybersecurity Engineer",
 "Data Analyst",
 "Cloud Engineer",
 "Software Tester",
 "Government Jobs",
 "Business Analyst",
 "UI/UX Designer"
];


function startTest(career){

navigate("/test",{
state:{
career:career
}
});

}



return(

<div className="career-page">

<div className="career-box">


<h1>Select Your Career</h1>

<p>Choose your field to start test</p>


<div className="career-buttons">


{
careers.map((item)=>(


<button

key={item}

className="career-btn"

onClick={()=>startTest(item)}

>

{item}

</button>


))

}


</div>


</div>


</div>


)

}


export default CareerChoice;