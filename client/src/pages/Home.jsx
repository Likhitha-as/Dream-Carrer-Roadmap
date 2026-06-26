import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">

      <div className="card" style={{textAlign:"center",marginTop:"70px"}}>

        <h1 className="title">
          Dream-to-Career AI
        </h1>

        <p className="subtitle">
          Skill Assessment + AI Career Roadmap Generator
        </p>

        <Link to="/login">
          <button>Get Started</button>
        </Link>

      </div>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px",
          marginTop:"40px"
        }}
      >

        <div className="card">
          <h3>🎯 Career Guidance</h3>
          <p>Generate roadmap based on your dream career.</p>
        </div>

        <div className="card">
          <h3>📝 Skill Assessment</h3>
          <p>Know your current knowledge level.</p>
        </div>

        <div className="card">
          <h3>📈 Progress Tracker</h3>
          <p>Track your learning journey.</p>
        </div>

      </div>

    </div>
  );
}