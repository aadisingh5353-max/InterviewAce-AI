import { useState } from "react";

import DashboardNavbar from "../components/DashboardNavbar";
import ResumeUploadCard from "../components/ResumeUploadCard";
import CompanySelector from "../components/CompanySelector";
import RoleSelector from "../components/RoleSelector";
import DifficultySelector from "../components/DifficultySelector";
import StartInterviewButton from "../components/StartInterviewButton";

function Dashboard() {

  const [company, setCompany] = useState("Amazon");

  const [role, setRole] = useState("Frontend Developer");

  const [difficulty, setDifficulty] = useState("medium");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090F",
        color: "white",
      }}
    >
      <DashboardNavbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
          }}
        >
          Welcome Back 👋
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          <ResumeUploadCard
            company={company}
            role={role}
            difficulty={difficulty}
          />

          <CompanySelector
            company={company}
            setCompany={setCompany}
          />

          <RoleSelector
            role={role}
            setRole={setRole}
          />
        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <DifficultySelector
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <StartInterviewButton />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;