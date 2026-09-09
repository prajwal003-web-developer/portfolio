// All content below is transcribed directly from Prajwal Neupane's resume.
// Edit this file to update site content — components read from here only.

export const profile = {
  name: "Prajwal Neupane",
  title: "Full-Stack Web Developer",
  summary:
    "Full-Stack Web Developer proficient in JavaScript, TypeScript, and the MERN stack. Experienced in building production-ready applications with Next.js and REST APIs, focusing on scalable database architecture and secure authentication. Strong foundations in Data Structures and Algorithms with a commitment to clean code and responsive engineering.",
  email: "sirprajwalneupane@gmail.com",
  phone: "+91 7479109758",
  location: "Nepal / India",
  links: {
    github: "https://github.com/prajwal003-web-developer",
    linkedin: "https://linkedin.com/in/prajwal003",
    website: "https://prajwalneupane.vercel.app",
  },
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "C++", "Python"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication (Clerk)"],
  },
] as const;

export const experience = [
  {
    org: "MERN STACK",
    location: "Learnt From Youtube and Docs",
    role: "Self Learning",
    period: "2024 Till Now",
    points: [
      "Collaborated on web development projects using the MERN stack to build and maintain responsive frontend components and backend logic.",
      "Contributed to the development of RESTful APIs and integrated them with React-based user interfaces to ensure seamless data flow.",
      "Participated in code reviews and utilized Git for version control within a team environment to deliver functional web solutions.",
    ],
  },
] as const;

export const projects = [
  {
    name: "ADTU Market",
    description:
      "A full-stack marketplace application enabling users to create, browse, and manage product listings with real-time status updates.",
    stack: ["Next.js", "MongoDB", "Clerk", "Cloudinary"],
    features: [
      "Secure user authentication and protected routes using Clerk, restricting access to listing-management features",
      "Backend architecture built on MongoDB and Mongoose for efficient, structured data persistence",
      "Cloudinary integration for multi-image product uploads",
      "Real-time listing status updates across browse and manage views",
    ],
    liveUrl: "https://adtu-market.vercel.app/",
    githubUrl: "",
    featured: true,
  },
  {
    name: "Expensy",
    description:
      "A comprehensive expense management application for tracking personal and group finances through a centralized dashboard.",
    stack: ["React.js", "Node.js", "Express", "Prisma" , "Postgres"],
    features: [
      "RESTful APIs handling transaction management, notifications, and secure user data storage",
      "Postgres-backed persistence for personal and group expense records",
      "Clean, intuitive frontend focused on financial data visualization",
      "Responsive dashboard experience across devices",
    ],
    liveUrl: "https://v1expensy.vercel.app/",
    githubUrl: "",
    featured: false,
  },
] as const;

export const education = [
  {
    institution: "Assam Down Town University (ADTU)",
    location: "Guwahati, India",
    program: "Bachelor of Technology in Computer Science and Engineering",
    period: "Pursuing",
    detail: "",
  },
  {
    institution: "Dhulabari Campus",
    location: "Dhulabari, Nepal",
    program: "Diploma in Information Technology",
    period: "2021 – 2024",
    detail: "Graduated with 73%",
  },
] as const;

export const problemSolving = {
  headline: "100+ DSA problems solved",
  description:
    "Successfully solved 100+ Data Structures and Algorithms problems, demonstrating proficiency in algorithmic thinking.",
};

export const nav = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
] as const;
