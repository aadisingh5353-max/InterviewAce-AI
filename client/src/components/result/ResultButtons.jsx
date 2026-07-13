import { useNavigate } from "react-router-dom";

function ResultButtons() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "40px",
      }}
    >
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "14px 30px",
          border: "none",
          borderRadius: "12px",
          background: "#27272A",
          color: "white",
          cursor: "pointer",
        }}
      >
        ← Dashboard
      </button>

      <button
        onClick={() => navigate("/interview")}
        style={{
          padding: "14px 30px",
          border: "none",
          borderRadius: "12px",
          background: "#8B5CF6",
          color: "white",
          cursor: "pointer",
        }}
      >
        🔄 Retry Interview
      </button>
    </div>
  );
}

export default ResultButtons;