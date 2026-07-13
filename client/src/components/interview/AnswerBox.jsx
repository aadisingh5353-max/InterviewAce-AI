function AnswerBox({
  answer,
  setAnswer,
}) {
  return (
    <textarea
      value={answer}
      onChange={(e) =>
        setAnswer(e.target.value)
      }
      rows="8"
      placeholder="Type your answer here..."
      style={{
        width: "100%",
        marginTop: "25px",
        padding: "20px",
        borderRadius: "12px",
        background: "#18181B",
        color: "white",
        border: "1px solid #27272A",
        fontSize: "17px",
      }}
    />
  );
}

export default AnswerBox;