const pdfParse = require("pdf-parse");
const fs = require("fs");

const extractResumeData = async (filePath) => {
  try {
    const pdfBuffer = fs.readFileSync(filePath);

    const data = await pdfParse(pdfBuffer);

    const text = data.text;

    return {
      text,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  extractResumeData,
};