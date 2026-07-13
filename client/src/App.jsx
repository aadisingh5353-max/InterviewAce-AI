import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeAnalysis from "./pages/ResumeAnalysis";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import Result from "./pages/Result";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/interview" element={<Interview />} />

        <Route path="/resume-analysis" element={<ResumeAnalysis />} />

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/result" element={<Result />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;