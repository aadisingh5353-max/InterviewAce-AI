import Card from "../ui/Card";
import Badge from "../ui/Badge";

function RecommendedRoles({ roles }) {
  return (
    <Card>
      <h2>🎯 Recommended Roles</h2>

      <br />

      {roles.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        roles.map((role, index) => (
          <Badge
            key={index}
            text={role}
          />
        ))
      )}
    </Card>
  );
}

export default RecommendedRoles;