import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadResume } from "../services/resumeService";
import toast from "react-hot-toast";

function ResumeUploadCard({
  company,
  role,
  difficulty,
}) {
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      return toast.error("Please select a PDF resume.");
    }

    try {
      const token = localStorage.getItem("token");

      const data = await uploadResume(
        file,
        company,
        role,
        difficulty,
        token
      );

      toast.success("Resume analyzed successfully!");

      navigate("/resume-analysis", {
        state: {
          resume: data.resume,
          analysis: data.analysis,
        },
      });

    } catch (err) {

      console.error(err);

      toast.error(
        err.response?.data?.message ||
        "Resume upload failed."
      );

    }
  };

  return (
    <div
      style={{
        background: "#18181B",
        padding: "25px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      <h3
        style={{
          margin: 0,
        }}
      >
        📄 Upload Resume
      </h3>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      {file && (
        <p
          style={{
            color: "#A1A1AA",
            margin: 0,
          }}
        >
          Selected:
          <strong> {file.name}</strong>
        </p>
      )}

      <button
        onClick={handleUpload}
        style={{
          background: "#8B5CF6",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Upload & Analyze Resume
      </button>
    </div>
  );
}

export default ResumeUploadCard;