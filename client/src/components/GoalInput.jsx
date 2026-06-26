import { useNavigate } from "react-router-dom";
import "./GoalInput.css";


function GoalInput(){

const navigate = useNavigate();


const goals = [

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


const startTest = (goal)=>{

navigate("/test",{

state:{
career:goal
}

});

};



return(

<div className="goal-container">


<div className="goal-card">


<h1>
Dream To Career
</h1>


<p>
Choose your career goal to start assessment
</p>



<div className="goal-buttons">


{
goals.map((goal)=>(


<button

key={goal}

className="goal-btn"

onClick={()=>startTest(goal)}

>

{goal}

</button>


))

}


</div>


</div>


</div>


)

}


export default GoalInput;