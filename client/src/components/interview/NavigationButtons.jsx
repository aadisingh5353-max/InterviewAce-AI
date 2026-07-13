function NavigationButtons({
  previous,
  next,
  current,
  total,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent:
          "space-between",
        marginTop: "35px",
      }}
    >
      <button
        onClick={previous}
        disabled={current === 1}
      >
        Previous
      </button>

      <button onClick={next}>
        {current === total
          ? "Submit Interview"
          : "Next"}
      </button>
    </div>
  );
}

export default NavigationButtons;