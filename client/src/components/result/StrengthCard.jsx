function StrengthCard({ strengths }) {
  return (
    <div
      style={{
        background: "#18181B",
        padding: "25px",
        borderRadius: "18px",
      }}
    >
      <h2>💪 Strengths</h2>

      <ul>
        {strengths.map((item, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              color: "#22C55E",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StrengthCard;