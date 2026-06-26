import { Link } from "react-router-dom";

export default function Dashboard(){

return(

<div className="container">

<h1 style={{marginTop:"30px"}}>
Welcome 👋
</h1>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
marginTop:"30px"
}}
>

<div className="card">

<h3>Career Goal</h3>

<p>Cybersecurity Engineer</p>

</div>

<div className="card">

<h3>Current Level</h3>

<p>Intermediate</p>

</div>

<div className="card">

<h3>Progress</h3>

<div className="progress">

<div style={{width:"70%"}}></div>

</div>

<br/>

70%

</div>

</div>

<div
style={{
marginTop:"40px",
display:"flex",
gap:"20px"
}}
>

<Link to="/test">

<button>
Start Skill Test
</button>

</Link>

<Link to="/roadmap">

<button>
View Roadmap
</button>

</Link>

</div>

</div>

)

}