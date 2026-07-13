function ScoreBreakdown({ breakdown }) {
  return (
    <div
      style={{
        background: "#1A1A25",
        padding: "25px",
        borderRadius: "15px",
      }}
    >
      <h2>📊 Score Breakdown</h2>

      <hr />

      {Object.entries(breakdown).map(([key, value]) => (
        <div key={key} style={{ marginBottom: "20px" }}>
          <h4>{key.toUpperCase()}</h4>

          <progress
            value={value}
            max="20"
            style={{
              width: "100%",
            }}
          />

          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}

export default ScoreBreakdown;