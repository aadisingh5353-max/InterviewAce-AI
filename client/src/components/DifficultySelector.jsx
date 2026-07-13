function DifficultySelector({
  difficulty,
  setDifficulty,
}) {
  return (
    <div>
      <h2>Select Difficulty</h2>

      <br />

      <label>
        <input
          type="radio"
          name="difficulty"
          checked={difficulty === "easy"}
          onChange={() =>
            setDifficulty("easy")
          }
        />
        Easy
      </label>

      <br />
      <br />

      <label>
        <input
          type="radio"
          name="difficulty"
          checked={difficulty === "medium"}
          onChange={() =>
            setDifficulty("medium")
          }
        />
        Medium
      </label>

      <br />
      <br />

      <label>
        <input
          type="radio"
          name="difficulty"
          checked={difficulty === "hard"}
          onChange={() =>
            setDifficulty("hard")
          }
        />
        Hard
      </label>
    </div>
  );
}

export default DifficultySelector;