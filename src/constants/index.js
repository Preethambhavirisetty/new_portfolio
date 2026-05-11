// Only import what's actually used in the terminal
import portss from "../assets/portss.png";
import dashboard from "../assets/dashboard.png";
import todo from "../assets/todo.png";
import georoute from "../assets/georoute.png";


const experiences = [
  {
    title: "Software Engineer – Backend",
    company_name: "Aetna (CVS Health)",
    points: [
      "Designed and implemented backend services for a multi-intent conversational AI system using Node.js and TypeScript, handling prompt routing, intent resolution, and response orchestration. Result: Improved request handling throughput by ~35% while maintaining low latency under peak traffic.",
      "Integrated IBM Watson Assistant and IBM Watson Orchestrator with custom backend logic to manage conversation state, skill invocation, and fallback handling. Result: Reduced intent misrouting and manual intervention by ~30%.",
      "Built backend APIs to preprocess user inputs, enrich context, and enforce business rules before invoking AI services. Result: Improved response consistency and reduced AI hallucinations in production flows.",
      "Implemented CI/CD pipelines using Jenkins and Octopus Deploy, enabling controlled, environment-specific releases across QA and production. Result: Reduced deployment failures and rollback time by ~40%.",
      "Added structured logging, correlation IDs, and runtime metrics for chatbot interactions and backend services. Result: Improved production debugging time and issue resolution speed by ~45%."
    ],
  },
  {
    title: "Software Engineer – Backend / Cloud & AI",
    company_name: "Cloud5.ai",
    points: [
      "Designed backend services in Python and Node.js to ingest, normalize, and serve AI-ready data from heterogeneous sources. Result: Reduced data ingestion latency by ~30% and improved pipeline reliability.",
      "Implemented Retrieval-Augmented Generation (RAG) pipelines using embeddings and vector databases to support contextual AI responses. Result: Improved answer relevance and accuracy for downstream AI systems.",
      "Built scalable APIs to serve AI inference requests, handling batching, retries, and graceful degradation. Result: Increased system stability during high-traffic inference workloads.",
      "Deployed backend services on cloud infrastructure using containerization and automated CI pipelines. Result: Reduced manual deployment effort and improved release consistency.",
      "Collaborated with product and AI teams to translate ambiguous requirements into production-ready backend designs. Result: Faster feature delivery and reduced rework during integration phases."
    ],
  },
  {
    title: "Software Engineer – Application Development",
    company_name: "CRED (India)",
    points: [
      "Developed backend APIs for user workflows using Java/Python, focusing on correctness, validation, and performance. Result: Supported reliable feature launches used by thousands of active users.",
      "Implemented business logic for transaction processing, user onboarding, and account-level operations. Result: Reduced production bugs through improved validation and error handling.",
      "Worked closely with senior engineers to refactor legacy modules and improve code maintainability. Result: Improved code readability and reduced onboarding time for new developers.",
      "Participated in production support, debugging live issues, and rolling out fixes under tight SLAs. Result: Improved system stability and gained hands-on experience with real-world production systems."
    ],
  },
  {
    title: "Master of Science in Computer Science",
    company_name: "Binghamton University, NY",
    points: [
      "Completed advanced coursework in computer science with focus on system design, distributed systems, and software engineering principles."
    ],
  },
  {
    title: "Bachelor of Technology in Information Technology",
    company_name: "VR Siddhartha Engineering College, India",
    points: [
      "Developed strong foundation in software engineering, data structures, algorithms, and system design. Completed various projects demonstrating technical proficiency and problem-solving abilities."
    ],
  },
];


const projects = [
  {
    name: "NoteLite — Cloud-Native Note-Taking Platform",
    description:
    "Designed and built a lightweight, cloud-native note-taking application to support fast, distraction-free note management with a strong focus on backend performance, data consistency, and secure user isolation. Designed and implemented RESTful backend APIs using Node.js and TypeScript to support note creation, updates, deletions, and retrieval with user-level data segregation. Result: Achieved low-latency CRUD operations and consistent performance under concurrent usage. Implemented authentication and authorization using token-based security to ensure user-specific access to notes. Result: Prevented cross-user data access and ensured secure multi-user usage. Designed scalable data persistence models optimized for frequent read/write operations and future extensibility. Result: Enabled seamless scaling without schema rework. Containerized backend services and deployed using automated CI/CD pipelines. Result: Reduced manual deployment effort and ensured consistent releases across environments. Added structured logging and request tracing to monitor backend health and debug production issues efficiently. Result: Reduced issue diagnosis time and improved system reliability.",    
    tags: [
      {
        name: "Node.js",
      },
      {
        name: "TypeScript",
      },
      {
        name: "REST APIs",
      },
      {
        name: "Docker",
      },
      {
        name: "CI/CD",
      },
      {
        name: "Authentication",
      },
      {
        name: "Cloud Deployment",
      },
    ],
    image: portss,
    source_code_link: "https://www.notelite.org/",
  },
  {
    name: "AI-Powered Finance Tracker",
    description:
    "Built an end-to-end finance tracking platform that allows users to manage expenses, income, and financial insights across multiple profiles, enhanced with AI-generated summaries to simplify financial understanding and decision-making. Designed backend services to support multi-profile financial data isolation, enabling users to manage multiple financial accounts or personas within a single platform. Result: Enabled clean separation of financial data while maintaining a unified user experience. Implemented backend APIs for transaction ingestion, categorization, and aggregation, supporting expense tracking, income tracking, and historical analysis. Result: Provided accurate and structured financial views across profiles. Integrated AI-based summarization to generate natural-language financial insights (monthly spend summaries, category trends, anomalies). Result: Improved financial clarity and reduced manual analysis for users. Built data processing pipelines to normalize raw financial entries into analytics-ready formats. Result: Improved consistency and accuracy of financial reporting. Deployed backend services on cloud infrastructure with containerization and environment-specific configurations. Result: Ensured reliable operation and simplified future scaling. Added logging and basic observability to track AI requests, data processing failures, and API performance. Result: Improved production visibility and faster debugging.",
    tags: [
      {
        name: "Node.js",
      },
      {
        name: "Python",
      },
      {
        name: "REST APIs",
      },
      {
        name: "AI Summarization",
      },
      {
        name: "Cloud Deployment",
      },
      {
        name: "Docker",
      },
      {
        name: "Multi-Tenant Backend",
      },
    ],
    image: dashboard,
    source_code_link: "http://3.235.31.140/",
  },
  {
    name: "Conversational AI Orchestration Layer",
    description:
    "Designed and implemented a multi-intent routing backend for a production conversational AI system handling healthcare inquiries. Built Node.js/TypeScript microservices that manage conversation state, invoke IBM Watson skills, and enforce business rules before AI service calls. Added structured correlation IDs and CloudWatch metrics to improve production observability. Result: Improved request throughput by ~35%, reduced intent misrouting by ~30%, and cut incident resolution time by ~45%. Deployed via Jenkins and Octopus Deploy CI/CD pipelines with zero-downtime, environment-specific releases. Result: Reduced deployment failures and rollback time by ~40%.",
    tags: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "IBM Watson" },
      { name: "Microservices" },
      { name: "CI/CD" },
      { name: "AWS CloudWatch" },
    ],
    image: georoute,
    source_code_link: "https://github.com/Preethambhavirisetty",
  },
  {
    name: "RAG Pipeline — Contextual AI Inference API",
    description:
    "Built end-to-end Retrieval-Augmented Generation pipelines in Python and Node.js, ingesting heterogeneous data sources, generating embeddings, and indexing into a vector database for similarity search. Exposed scalable inference APIs with batching, retry logic, and graceful degradation to serve downstream LLM consumers. Result: Reduced data ingestion latency by ~30%, improved AI answer relevance and accuracy, and increased system stability under high-traffic inference workloads. Containerized services and deployed on AWS with automated CI pipelines. Result: Reduced manual deployment effort and improved release consistency.",
    tags: [
      { name: "Python" },
      { name: "LangChain" },
      { name: "Vector DB" },
      { name: "RAG" },
      { name: "Node.js" },
      { name: "Docker" },
      { name: "AWS" },
    ],
    image: todo,
    source_code_link: "https://github.com/Preethambhavirisetty",
  },
  {
    name: "Transaction Processing & User Onboarding APIs",
    description:
    "Developed backend REST APIs for user onboarding, account operations, and transaction processing at scale, serving thousands of concurrent users. Implemented input validation, JWT-based authentication, and idempotent transaction handlers to prevent double-processing. Result: Reduced production bugs through improved validation and supported reliable feature launches used by thousands of active users. Refactored legacy modules to improve maintainability and reduce onboarding time for new engineers. Participated in live production support under tight SLAs, debugging and rolling out fixes rapidly. Result: Improved overall system stability and gained deep hands-on experience with production-grade backend systems.",
    tags: [
      { name: "Java" },
      { name: "Python" },
      { name: "REST APIs" },
      { name: "JWT" },
      { name: "PostgreSQL" },
      { name: "Microservices" },
    ],
    image: portss,
    source_code_link: "https://github.com/Preethambhavirisetty",
  },
];

export { experiences, projects };
