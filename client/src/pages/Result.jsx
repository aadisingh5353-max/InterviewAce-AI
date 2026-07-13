import { useLocation } from "react-router-dom";

import ScoreCards from "../components/result/ScoreCards";
import RadarPerformance from "../components/result/RadarPerformance";
import StrengthCard from "../components/result/StrengthCard";
import WeaknessCard from "../components/result/WeaknessCard";
import RecommendationCard from "../components/result/RecommendationCard";
import QuestionAnalysis from "../components/result/QuestionAnalysis";
import ResultButtons from "../components/result/ResultButtons";

function Result() {
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
          fontSize: "24px",
        }}
      >
        No Interview Result Available
      </div>
    );
  }

  const { result } = data;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090F",
        color: "white",
        padding: "40px",
      }}
    >
      {/* Header */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          🎯 Interview Performance Report
        </h1>

        <p
          style={{
            color: "#A1A1AA",
            fontSize: "18px",
          }}
        >
          AI Evaluation Summary
        </p>
      </div>

      {/* Score Cards */}

      <ScoreCards result={result} />

      {/* Radar Chart */}

      <RadarPerformance result={result} />

      {/* Strengths & Weaknesses */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        <StrengthCard strengths={result.strengths} />

        <WeaknessCard weaknesses={result.weaknesses} />
      </div>

      {/* Recommendations */}

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <RecommendationCard
          recommendations={result.recommendations}
        />
      </div>

      {/* Question Analysis */}

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <QuestionAnalysis
          questions={result.questionAnalysis}
        />
      </div>

      {/* Bottom Buttons */}

      <ResultButtons />
    </div>
  );
}

export default Result;