function InfoBox({ label, value }) {
  return (
    <div
      style={{
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          color: "#A1A1AA",
          fontSize: "14px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          color: "white",
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default InfoBox;