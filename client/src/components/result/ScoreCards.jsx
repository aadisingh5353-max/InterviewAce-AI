function ScoreCard({ title, score, color = "#8B5CF6" }) {
  return (
    <div
      style={{
        background: "#18181B",
        borderRadius: "18px",
        padding: "25px",
        textAlign: "center",
        boxShadow: "0 0 20px rgba(0,0,0,.2)",
      }}
    >
      <h3
        style={{
          color: "#A1A1AA",
          marginBottom: "20px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          fontSize: "48px",
          color,
          margin: 0,
        }}
      >
        {score}
      </h1>

      <p
        style={{
          marginTop: "10px",
          color: "#D4D4D8",
        }}
      >
        /100
      </p>
    </div>
  );
}

function ScoreCards({ result }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
      }}
    >
      <ScoreCard
        title="Overall"
        score={result.overallScore}
      />

      <ScoreCard
        title="Technical"
        score={result.technical}
        color="#22C55E"
      />

      <ScoreCard
        title="Communication"
        score={result.communication}
        color="#3B82F6"
      />

      <ScoreCard
        title="Confidence"
        score={result.confidence}
        color="#F59E0B"
      />
    </div>
  );
}

export default ScoreCards;