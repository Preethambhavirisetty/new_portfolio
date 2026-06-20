import notelite from "../assets/portss.png";
import finance from "../assets/dashboard.png";
import orchestration from "../assets/georoute.png";
import rag from "../assets/todo.png";

const companies = [
  { name: "CVS Health", label: "Aetna", tone: "bg-white" },
  { name: "Cloud5.ai", label: "Cloud5", tone: "bg-[#eef3f6]" },
  { name: "CRED", label: "CRED", tone: "bg-white" },
  { name: "Binghamton", label: "BU", tone: "bg-[#f3efea]" },
];

const projects = [
  {
    name: "NoteLite",
    eyebrow: "Cloud notes",
    description:
      "A focused note-taking platform with secure user isolation, low-latency APIs, and a calm writing surface.",
    tags: ["Node.js", "TypeScript", "REST", "Docker"],
    image: notelite,
    source_code_link: "https://www.notelite.org/",
  },
  {
    name: "Finance Tracker",
    eyebrow: "AI insights",
    description:
      "A multi-profile finance dashboard with transaction summaries, AI-generated clarity, and tidy analytics views.",
    tags: ["Python", "Node.js", "AI", "Cloud"],
    image: finance,
    source_code_link: "http://3.235.31.140/",
  },
  {
    name: "AI Orchestration",
    eyebrow: "Healthcare flows",
    description:
      "A conversational routing layer for production healthcare inquiries using intent handling and Watson integrations.",
    tags: ["TypeScript", "Watson", "CI/CD"],
    image: orchestration,
    source_code_link: "https://github.com/Preethambhavirisetty",
  },
  {
    name: "RAG Inference API",
    eyebrow: "Context engine",
    description:
      "A retrieval pipeline for ingesting source data, indexing embeddings, and serving contextual AI responses.",
    tags: ["RAG", "Vector DB", "AWS"],
    image: rag,
    source_code_link: "https://github.com/Preethambhavirisetty",
  },
];

const skillGroups = {
  knowThat: {
    label: "Know That",
    items: ["System Design", "Backend APIs", "Data Modeling", "Reliability", "Cloud Deployments"],
  },
  likeThis: {
    label: "Like This",
    items: ["AI Workflows", "RAG Pipelines", "Prompt Routing", "Microservices", "Clean Interfaces"],
  },
  withThis: {
    label: "With This",
    items: ["Node.js", "TypeScript", "Python", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
  },
};

const testimonials = [
  {
    quote:
      "Preetham brings calm structure to ambiguous engineering problems and keeps the delivery moving.",
    name: "Aetna",
    role: "Healthcare AI",
  },
  {
    quote:
      "He connects backend detail with product context, which makes technical choices easier to trust.",
    name: "Cloud5.ai",
    role: "AI Systems",
  },
  {
    quote:
      "A reliable builder with a sharp eye for production behavior and user-facing impact.",
    name: "CRED",
    role: "Application Engineering",
  },
];

const contactInfo = {
  email: "preethambhavirisetty66@gmail.com",
  phone: "+1 (716) 808-9656",
  linkedin: "https://www.linkedin.com/in/preetham2001/",
  github: "https://github.com/Preethambhavirisetty",
};

export { companies, projects, skillGroups, testimonials, contactInfo };
