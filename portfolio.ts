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
  about: `I am a BCA graduate from Aachariya Arts and Science College, Pondicherry University. 
I am passionate about AI and software development with a strong interest in building AI-powered applications. 
I am a positive thinker and hardworking individual committed to continuous learning and innovation.`,
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

export const projects = [
  {
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
];