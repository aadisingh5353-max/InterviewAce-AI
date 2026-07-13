const EDUCATION_KEYWORDS = [
  "Bachelor",
  "B.Tech",
  "B.E",
  "M.Tech",
  "MCA",
  "BCA",
  "Computer Science",
  "Information Technology",
  "Engineering",
  "University",
  "College",
  "CGPA",
  "Percentage",
];

const extractEducation = (text) => {
  const lines = text.split("\n");

  const education = lines.filter((line) =>
    EDUCATION_KEYWORDS.some((keyword) =>
      line.toLowerCase().includes(keyword.toLowerCase())
    )
  );

  return [...new Set(education)];
};

module.exports = {
  extractEducation,
};