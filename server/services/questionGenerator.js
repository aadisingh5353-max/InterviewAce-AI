const fs = require("fs");
const path = require("path");

const generateQuestions = ({
  company,
  role,
  difficulty,
  resumeSkills = [],
}) => {
  const companyFile = path.join(
    __dirname,
    "..",
    "data",
    "companies",
    `${company.toLowerCase()}.json`
  );

  if (!fs.existsSync(companyFile)) {
    throw new Error("Company database not found.");
  }

  const database = JSON.parse(
    fs.readFileSync(companyFile, "utf8")
  );

  if (!database[role]) {
    throw new Error("Role not found.");
  }

  const questions = database[role][difficulty];

  if (!questions) {
    throw new Error("Difficulty not found.");
  }

  const shuffled = [...questions].sort(
    () => Math.random() - 0.5
  );

  return shuffled.slice(0, 5);
};

module.exports = {
  generateQuestions,
};