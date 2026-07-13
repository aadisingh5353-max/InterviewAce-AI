import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Crack Your
        <br />
        Dream Job
      </h1>

      <h2
        style={{
          color: "#9b5cff",
          marginBottom: "25px",
        }}
      >
        <TypeAnimation
          sequence={[
            "AI Resume Analysis",
            2000,
            "Mock Interviews",
            2000,
            "Personalized Questions",
            2000,
            "AI Feedback",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>

      <p
        style={{
          width: "650px",
          maxWidth: "90%",
          color: "#b5b5b5",
          lineHeight: "1.7",
          marginBottom: "40px",
        }}
      >
        Prepare smarter with AI-powered resume analysis, company-specific
        interview questions, mock interviews, and instant performance
        evaluation.
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/register">
          <button
            style={{
              padding: "15px 35px",
              borderRadius: "12px",
              border: "none",
              background: "#8b5cf6",
              color: "white",
              fontSize: "17px",
            }}
          >
            Get Started
          </button>
        </Link>

        <Link to="/login">
          <button
            style={{
              padding: "15px 35px",
              borderRadius: "12px",
              background: "transparent",
              color: "white",
              border: "1px solid #555",
              fontSize: "17px",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;