import Card from "../ui/Card";

function StrengthsCard({ strengths }) {
  return (
    <Card>
      <h2>💪 Strengths</h2>

      <br />

      {strengths.map((item, index) => (
        <p key={index}>✅ {item}</p>
      ))}
    </Card>
  );
}

export default StrengthsCard;