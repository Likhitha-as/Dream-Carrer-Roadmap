import { Link, useNavigate } from "react-router-dom";

export default function Login(){

const navigate = useNavigate();


const login = ()=>{

navigate("/goal");

}


return(

<div className="container">


<div 
className="card" 
style={{maxWidth:"450px",margin:"60px auto"}}
>


<h2>Login</h2>


<input 
placeholder="Email"
/>


<input

type="password"

placeholder="Password"

/>



<button onClick={login}>

Login

</button>



<p style={{marginTop:"20px"}}>


New User?


<Link to="/register">

Register

</Link>


</p>


</div>


</div>


)

}