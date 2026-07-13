function ProgressBar({ value, max = 100 }) {
  return (
    <div
      style={{
        width: "100%",
        height: "12px",
        background: "#27272A",
        borderRadius: "999px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${(value / max) * 100}%`,
          height: "100%",
          background: "#8B5CF6",
        }}
      />
    </div>
  );
}

export default ProgressBar;