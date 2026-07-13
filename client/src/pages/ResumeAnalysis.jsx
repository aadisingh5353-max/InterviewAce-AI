import { useLocation, useNavigate } from "react-router-dom";

import SectionTitle from "../components/ui/SectionTitle";
import PrimaryButton from "../components/ui/PrimaryButton";

import ResumeSummary from "../components/resume/ResumeSummary";
import ATSCard from "../components/resume/ATSCard";
import ScoreBreakdown from "../components/resume/ScoreBreakdown";
import SkillsCard from "../components/resume/SkillsCard";
import StrengthsCard from "../components/resume/StrengthsCard";
import WeaknessesCard from "../components/resume/WeaknessesCard";
import SuggestionsCard from "../components/resume/SuggestionsCard";
import RecommendedRoles from "../components/resume/RecommendedRoles";

function ResumeAnalysis() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state;

  if (!data) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#09090F",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
        }}
      >
        No Resume Analysis Available
      </div>
    );
  }

  const { resume, analysis } = data;

  const handleContinue = () => {
    navigate("/interview", {
      state: {
        company: resume.company,
        role: resume.role,
        difficulty: resume.difficulty,

        resume,
        analysis,
      },
    });
  };

  return (
    <div
      style={{
        background: "#09090F",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <SectionTitle
        title="📄 Resume Intelligence Report"
        subtitle="AI-powered resume evaluation"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
        }}
      >
        <ResumeSummary resume={resume} />

        <ATSCard score={analysis.ats.score} />
      </div>

      <br />

      <ScoreBreakdown breakdown={analysis.ats.breakdown} />

      <br />

      <SkillsCard skills={resume.skills} />

      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <StrengthsCard strengths={analysis.strengths} />

        <WeaknessesCard weaknesses={analysis.weaknesses} />
      </div>

      <br />

      <SuggestionsCard suggestions={analysis.suggestions} />

      <br />

      <RecommendedRoles roles={analysis.recommendedRoles} />

      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <PrimaryButton onClick={() => navigate("/dashboard")}>
          ← Back
        </PrimaryButton>

        <PrimaryButton onClick={handleContinue}>
          Continue To Interview →
        </PrimaryButton>
      </div>
    </div>
  );
}

export default ResumeAnalysis;