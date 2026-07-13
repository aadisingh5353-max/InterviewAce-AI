function keywordMatcher(answer, expectedKeywords) {
  const text = (answer || "").toLowerCase();

  const matchedKeywords = [];
  const missingKeywords = [];

  expectedKeywords.forEach((keyword) => {
    if (text.includes(keyword.toLowerCase())) {
      matchedKeywords.push(keyword);
    } else {
      missingKeywords.push(keyword);
    }
  });

  const matchPercentage =
    expectedKeywords.length === 0
      ? 100
      : Math.round(
          (matchedKeywords.length / expectedKeywords.length) * 100
        );

  return {
    matchedKeywords,
    missingKeywords,
    matchPercentage,
  };
}

module.exports = {
  keywordMatcher,
};