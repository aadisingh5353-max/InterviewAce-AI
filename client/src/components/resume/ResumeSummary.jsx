function ResumeSummary({ resume }) {
  return (
    <div
      style={{
        background: "#1A1A25",
        padding: "25px",
        borderRadius: "15px",
      }}
    >
      <h2>📄 Resume Overview</h2>

      <hr />

      <p><strong>File:</strong> {resume.originalName}</p>

      <p><strong>Characters:</strong> {resume.extractedText.length}</p>

      <p><strong>Skills Found:</strong> {resume.skills.length}</p>

      <p><strong>Projects:</strong> {resume.projects.length}</p>

      <p><strong>Education:</strong> {resume.education.length}</p>

      <p><strong>Experience:</strong> {resume.experience.length}</p>
    </div>
  );
}

export default ResumeSummary;