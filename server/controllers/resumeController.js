const Resume = require("../models/Resume");

const { extractResumeData } = require("../services/resumeParser");

const { extractSkills } = require("../utils/skillExtractor");
const { extractEducation } = require("../utils/educationExtractor");
const { extractProjects } = require("../utils/projectExtractor");
const { extractExperience } = require("../utils/experienceExtractor");
const { extractContactInfo } = require("../utils/contactExtractor");

const { calculateATSScore } = require("../utils/atsScorer");

const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF resume.",
      });
    }

    // Company, Role & Difficulty selected by user
    const { company, role, difficulty } = req.body;

    // Extract Resume Text
    const parsedResume = await extractResumeData(req.file.path);
    const resumeText = parsedResume.text;

    // Extract Information
    const contact = extractContactInfo(resumeText);
    const skills = extractSkills(resumeText);
    const education = extractEducation(resumeText);
    const experience = extractExperience(resumeText);
    const projects = extractProjects(resumeText);

    // ATS Score
    const ats = calculateATSScore(resumeText);

    // Strengths
    const strengths = [];

    if (skills.length >= 8)
      strengths.push("Strong Technical Skill Set");

    if (projects.length >= 2)
      strengths.push("Good Project Experience");

    if (experience.length > 0)
      strengths.push("Relevant Experience");

    if (ats.score >= 80)
      strengths.push("ATS Friendly Resume");

    // Weaknesses
    const weaknesses = [];

    if (skills.length < 5)
      weaknesses.push("Limited Technical Skills");

    if (projects.length === 0)
      weaknesses.push("No Projects Found");

    if (experience.length === 0)
      weaknesses.push("No Experience Mentioned");

    if (!contact.linkedin)
      weaknesses.push("LinkedIn Profile Missing");

    if (!contact.github)
      weaknesses.push("GitHub Profile Missing");

    // Suggestions
    const suggestions = [];

    if (!contact.linkedin)
      suggestions.push("Add your LinkedIn profile.");

    if (!contact.github)
      suggestions.push("Add your GitHub profile.");

    if (projects.length < 2)
      suggestions.push("Include more technical projects.");

    if (experience.length === 0)
      suggestions.push("Mention internships or freelance work.");

    if (skills.length < 8)
      suggestions.push("Expand your technical skills section.");

    // Recommended Roles
    const recommendedRoles = [];

    if (skills.includes("React") && skills.includes("Node.js"))
      recommendedRoles.push("Full Stack Developer");

    if (skills.includes("Node.js") || skills.includes("Express"))
      recommendedRoles.push("Backend Developer");

    if (skills.includes("React") || skills.includes("JavaScript"))
      recommendedRoles.push("Frontend Developer");

    if (
      skills.includes("Python") ||
      skills.includes("Machine Learning")
    )
      recommendedRoles.push("AI / ML Engineer");

    if (
      skills.includes("SQL") ||
      skills.includes("Power BI") ||
      skills.includes("Tableau")
    )
      recommendedRoles.push("Data Analyst");

    // Save Resume
    const resume = await Resume.create({
      user: req.user.id,

      fileName: req.file.filename,
      originalName: req.file.originalname,

      company,
      role,
      difficulty,

      extractedText: resumeText,

      skills,
      education,
      experience,
      projects,

      atsScore: ats.score,
      atsBreakdown: ats.breakdown,

      strengths,
      weaknesses,
      suggestions,
      recommendedRoles,
    });

    res.status(201).json({
      success: true,
      message: "Resume processed successfully.",
      resume,
      analysis: {
        contact,
        ats,
        strengths,
        weaknesses,
        suggestions,
        recommendedRoles,
      },
    });

  } catch (error) {
    console.error("Resume Upload Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadResume,
};