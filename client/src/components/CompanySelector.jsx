function CompanySelector({ company, setCompany }) {
  return (
    <div
      style={{
        background: "#18181B",
        padding: "25px",
        borderRadius: "15px",
      }}
    >
      <h3>Company</h3>

      <br />

      <select
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        style={{
          width: "100%",
        }}
      >
        <option>Amazon</option>
        <option>Google</option>
        <option>Microsoft</option>
        <option>Adobe</option>
        <option>Meta</option>
        <option>Netflix</option>
      </select>
    </div>
  );
}

export default CompanySelector;