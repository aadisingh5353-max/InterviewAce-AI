function InterviewProgress({
  current,
  total,
}) {
  const percentage =
    (current / total) * 100;

  return (
    <div>

      <h3>
        Question {current} of {total}
      </h3>

      <div
        style={{
          height: "10px",
          background: "#27272A",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            background: "#8B5CF6",
            height: "100%",
            borderRadius: "10px",
          }}
        />
      </div>

    </div>
  );
}

export default InterviewProgress;