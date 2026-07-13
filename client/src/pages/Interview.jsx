import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import InterviewHeader from "../components/interview/InterviewHeader";
import InterviewProgress from "../components/interview/InterviewProgress";
import QuestionCard from "../components/interview/QuestionCard";
import AnswerBox from "../components/interview/AnswerBox";
import Timer from "../components/interview/Timer";
import NavigationButtons from "../components/interview/NavigationButtons";

import { generateInterview } from "../services/interviewService";
import { evaluateInterview } from "../services/evaluationService";
function Interview() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state;

  const [questions, setQuestions] = useState([]);

  const [loading, setLoading] = useState(true);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] = useState([]);

  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (!state) {
      navigate("/dashboard");
      return;
    }

    loadInterview();
  }, []);

  const loadInterview = async () => {
    try {
      const token = localStorage.getItem("token");

      const data = await generateInterview(
        state.company,
        state.role,
        state.difficulty,
        token
      );

      setQuestions(data.questions);

      setAnswers(
        new Array(data.questions.length).fill("")
      );
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

const nextQuestion = async () => {
  const updated = [...answers];

  updated[currentQuestion] = answer;

  setAnswers(updated);

  // Last Question
  if (currentQuestion === questions.length - 1) {
    try {
      const token = localStorage.getItem("token");

      const data = await evaluateInterview(
        questions,
        updated,
        token
      );

      navigate("/result", {
        state: {
          result: data.result,
          interview: state,
        },
      });

    } catch (error) {
      console.log(error);
    }

    return;
  }

  setCurrentQuestion(currentQuestion + 1);

  setAnswer(updated[currentQuestion + 1] || "");
};

  const previousQuestion = () => {
    const updated = [...answers];

    updated[currentQuestion] = answer;

    setAnswers(updated);

    if (currentQuestion === 0) return;

    setCurrentQuestion(currentQuestion - 1);

    setAnswer(updated[currentQuestion - 1] || "");
  };

  if (loading)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#09090F",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
        }}
      >
        Preparing Interview...
      </div>
    );

  return (
    <div
      style={{
        background: "#09090F",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <InterviewHeader
        company={state.company}
        role={state.role}
        difficulty={state.difficulty}
      />

      <br />

      <Timer />

      <br />

      <InterviewProgress
        current={currentQuestion + 1}
        total={questions.length}
      />

      <br />

      <QuestionCard
        question={questions[currentQuestion]}
      />

      <AnswerBox
        answer={answer}
        setAnswer={setAnswer}
      />

      <NavigationButtons
        previous={previousQuestion}
        next={nextQuestion}
        current={currentQuestion + 1}
        total={questions.length}
      />
    </div>
  );
}

export default Interview;