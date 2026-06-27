import resumePdf from "../assets/PreethamBhavirisetty.pdf";

export const profile = {
  name: "Preetham",
  fullName: "Preetham Bhavirisetty",
  tagline: "Backend systems. AI products. Production delivery.",
  range: "selected work / 2020-2026",
  position: "AI/ML Engineer",
  experience: "4+ years",
  company: "Aetna (CVS Health)",
  email: "preethambhavirisetty@gmail.com",
  phone: "+1 (716) 808-9656",
  linkedin: "https://www.linkedin.com/in/preetham10022001/",
  github: "https://github.com/Preethambhavirisetty?tab=repositories",
  location: {
    label: "New York City, USA",
    timeZone: "America/New_York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  resume: resumePdf,
  heroSummary:
    "I build the plumbing that powers modern AI - engineering low - latency RAG pipelines, accelerating LLM token throughput via CUDA, and deploying high-availability infrastructure at scale.",
};

export const metrics = [
  { value: "4+", label: "years shipping" },
  { value: "1M+", label: "AI platform interactions" },
  { value: "60%", label: "RAG embedding throughput gain" },
  { value: "40%", label: "processing time cut" },
];

export const heroSkills = [
  "Python",
  "C++",
  "LLM",
  "RAG",
  "Vector DB",
  "LangChain",
  "AWS",
  "FastAPI",
  "React",
  "TypeScript",
];

export const highlights = [
  "Customer-facing delivery for a healthcare conversational AI platform across chat, SMS, and voice.",
  "RAG search with LangChain and OpenSearch for large-scale internal knowledge retrieval.",
  "Event-driven credit automation using Spring Boot, FastAPI, Kafka, Redis Streams, and embedded ML scoring.",
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
    role: "AI Engineer",
    period: "Dec 2024 — Aug 2025",
    summary:
      "Boosted RAG embedding throughput 60% with a CUDA-accelerated PyTorch pipeline, added C++/pybind11 inference bindings for a further 25% gain, and hit sub-200ms P99 retrieval latency with LangChain + OpenSearch.",
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
