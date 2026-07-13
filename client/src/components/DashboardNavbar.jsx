function DashboardNavbar() {
  return (
    <nav
      style={{
        padding: "20px 40px",
        borderBottom: "1px solid #333",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2 style={{ color: "#8b5cf6" }}>
        InterviewAce AI
      </h2>

      <button>
        Logout
      </button>
    </nav>
  );
}

export default DashboardNavbar;