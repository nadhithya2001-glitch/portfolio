export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  intro: string;
  about: string;
}

export const portfolioData: PortfolioData = {
  name: "Adhithya N",
  title: "Data Science & Generative AI Enthusiast",
  email: "nadhithya2001@gmail.com",
  phone: "+91 8870605528",
  location: "Cuddalore, Tamil Nadu",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "/Adhithya_Resume.pdf",
  intro:
    "Aspiring software and AI professional passionate about Python, Data Science, and Generative AI technologies.",
  about: `I am a BCA graduate from Aachariya Arts and Science College, Pondicherry University. I specialize in Python, Data Science, Generative AI, and full-stack web development using HTML, CSS, and JavaScript. I am a positive thinker and hardworking individual committed to continuous learning and innovation.`,
};

export const skills = [
  {
    name: "Python",
    icon: "code",
    category: "Language",
  },
  {
    name: "Data Science",
    icon: "database",
    category: "Specialization",
  },
  {
    name: "Generative AI",
    icon: "sparkles",
    category: "Specialization",
  },
  {
    name: "HTML",
    icon: "layout",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: "palette",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "code2",
    category: "Language",
  },
  {
    name: "Git & GitHub",
    icon: "gitBranch",
    category: "Tools",
  },
];

export const education = [
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Aachariya Arts and Science College",
    university: "Pondicherry University",
    percentage: "60%",
    year: "2023",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "State Board",
    percentage: "60%",
    year: "2020",
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "State Board",
    percentage: "60%",
    year: "2018",
  },
];

export const internships = [
  {
    id: 1,
    company: "TechCorp Ltd.",
    role: "Machine Learning Intern",
    duration: "June 2023 – August 2023",
    description: "Developed prototype models for predictive maintenance using Python and scikit‑learn, and built data pipelines for real‑time sensor data.",
    technologies: ["Python", "scikit‑learn", "Pandas", "AWS"],
    link: "https://github.com/yourusername/ml-internship",
  },
  {
    id: 2,
    company: "DataAnalytics Inc.",
    role: "Data Science Intern",
    duration: "Jan 2024 – Mar 2024",
    description: "Performed EDA, feature engineering and built regression models for sales forecasting. Created interactive dashboards with Plotly.",
    technologies: ["Python", "Pandas", "Plotly", "SQL"],
    link: "https://github.com/yourusername/data-internship",
  },
];

  export const projects = [{
    id: 1,
    title: "AI Chatbot using Python",
    description:
      "An intelligent chatbot built with Python and NLP technologies that can understand and respond to user queries.",
    technologies: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com",
    demo: "#",
    image: "🤖",
  },
  {
    id: 2,
    title: "Student Management System",
    description:
      "A full-stack web application for managing student records, grades, and academic performance.",
    technologies: ["Python", "JavaScript", "Database"],
    github: "https://github.com",
    demo: "#",
    image: "📚",
  },
  {
    id: 3,
    title: "Data Analysis Dashboard",
    description:
      "Interactive data visualization dashboard for analyzing and presenting complex datasets with actionable insights.",
    technologies: ["Python", "Data Science", "Visualization"],
    github: "https://github.com",
    demo: "#",
    image: "📊",
  },
  {
    id: 4,
    title: "Resume Screening AI Tool",
    description:
      "AI-powered tool that automatically screens and ranks resumes based on job requirements using machine learning.",
    technologies: ["Python", "Generative AI", "Machine Learning"],
    github: "https://github.com",
    demo: "#",
    image: "🤖",
  },
  {
    id: 5,
    title: "AI Image Generator",
    description:
      "A Python-powered web app that generates images from text prompts using diffusion models.",
    technologies: ["Python", "Generative AI", "Diffusion Models", "FastAPI"],
    github: "https://github.com",
    demo: "#",
    image: "🖼️",
  },
  {
    id: 6,
    title: "Python Data Analyzer",
    description:
      "A Python CLI tool for data cleaning, visualization, and predictive modeling using scikit-learn.",
    technologies: ["Python", "Data Science", "Machine Learning", "Pandas"],
    github: "https://github.com",
    demo: "#",
    image: "📊",
  },
];

export const certifications = [
  {
    title: "Python for Data Science",
    issuer: "Online Platform",
    date: "2024",
  },
  {
    title: "Introduction to AI",
    issuer: "Online Platform",
    date: "2024",
  },
  {
    title: "Generative AI Basics",
    issuer: "Online Platform",
    date: "2024",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2023",
  },
];