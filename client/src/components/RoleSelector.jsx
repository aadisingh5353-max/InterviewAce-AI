function RoleSelector({ role, setRole }) {
  return (
    <div
      style={{
        background: "#18181B",
        padding: "25px",
        borderRadius: "15px",
      }}
    >
      <h3>Role</h3>

      <br />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          width: "100%",
        }}
      >
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Full Stack Developer</option>
        <option>Data Analyst</option>
        <option>AI / ML Engineer</option>
      </select>
    </div>
  );
}

export default RoleSelector;