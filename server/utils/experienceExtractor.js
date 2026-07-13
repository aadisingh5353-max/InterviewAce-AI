const EXPERIENCE_KEYWORDS = [
  "intern",
  "internship",
  "experience",
  "software engineer",
  "developer",
  "worked",
  "company",
];

const extractExperience = (text) => {
  const lines = text.split("\n");

  const experience = lines.filter((line) =>
    EXPERIENCE_KEYWORDS.some((keyword) =>
      line.toLowerCase().includes(keyword)
    )
  );

  return [...new Set(experience)];
};

module.exports = {
  extractExperience,
};