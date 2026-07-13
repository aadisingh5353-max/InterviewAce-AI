import Card from "../ui/Card";

function SuggestionsCard({ suggestions }) {
  return (
    <Card>
      <h2>💡 Suggestions</h2>

      <br />

      {suggestions.map((item, index) => (
        <p key={index}>➡ {item}</p>
      ))}
    </Card>
  );
}

export default SuggestionsCard;