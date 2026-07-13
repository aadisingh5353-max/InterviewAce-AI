const { evaluateAnswer } = require("./answerEvaluator");

function scoreInterview(
  questions,
  answers,
  keywordMap = {}
) {
  const questionAnalysis = [];

  let totalScore = 0;

  questions.forEach((question, index) => {
    const answer = answers[index] || "";

    const expectedKeywords =
      keywordMap[question] || [];

    const result = evaluateAnswer(
      question,
      answer,
      expectedKeywords
    );

    totalScore += result.score;

    questionAnalysis.push(result);
  });

  const overallScore =
    questionAnalysis.length === 0
      ? 0
      : Math.round(totalScore / questionAnalysis.length);

  const strengths = [];
  const weaknesses = [];
  const recommendations = [];

  if (overallScore >= 85)
    strengths.push("Excellent technical knowledge");

  if (overallScore >= 70)
    strengths.push("Good communication");

  if (overallScore < 70)
    weaknesses.push("Need stronger technical explanations");

  if (overallScore < 60)
    weaknesses.push("Improve problem-solving approach");

  if (overallScore < 85)
    recommendations.push(
      "Practice company-specific interview questions."
    );

  recommendations.push(
    "Explain answers with practical examples."
  );

  recommendations.push(
    "Revise core CS fundamentals."
  );

  return {
    overallScore,

    technical: Math.min(100, overallScore + 5),

    communication: Math.max(0, overallScore - 5),

    problemSolving: overallScore,

    confidence: Math.min(100, overallScore + 2),

    strengths,

    weaknesses,

    recommendations,

    questionAnalysis,
  };
}

module.exports = {
  scoreInterview,
};