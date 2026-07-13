const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getInterviewQuestions,
  evaluateInterview,
} = require("../controllers/interviewController");

router.post(
  "/generate",
  authMiddleware,
  getInterviewQuestions
);

router.post(
  "/evaluate",
  authMiddleware,
  evaluateInterview
);

module.exports = router;