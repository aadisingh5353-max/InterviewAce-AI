function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: "#18181B",
        borderRadius: "18px",
        padding: "25px",
        border: "1px solid #2A2A35",
        boxShadow: "0 8px 25px rgba(0,0,0,.25)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Card;