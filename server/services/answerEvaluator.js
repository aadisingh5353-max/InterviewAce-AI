const { keywordMatcher } = require("../utils/keywordMatcher");

function evaluateAnswer(question, answer, expectedKeywords = []) {
  const keywordData = keywordMatcher(
    answer,
    expectedKeywords
  );

  let score = 0;

  // Keyword Score (40)
  score += keywordData.matchPercentage * 0.4;

  // Length Score (20)
  const words = (answer || "").trim().split(/\s+/).length;

  if (words >= 80) {
    score += 20;
  } else if (words >= 50) {
    score += 15;
  } else if (words >= 25) {
    score += 10;
  } else {
    score += 5;
  }

  // Explanation Quality (20)
  if (
    answer.includes("because") ||
    answer.includes("therefore") ||
    answer.includes("for example")
  ) {
    score += 20;
  } else {
    score += 10;
  }

  // Technical Structure (10)
  if (
    answer.includes(".") ||
    answer.includes(",") ||
    answer.includes(":")
  ) {
    score += 10;
  } else {
    score += 5;
  }

  // Confidence (10)
  if (words >= 40) {
    score += 10;
  } else {
    score += 5;
  }

  score = Math.min(100, Math.round(score));

  let feedback = "";

  if (score >= 90)
    feedback = "Excellent technical answer.";

  else if (score >= 75)
    feedback = "Good answer with minor improvements needed.";

  else if (score >= 60)
    feedback = "Average answer. Add more technical depth.";

  else
    feedback =
      "Needs significant improvement. Include technical concepts and examples.";

  return {
    question,
    answer,
    score,
    feedback,
    matchedKeywords: keywordData.matchedKeywords,
    missingKeywords: keywordData.missingKeywords,
  };
}

module.exports = {
  evaluateAnswer,
};