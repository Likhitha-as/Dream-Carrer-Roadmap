import { Link } from "react-router-dom";

import ScoreCard from "../components/ScoreCard";

export default function Result(){

return(

<div className="container">

<ScoreCard

score={80}

level="Intermediate"

/>

<div className="card">

<h2>Strengths</h2>

<ul>

<li>Networking</li>

<li>Linux</li>

<li>Security Basics</li>

</ul>

</div>

<div className="card">

<h2>Need Improvement</h2>

<ul>

<li>Python</li>

<li>Cloud Security</li>

<li>Cryptography</li>

</ul>

</div>

<Link to="/roadmap">

<button>

View Roadmap

</button>

</Link>

</div>

);

}