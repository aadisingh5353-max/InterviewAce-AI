const PROJECT_KEYWORDS = [
  "project",
  "developed",
  "built",
  "created",
  "designed",
  "implemented",
];

const extractProjects = (text) => {
  const lines = text.split("\n");

  const projects = lines.filter((line) =>
    PROJECT_KEYWORDS.some((keyword) =>
      line.toLowerCase().includes(keyword)
    )
  );

  return [...new Set(projects)];
};

module.exports = {
  extractProjects,
};