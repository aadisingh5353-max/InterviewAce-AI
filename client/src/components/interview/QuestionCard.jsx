function QuestionCard({
  question,
}) {
  return (
    <div
      style={{
        background: "#18181B",
        padding: "30px",
        borderRadius: "18px",
      }}
    >
      <h2>Question</h2>

      <p
        style={{
          fontSize: "22px",
          lineHeight: "1.8",
        }}
      >
        {question}
      </p>
    </div>
  );
}

export default QuestionCard;