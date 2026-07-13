function WeaknessCard({ weaknesses }) {
  return (
    <div
      style={{
        background: "#18181B",
        padding: "25px",
        borderRadius: "18px",
      }}
    >
      <h2>⚠ Weaknesses</h2>

      <ul>
        {weaknesses.map((item, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              color: "#EF4444",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeaknessCard;