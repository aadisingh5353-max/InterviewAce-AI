const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    // Owner of the resume
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // File Information
    fileName: {
      type: String,
      required: true,
    },

    originalName: {
      type: String,
      required: true,
    },

    company: {
    type: String,
    default: "",
    },

    role: {
    type: String,
    default: "",
    },

    difficulty: {
    type: String,
    default: "easy",
    },

    // Extracted Resume Text
    extractedText: {
      type: String,
      default: "",
    },

    // Resume Details
    skills: {
      type: [String],
      default: [],
    },

    education: {
      type: [String],
      default: [],
    },

    experience: {
      type: [String],
      default: [],
    },

    projects: {
      type: [String],
      default: [],
    },

    certifications: {
      type: [String],
      default: [],
    },

    // ATS Score
    atsScore: {
      type: Number,
      default: 0,
    },

    // Detailed Score Breakdown
    atsBreakdown: {
      contact: {
        type: Number,
        default: 0,
      },

      education: {
        type: Number,
        default: 0,
      },

      experience: {
        type: Number,
        default: 0,
      },

      projects: {
        type: Number,
        default: 0,
      },

      skills: {
        type: Number,
        default: 0,
      },

      certifications: {
        type: Number,
        default: 0,
      },

      formatting: {
        type: Number,
        default: 0,
      },
    },

    // Analysis Results
    strengths: {
      type: [String],
      default: [],
    },

    weaknesses: {
      type: [String],
      default: [],
    },

    suggestions: {
      type: [String],
      default: [],
    },

    recommendedRoles: {
      type: [String],
      default: [],
    },

    recommendedCompanies: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);