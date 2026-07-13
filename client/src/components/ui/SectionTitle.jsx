function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "25px" }}>
      <h2
        style={{
          fontSize: "32px",
          color: "white",
          marginBottom: "8px",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            color: "#A1A1AA",
            fontSize: "16px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;