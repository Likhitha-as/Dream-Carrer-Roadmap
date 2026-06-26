import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Test.css";


function Test(){


const location = useLocation();
const navigate = useNavigate();


const career = location.state?.career || "Software Developer";


const testData = {


"Software Developer":[
{
question:"Which language is mainly used for programming?",
options:["HTML","JavaScript","CSS","SQL"]
},
{
question:"What is OOP?",
options:[
"Object Oriented Programming",
"Online Output Program",
"Open Operating Process",
"None"
]
},
{
question:"React is a?",
options:[
"Library",
"Database",
"Operating System",
"Browser"
]
}
],



"Web Developer":[
{
question:"HTML is used for?",
options:[
"Web structure",
"Database",
"Security",
"Testing"
]
},
{
question:"CSS is used for?",
options:[
"Styling",
"Programming",
"Database",
"Networking"
]
}
],



"AI / ML Engineer":[
{
question:"AI means?",
options:[
"Artificial Intelligence",
"Automatic Internet",
"Advanced Input",
"None"
]
},
{
question:"Machine learning uses?",
options:[
"Data",
"Keyboard",
"Monitor",
"Browser"
]
}
],



"Cybersecurity Engineer":[
{
question:"Firewall is used for?",
options:[
"Network Security",
"Design",
"Coding",
"Storage"
]
},
{
question:"VPN provides?",
options:[
"Secure Connection",
"Games",
"Database",
"Images"
]
}
],



"Data Analyst":[
{
question:"SQL is used for?",
options:[
"Database",
"Animation",
"Design",
"Games"
]
},
{
question:"Data analysis helps to?",
options:[
"Find insights",
"Create hardware",
"Repair phones",
"None"
]
}
],



"Cloud Engineer":[
{
question:"AWS is a?",
options:[
"Cloud Platform",
"Programming Language",
"Browser",
"Editor"
]
}
],



"Software Tester":[
{
question:"Testing is done to find?",
options:[
"Bugs",
"Colors",
"Images",
"Files"
]
}
],



"Government Jobs":[
{
question:"UPSC is related to?",
options:[
"Government Exams",
"Coding",
"Design",
"Testing"
]
},
{
question:"Reasoning tests check?",
options:[
"Logical Thinking",
"Drawing",
"Coding",
"Typing"
]
}
],



"Business Analyst":[
{
question:"Business Analyst focuses on?",
options:[
"Requirements",
"Hardware",
"Games",
"Networking"
]
}
],



"UI/UX Designer":[
{
question:"UX means?",
options:[
"User Experience",
"User Execute",
"Upload XML",
"None"
]
}
]


};



const questions = testData[career];


const [current,setCurrent] = useState(0);


function nextQuestion(){


if(current < questions.length-1){

setCurrent(current+1);

}

else{

navigate("/result");

}


}



return(

<div className="test-container">


<div className="test-card">


<h2>
{career} Assessment Test
</h2>


<div className="progress">

<div 
className="progress-bar"
style={{
width:`${((current+1)/questions.length)*100}%`
}}
>

</div>

</div>



<h3>

{questions[current].question}

</h3>



{
questions[current].options.map((option)=>(


<label 
className="option"
key={option}
>


<input 
type="radio"
name="answer"
/>


{option}


</label>


))

}



<button 
className="next-btn"
onClick={nextQuestion}
>

{
current === questions.length-1
?
"Finish Test"
:
"Next"
}


</button>



</div>


</div>


)

}


export default Test;