import { Link, useNavigate } from "react-router-dom";

export default function Register(){

const navigate=useNavigate();

const register=()=>{
navigate("/dashboard");
}

return(

<div className="container">

<div className="card" style={{maxWidth:"500px",margin:"60px auto"}}>

<h2>Create Account</h2>

<input placeholder="Full Name"/>

<input placeholder="Email"/>

<input
type="password"
placeholder="Password"
/>

<button onClick={register}>
Register
</button>

<p style={{marginTop:"20px"}}>

Already have account?

<Link to="/login">
 Login
</Link>

</p>

</div>

</div>

)

}