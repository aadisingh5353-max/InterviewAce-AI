import Card from "../ui/Card";

function WeaknessesCard({ weaknesses }) {
  return (
    <Card>
      <h2>⚠ Weaknesses</h2>

      <br />

      {weaknesses.map((item, index) => (
        <p key={index}>❌ {item}</p>
      ))}
    </Card>
  );
}

export default WeaknessesCard;