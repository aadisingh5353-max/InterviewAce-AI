import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function RadarPerformance({ result }) {
  const data = [
    {
      subject: "Technical",
      score: result.technical,
    },
    {
      subject: "Communication",
      score: result.communication,
    },
    {
      subject: "Problem Solving",
      score: result.problemSolving,
    },
    {
      subject: "Confidence",
      score: result.confidence,
    },
  ];

  return (
    <div
      style={{
        background: "#18181B",
        padding: "30px",
        borderRadius: "18px",
        marginTop: "30px",
      }}
    >
      <h2>📊 Performance Radar</h2>

      <div style={{ width: "100%", height: 420 }}>
        <ResponsiveContainer>
          <RadarChart data={data}>
            <PolarGrid />

            <PolarAngleAxis dataKey="subject" />

            <PolarRadiusAxis domain={[0, 100]} />

            <Radar
              dataKey="score"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RadarPerformance;