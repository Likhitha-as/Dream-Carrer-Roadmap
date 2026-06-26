import { useState } from "react";
import { useNavigate } from "react-router-dom";

import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";

export default function SkillTest() {

const navigate = useNavigate();

const questions = [

{
question:"What does HTTPS provide?",
options:[
"Storage",
"Secure Communication",
"Virus Removal",
"Editing"
]
},

{
question:"Which command checks network?",
options:[
"mkdir",
"ping",
"git",
"npm"
]
}

];

const [current,setCurrent]=useState(0);

const nextQuestion=()=>{

if(current===questions.length-1){

navigate("/result");

}

else{

setCurrent(current+1);

}

};

return(

<div className="container">

<h1>Skill Assessment</h1>

<ProgressBar
progress={((current+1)/questions.length)*100}
/>

<QuestionCard

question={questions[current].question}

options={questions[current].options}

onSelect={nextQuestion}

/>

</div>

);

}