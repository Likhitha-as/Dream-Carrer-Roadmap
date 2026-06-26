import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import GoalInput from "./components/GoalInput";
import Test from "./components/Test";
import CareerChoice from "./components/CareerChoice";
import Result from "./pages/Result";
import Roadmap from "./pages/Roadmap";


function App() {

return (

<BrowserRouter>

<Navbar />


<div className="page-content">

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/goal" element={<GoalInput/>}/>

<Route path="/test" element={<Test/>}/>

<Route path="/career-choice" element={<CareerChoice/>}/>

<Route path="/result" element={<Result/>}/>

<Route path="/roadmap" element={<Roadmap/>}/>


</Routes>

</div>


<Footer />

</BrowserRouter>

)

}

export default App;