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
  subtitleLine2: "Interested in computer science positions, data science positions, and applied AI.",
  image: "/placeholder-profile.jpg",
  bio1:
    "Hello, I am a Junior at Louisiana State University studying Computer science with a concentration in Data Science & Analytics. I have had 2 internships at the college level, one doing Bioinformatics in a biology lab at LSU, and the other doing Data Analysis at BASF. In my roles I have used python, streamlit, pandas, QWEN models, Microsoft Copilot agent builders, and more. I am currently looking for Computer Science roles for after I graduate in May 2027. "
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
    venue: "Spring 2023",
    authors: "Scholarship awarded by BASF for academic excellence and potential in the field of data science.",
  },
];

// EDUCATION (all items you have — currently one from resume)
export const education = [
  {
    title: "Louisiana State University",
    venue: "Expected May 2027",
    authors:
      "BS Computer Science + Data Science & Analytics — GPA 3.3."
  },
];

// PROFESSIONAL DEVELOPMENT (only BASF x LSU AI item)
export const professionalDevelopment = [
  {
    title: "BASF x LSU AI Team (Site Planning Tool)",
    venue: "Fall 2025",
    authors: "Helped lead BASF x LSU AI team to create a site planning tool. This was a semester long project where at the end we presented to over 100 buissness leaders at Tiger Stadium about our Project. Our project was to create a tool to where it would automatically create job plan for all maitencance at the BASF site. "
  },
];

// LINKS section (you’ll fill these later)
export const links = [
  { label: "GitHub", href: "https://github.com/Twall05" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/taylor-wall-01581228a/" },
  {
    label: "Resume (PDF)",
    href: "/Taylor-Wall-Portfolio/TaylorWallResume2025.pdf",
    download: true,
  },
  { label: "Email", href: "mailto:taylorkwall5@gmail.com" },
];

// HOBBIES section (placeholders)
export const hobbies = [
  { title: "Sports", description: "Fan of sports especially college sports and football. Have been to The Swamp, Clemson memorial Stadium, Vaught-Hemmingway, and Bryant-Denny to go watch LSU play football. Also traveled to Omaha to watch LSU baseball win their 8th ring and have been to Stamford Bridge stadium in london to watch chelsea play." },
  { title: "Hiking", description: "Have been hiking with my family all of my life. From my earliest memories in pennsylvania to in North Carolina to the last decade when I lived in Louisiana I have been hiking. Our trips almost always include going to hike such as Angels Landing in Zion National Park, partway into the Grand Canyon, or even in North Carolina when we hiked to go see 9 waterfalls." },
  { title: "Video Games", description: "Have played video games since childhood. From sonic as a kid to modern titles such as Clair Obscur: Expedition 33 or Resident Evil Requiem. Video Games have always been a part of my life." },
];