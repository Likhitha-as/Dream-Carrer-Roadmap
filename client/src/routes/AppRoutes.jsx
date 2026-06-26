import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CareerInput from "../pages/CareerInput";
import SkillTest from "../pages/SkillTest";
import Result from "../pages/Result";
import Roadmap from "../pages/Roadmap";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/career" element={<CareerInput />} />

        <Route path="/skill-test" element={<SkillTest />} />

        <Route path="/result" element={<Result />} />

        <Route path="/roadmap" element={<Roadmap />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;