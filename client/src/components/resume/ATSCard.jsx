function ATSCard({ score }) {
  return (
    <div
      style={{
        background: "#1A1A25",
        padding: "25px",
        borderRadius: "15px",
        textAlign: "center",
      }}
    >
      <h2>🎯 ATS Score</h2>

      <h1
        style={{
          color: "#8b5cf6",
          fontSize: "70px",
        }}
      >
        {score}
      </h1>

      <p>/100</p>

      <progress
        value={score}
        max="100"
        style={{
          width: "100%",
          height: "20px",
        }}
      />

      <br />

      <br />

      {score >= 90 && <h3>Excellent Resume</h3>}

      {score >= 75 && score < 90 && <h3>Good Resume</h3>}

      {score < 75 && <h3>Needs Improvement</h3>}
    </div>
  );
}

export default ATSCard;