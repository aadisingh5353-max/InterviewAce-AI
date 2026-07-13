function RecommendationCard({ recommendations }) {
  return (
    <div
      style={{
        background: "#18181B",
        padding: "25px",
        borderRadius: "18px",
      }}
    >
      <h2>💡 Recommendations</h2>

      <ul>
        {recommendations.map((item, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationCard;