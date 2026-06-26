import RoadmapCard from "../components/RoadmapCard";

import { useNavigate } from "react-router-dom";


export default function Roadmap() {


const navigate = useNavigate();


return (

<div className="container">


<h1 className="title">
🚀 Your Career Learning Roadmap
</h1>


<p className="subtitle">
Personalized path based on your assessment
</p>



<RoadmapCard

week="Week 1 - 2"

topic="Python Basics + Linux"

learn={[
"Python Syntax",
"Functions",
"Linux Commands",
"File System"
]}

resources={[
"freeCodeCamp",
"Linux Journey",
"Coursera"
]}

/>



<RoadmapCard

week="Week 3 - 5"

topic="Networking + Cyber Security"

learn={[
"TCP/IP",
"Networking Basics",
"Ethical Hacking",
"Web Security"
]}

resources={[
"TryHackMe",
"Cybrary",
"Udemy"
]}

/>



<RoadmapCard

week="Week 6 - 8"

topic="Advanced Security"

learn={[
"Cloud Security",
"SIEM Tools",
"Threat Detection"
]}

resources={[
"Microsoft Learn",
"AWS Skill Builder"
]}

/>



<div className="card">

<h2>💻 Recommended Projects</h2>

<ul>

<li>Port Scanner</li>
<li>Password Strength Checker</li>
<li>Vulnerability Scanner</li>
<li>Mini Firewall</li>

</ul>

</div>




<div className="card">

<h2>🏆 Certifications</h2>

<ul>

<li>CompTIA Security+</li>
<li>CEH</li>
<li>OSCP</li>

</ul>

</div>



<button

className="next-goal-btn"

onClick={() => navigate("/goal")}

>

Choose Another Career

</button>



</div>

);

}