function QuestionAnalysis({ questions }) {
  return (
    <div
      style={{
        background: "#18181B",
        borderRadius: "18px",
        padding: "25px",
      }}
    >
      <h2>📝 Question Analysis</h2>

      {questions.map((item, index) => (
        <div
          key={index}
          style={{
            marginTop: "25px",
            paddingBottom: "20px",
            borderBottom: "1px solid #333",
          }}
        >
          <h3>Question {index + 1}</h3>

          <p>{item.question}</p>

          <h3
            style={{
              color: "#8B5CF6",
            }}
          >
            Score : {item.score}/100
          </h3>

          <p>{item.feedback}</p>
        </div>
      ))}
    </div>
  );
}

export default QuestionAnalysis;