const calculateATSScore = (resume) => {
  let score = 0;

  const breakdown = {
    contact: 0,
    education: 0,
    experience: 0,
    projects: 0,
    skills: 0,
    certifications: 0,
    formatting: 0,
  };

  const text = resume.toLowerCase();

  // -----------------------
  // Contact (10)
  // -----------------------
  if (/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(resume))
    breakdown.contact += 4;

  if (/(\+91|[6-9]\d{9})/.test(resume))
    breakdown.contact += 3;

  if (text.includes("linkedin"))
    breakdown.contact += 2;

  if (text.includes("github"))
    breakdown.contact += 1;

  // -----------------------
  // Education (15)
  // -----------------------
  if (
    text.includes("b.tech") ||
    text.includes("b.e") ||
    text.includes("computer science")
  )
    breakdown.education += 10;

  if (
    text.includes("cgpa") ||
    text.includes("percentage")
  )
    breakdown.education += 5;

  // -----------------------
  // Experience (20)
  // -----------------------
  if (
    text.includes("intern") ||
    text.includes("experience") ||
    text.includes("worked at")
  )
    breakdown.experience += 20;

  // -----------------------
  // Projects (20)
  // -----------------------
  if (
    text.includes("project") ||
    text.includes("developed") ||
    text.includes("built")
  )
    breakdown.projects += 20;

  // -----------------------
  // Skills (20)
  // -----------------------
  const skills = [
    "java",
    "python",
    "c++",
    "javascript",
    "react",
    "node",
    "express",
    "mongodb",
    "mysql",
    "git",
    "github",
    "html",
    "css",
  ];

  let found = 0;

  skills.forEach((skill) => {
    if (text.includes(skill))
      found++;
  });

  breakdown.skills = Math.min(
    20,
    Math.round((found / skills.length) * 20)
  );

  // -----------------------
  // Certifications (5)
  // -----------------------
  if (
    text.includes("certificate") ||
    text.includes("certification")
  )
    breakdown.certifications = 5;

  // -----------------------
  // Formatting (10)
  // -----------------------
  const words = resume.split(/\s+/).length;

  if (words > 300)
    breakdown.formatting += 5;

  if (resume.length > 1500)
    breakdown.formatting += 5;

  score = Object.values(breakdown).reduce((a, b) => a + b, 0);

  return {
    score,
    breakdown,
  };
};

module.exports = {
  calculateATSScore,
};