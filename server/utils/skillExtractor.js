const TECH_SKILLS = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Vue",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Firebase",
  "REST API",
  "GraphQL",
  "JWT",
  "Linux",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Power BI",
  "Tableau",
  "Excel",
  "Data Analysis"
];

const extractSkills = (text) => {
  const foundSkills = [];

  const lowerText = text.toLowerCase();

  TECH_SKILLS.forEach((skill) => {
    if (lowerText.includes(skill.toLowerCase())) {
      foundSkills.push(skill);
    }
  });

  return [...new Set(foundSkills)];
};

module.exports = {
  extractSkills,
};