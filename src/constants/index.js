import notelite from "../assets/portss.png";
import finance from "../assets/dashboard.png";

export const profile = {
  name: "Preetham",
  tagline: "Selected Engineering Work, vol. 1",
  range: "for 2022 — 2026",
  position: "AI/ML Engineer",
  experience: "4+ years",
  company: "Aetna (CVS Health)",
  degree: "M.S. Computer Science, Binghamton University",
  email: "preethambhavirisetty66@gmail.com",
  phone: "+1 (716) 808-9656",
  linkedin: "https://www.linkedin.com/in/preetham10022001/",
  github: "https://github.com/Preethambhavirisetty",
  location: {
    label: "New York, USA",
    timeZone: "America/New_York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  heroSummary:
    "I build and ship backend & cloud-native platforms — currently leading delivery for a healthcare conversational AI platform at Aetna (CVS Health).",
};

export const metrics = [
  { value: "4+", label: "years shipping" },
  { value: "3", label: "companies" },
];

export const stack = [
  "Python",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "LangChain",
  "AWS",
  "Docker",
  "PostgreSQL",
  "Kafka",
  "React",
];

export const projects = [
  {
    name: "NoteLite",
    eyebrow: "Cloud-native notes",
    description:
      "A note-taking platform with a Node.js/TypeScript REST API, React + Tailwind frontend, and PostgreSQL storage. JWT/OAuth2 auth with user-level data isolation, containerized with Docker on AWS.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    image: notelite,
    link: "https://www.notelite.org/",
  },
  {
    name: "AI-Powered Finance Tracker",
    eyebrow: "LLM insights",
    description:
      "A full-stack finance tracker with Python/Node.js APIs, React + Tailwind frontend, and MongoDB for multi-profile data. Uses the OpenAI API to auto-generate spend summaries and anomaly flags.",
    tags: ["Python", "Node.js", "MongoDB", "OpenAI"],
    image: finance,
    link: "http://3.235.31.140/",
  },
];

export const experience = [
  {
    company: "Aetna (CVS Health)",
    role: "Forward Deployment Engineer",
    period: "Sep 2025 — Present",
    summary:
      "Lead customer-facing delivery for YAVA, a healthcare conversational AI platform across chat, SMS, and voice — covering infrastructure, release management, and production support.",
  },
  {
    company: "Cloud5.ai",
    role: "Software Development Engineer",
    period: "Dec 2024 — Aug 2025",
    summary:
      "Built backend microservices on Node.js/FastAPI handling 10K+ daily transactions on AWS ECS, cut deployment effort 50% via CI/CD, and shipped a RAG search service with LangChain + OpenSearch.",
  },
  {
    company: "CRED",
    role: "Software Developer",
    period: "Jan 2020 — Jul 2022",
    summary:
      "Built credit-approval automation in Spring Boot and FastAPI with embedded ML scoring, Kafka/Redis Streams event pipelines, and end-to-end CI/CD — cutting processing time ~40%.",
  },
];

export const contactInfo = {
  email: profile.email,
  phone: profile.phone,
  linkedin: profile.linkedin,
  github: profile.github,
};
