function InterviewHeader({
  company,
  role,
  difficulty
}) {
  return (
    <div
      style={{
        background: "#18181B",
        padding: "20px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>
          {company} Interview
        </h2>

        <p
          style={{
            color: "#A1A1AA",
            marginTop: "8px",
          }}
        >
          {role}
        </p>
      </div>

      <div
        style={{
          background: "#8B5CF6",
          padding: "8px 18px",
          borderRadius: "10px",
          fontWeight: "bold",
        }}
      >
        {difficulty.toUpperCase()}
      </div>
    </div>
  );
}

export default InterviewHeader;