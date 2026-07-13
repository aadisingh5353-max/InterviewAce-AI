function Badge({ text }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 15px",
        borderRadius: "999px",
        background: "#8B5CF620",
        color: "#A855F7",
        margin: "5px",
        fontWeight: "600",
      }}
    >
      {text}
    </span>
  );
}

export default Badge;