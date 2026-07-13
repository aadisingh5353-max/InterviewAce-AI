import Card from "../ui/Card";
import Badge from "../ui/Badge";

function SkillsCard({ skills }) {
  return (
    <Card>
      <h2>💻 Skills</h2>

      <br />

      {skills.length === 0 ? (
        <p>No skills detected.</p>
      ) : (
        skills.map((skill, index) => (
          <Badge
            key={index}
            text={skill}
          />
        ))
      )}
    </Card>
  );
}

export default SkillsCard;