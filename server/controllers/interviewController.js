const { generateQuestions } = require("../services/questionGenerator");
const { scoreInterview } = require("../services/interviewScorer");

const getInterviewQuestions = async (req, res) => {
  try {
    const {
      company,
      role,
      difficulty,
      resumeSkills,
    } = req.body;

    const questions = generateQuestions({
      company,
      role,
      difficulty,
      resumeSkills,
    });

    res.status(200).json({
      success: true,
      totalQuestions: questions.length,
      questions,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const evaluateInterview = async (req, res) => {
  try {

    const {
      questions,
      answers,
    } = req.body;

    const result = scoreInterview(
      questions,
      answers
    );

    res.status(200).json({
      success: true,
      result,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getInterviewQuestions,
  evaluateInterview,
};