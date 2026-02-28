// src/data/siteData.js

export const lastUpdated = "Feb 26, 2026";

export const navLinks = [
  { label: "Main", href: "#top" },
  { label: "Education", href: "#education" },
  { label: "Work", href: "#work" },
  { label: "Professional Development", href: "#prodev" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Links", href: "#links" },
];

// Buttons/icons under your name (fill later)
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/taylor-wall-01581228a/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:taylorkwall5@gmail.com",
    icon: "gmail",
  },
];

// MAIN: what kind of CS student / jobs you want (required) :contentReference[oaicite:3]{index=3}
export const mainProfile = {
  name: "Taylor Wall",
  subtitleLine1: "Computer Science + Data Science & Analytics Student (LSU).",
  subtitleLine2: "Interested in software engineering, data tools, and applied AI.",
  image: "/placeholder-profile.jpg",
  bio1:
    "Body1", //Write a short intro about what kind of computer science student you are and the roles you want (internships / entry-level SWE / data roles).
  bio2:
    "Body2", //Add a second short paragraph (2–4 lines) highlighting what you like building (web apps, dashboards, automation, etc.).
};

// PROJECTS (1 item) — you can swap this later; currently uses your resume project
export const projects = [
  {
    title: "College Football Power Rankings",
    venue: "Python · Streamlit",
    authors: "Personal project",
    href: "https://cfbrankings.streamlit.app",
  },
];

// WORK (all your work info from resume)
export const work = [
  {
    title: "BASF — Digitalization Team Member",
    venue: "Geismar, LA · May 2025 – Present",
    bullets: [
      "Processed over 6 TB of data using Apache Tika to support FileFindr search/indexing.",
      "Built a wastewater dashboard using Streamlit and Pandas to improve performance and UX.",
      "Explored KNIME and showcased basic ML workflows for engineers.",
      "Validated lab data vs metadata for consistency and integrity.",
      "Collaborated with engineers to fix data quality issues and streamline preprocessing.",
      "Automated pipeline steps to reduce manual work and improve reliability.",
      "Led training sessions on cleaning/formatting data for analytics platforms like Power BI.",
    ],
  },
  {
    title: "LSU — Data Science Research Associate",
    venue: "Baton Rouge, LA · 2023 – 2025",
    bullets: [
      "Built a web-based fly sleep analysis program using Streamlit + Python.",
      "Integrated Plotly charts and interactive dataframes for visualization.",
      "Migrated key features from an R/Shiny app into Streamlit.",
      "Developed a protein structure prediction/alignment platform using Esmfold, Foldseek, Python, and Streamlit.",
      "Added automated email notifications (queued/started/completed) via SMTP.",
    ],
  },
  {
    title: "School IT Internship",
    venue: "Gonzales, LA · Aug 2022 – Dec 2022",
    bullets: [
      "Resolved hardware and software issues on laptops for faculty and staff.",
      "Assisted with deployment and setup of new laptops for students and staff.",
    ],
  },
];

// AWARDS (only one item, as requested)
export const awards = [
  {
    title: "BASF Scholarship Award",
    venue: "Award",
    authors: "Details coming soon (placeholder)",
    href: "#",
  },
];

// EDUCATION (all items you have — currently one from resume)
export const education = [
  {
    title: "Louisiana State University",
    venue: "Expected May 2027",
    authors:
      "Dual Degree: BS Computer Science + Data Science & Analytics and BS Business (Business Analytics) — GPA 3.3. :contentReference[oaicite:19]{index=19}",
    href: "#",
  },
];

// PROFESSIONAL DEVELOPMENT (only BASF x LSU AI item)
export const professionalDevelopment = [
  {
    title: "BASF x LSU AI Team (Site Planning Tool)",
    venue: "Professional Development",
    authors: "Helped lead BASF x LSU AI team to create a site planning tool. :contentReference[oaicite:20]{index=20}",
    href: "#",
  },
];

// LINKS section (you’ll fill these later)
export const links = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Resume (PDF)", href: "#" },
  { label: "Email", href: "mailto:taylorkwall5@gmail.com" },
];

// HOBBIES section (placeholders)
export const hobbies = [
  { title: "Hobby 1", description: "Placeholder — add later." },
  { title: "Hobby 2", description: "Placeholder — add later." },
  { title: "Hobby 3", description: "Placeholder — add later." },
];