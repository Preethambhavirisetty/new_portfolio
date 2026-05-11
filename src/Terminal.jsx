import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences, projects } from './constants';
import PreethamBhavirisettyResume from './assets/PreethamBhavirisetty.pdf';

const MatrixOverlay = ({ onExit }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cols = Math.floor(canvas.width / 16);
    const drops = Array(cols).fill(1);
    const chars = 'アイウエオカキクケコ0123456789ABCDEF<>{}[]|/\\'.split('');
    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff41';
      ctx.font = '15px monospace';
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 16, y * 16);
        if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const id = setInterval(draw, 33);
    const handleKey = () => onExit();
    window.addEventListener('keydown', handleKey);
    return () => {
      clearInterval(id);
      window.removeEventListener('keydown', handleKey);
    };
  }, [onExit]);

  return (
    <div className="matrix-overlay" onClick={onExit}>
      <canvas ref={canvasRef} />
      <div className="matrix-exit-hint">Press any key or click to exit</div>
    </div>
  );
};

const Terminal = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('terminal-theme') || 'dark');
  const [commandHistory, setCommandHistory] = useState([
    { type: 'output', content: '╔═══════════════════════════════════════════════════════════════════════════════╗' },
    { type: 'output', content: '║                                                                               ║' },
    { type: 'output', content: '║                          ██████╗ ███████╗██╗   ██╗                            ║' },
    { type: 'output', content: '║                          ██╔══██╗██╔════╝██║   ██║                            ║' },
    { type: 'output', content: '║                          ██║  ██║█████╗  ██║   ██║                            ║' },
    { type: 'output', content: '║                          ██║  ██║██╔══╝  ╚██╗ ██╔╝                            ║' },
    { type: 'output', content: '║                          ██████╔╝███████╗ ╚████╔╝                             ║' },
    { type: 'output', content: '║                          ╚═════╝ ╚══════╝  ╚═══╝                              ║' },
    { type: 'output', content: '║                    Welcome to Preetham\'s Terminal                            ║', hasName: true },
    { type: 'output', content: '║              AI/ML & Software Engineer | Backend & Cloud Infrastructure        ║' },
    { type: 'output', content: '║                                                                               ║' },
    { type: 'output', content: '╚═══════════════════════════════════════════════════════════════════════════════╝' },
    { type: 'output', content: '' },
    { type: 'output', content: 'Type "help" to see available commands' },
    { type: 'output', content: '' }
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandIndex, setCommandIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedKeys, setCopiedKeys] = useState({});
  const [matrixActive, setMatrixActive] = useState(false);
  const [showIdleHint, setShowIdleHint] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const idleTimerRef = useRef(null);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('terminal-theme', nextTheme);
  };

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKeys(prev => ({ ...prev, [key]: true }));
      setTimeout(() => setCopiedKeys(prev => ({ ...prev, [key]: false })), 2000);
    });
  };

  const resetIdleTimer = () => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    setShowIdleHint(false);
    idleTimerRef.current = setTimeout(() => setShowIdleHint(true), 5000);
  };

  const generateAsciiProgressBar = (progress) => {
    const barLength = 50;
    const filled = Math.floor((progress / 100) * barLength);
    const empty = barLength - filled;
    return `[${'█'.repeat(filled)}${'░'.repeat(empty)}]`;
  };

  const shortUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  const reachOut = [
    { type: 'output', content: '  ─────────────────────────────────────────────' },
    { type: 'output', content: '  Want to know more? Reach out →', isLink: true, link: 'mailto:preethambhavirisetty66@gmail.com' },
    { type: 'output', content: '  preethambhavirisetty66@gmail.com', isLink: true, link: 'mailto:preethambhavirisetty66@gmail.com' },
    { type: 'output', content: '' },
  ];

  const commands = {
    help: () => [
      { type: 'output', content: 'Available commands:' },
      { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
      { type: 'output', content: '' },
      { type: 'output', content: '  experience   - Work & education overview' },
      { type: 'output', content: '  projects     - Portfolio project list' },
      { type: 'output', content: '  skills       - Technical skills' },
      { type: 'output', content: '  about        - About me' },
      { type: 'output', content: '  contact      - Get in touch' },
      { type: 'output', content: '  whoami       - User info' },
      { type: 'output', content: '  resume       - Download resume' },
      { type: 'output', content: '  ls / clear   - List sections / clear terminal' },
      { type: 'output', content: '' },
      { type: 'output', content: 'Drill-down — type the name to get details:' },
      { type: 'output', content: '  aetna  |  cloud5  |  cred          (experience)' },
      { type: 'output', content: '  project 1  ...  project 5          (projects)' },
      { type: 'output', content: '' },
      { type: 'output', content: 'Easter eggs:  matrix · sudo · coffee · neofetch · fortune · ping' },
      { type: 'output', content: '' },
      { type: 'output', content: `✓ Installed 15 packages`, isPackageCount: true },
      { type: 'output', content: '' },
    ],
    ls: () => [
      { type: 'output', content: 'Available sections:' },
      { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
      { type: 'output', content: '' },
      { type: 'output', content: '  experience/  projects/  skills/  about/  contact/' },
      { type: 'output', content: '' },
      { type: 'output', content: 'Use commands to explore each section' },
      { type: 'output', content: '' },
      { type: 'output', content: `✓ Installed 5 packages`, isPackageCount: true },
      { type: 'output', content: '' },
    ],
    whoami: () => [
      { type: 'output', content: 'User Information' },
      { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
      { type: 'output', content: '' },
      { type: 'output', content: '  Username   preetham' },
      { type: 'output', content: '  Role       Senior Software Engineer' },
      { type: 'output', content: '  Focus      Backend Systems & Cloud Infrastructure' },
      { type: 'output', content: '  Location   Salt Lake City, Utah' },
      { type: 'output', content: '' },
      { type: 'output', content: '  Specialties:  Microservices · Distributed Systems · AWS · Event-Driven · APIs' },
      { type: 'output', content: '' },
      { type: 'output', content: `✓ Installed 5 packages`, isPackageCount: true },
      { type: 'output', content: '' },
    ],

    // ── Experience overview ──────────────────────────────────────────────────
    experience: () => [
      { type: 'output', content: 'Professional Experience' },
      { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
      { type: 'output', content: '' },
      { type: 'output', content: '  Work:' },
      { type: 'output', content: '' },
      { type: 'output', content: '    Aetna (CVS Health)         Sep 2025 – Present' },
      { type: 'output', content: '    Software Engineer – Backend' },
      { type: 'output', content: '' },
      { type: 'output', content: '    Cloud5.ai                  Sep 2024 – Aug 2025' },
      { type: 'output', content: '    Software Engineer – Backend / Cloud & AI' },
      { type: 'output', content: '' },
      { type: 'output', content: '    CRED (India)               Sep 2020 – Jul 2022' },
      { type: 'output', content: '    Software Engineer – Application Development' },
      { type: 'output', content: '' },
      { type: 'output', content: '  Education:' },
      { type: 'output', content: '' },
      { type: 'output', content: '    MS Computer Science        Binghamton University, NY      Aug 2022 – Dec 2024' },
      { type: 'output', content: '    BTech Information Tech     VR Siddhartha Eng. College     May 2018 – Jun 2022' },
      { type: 'output', content: '' },
      { type: 'output', content: '  ─────────────────────────────────────────────' },
      { type: 'output', content: '  Curious about a role? Type the company name:' },
      { type: 'output', content: '    aetna  |  cloud5  |  cred' },
      { type: 'output', content: '' },
      { type: 'output', content: `✓ Installed 3 packages`, isPackageCount: true },
      { type: 'output', content: '' },
    ],

    // ── Per-company drill-downs ──────────────────────────────────────────────
    aetna: () => [
      { type: 'output', content: '' },
      { type: 'output', content: '  Aetna (CVS Health)  ·  Software Engineer – Backend' },
      { type: 'output', content: '  Sep 2025 – Present' },
      { type: 'output', content: '  ─────────────────────────────────────────────' },
      { type: 'output', content: '' },
      { type: 'output', content: '  • Built backend services for a conversational AI system handling' },
      { type: 'output', content: '    healthcare inquiries, improving request throughput by ~35%' },
      { type: 'output', content: '' },
      { type: 'output', content: '  • Integrated IBM Watson with custom intent routing logic,' },
      { type: 'output', content: '    reducing misrouting and manual intervention by ~30%' },
      { type: 'output', content: '' },
      { type: 'output', content: '  • Implemented CI/CD pipelines (Jenkins + Octopus Deploy),' },
      { type: 'output', content: '    cutting deployment failures and rollback time by ~40%' },
      { type: 'output', content: '' },
      ...reachOut,
    ],
    cloud5: () => [
      { type: 'output', content: '' },
      { type: 'output', content: '  Cloud5.ai  ·  Software Engineer – Backend / Cloud & AI' },
      { type: 'output', content: '  Sep 2024 – Aug 2025' },
      { type: 'output', content: '  ─────────────────────────────────────────────' },
      { type: 'output', content: '' },
      { type: 'output', content: '  • Designed Python and Node.js data ingestion services from' },
      { type: 'output', content: '    heterogeneous sources, reducing ingestion latency by ~30%' },
      { type: 'output', content: '' },
      { type: 'output', content: '  • Built RAG pipelines with vector databases for contextual AI' },
      { type: 'output', content: '    responses, improving answer relevance for downstream LLM systems' },
      { type: 'output', content: '' },
      { type: 'output', content: '  • Deployed containerized services on AWS with automated CI pipelines,' },
      { type: 'output', content: '    reducing manual deployment effort and improving release consistency' },
      { type: 'output', content: '' },
      ...reachOut,
    ],
    cred: () => [
      { type: 'output', content: '' },
      { type: 'output', content: '  CRED (India)  ·  Software Engineer – Application Development' },
      { type: 'output', content: '  Sep 2020 – Jul 2022' },
      { type: 'output', content: '  ─────────────────────────────────────────────' },
      { type: 'output', content: '' },
      { type: 'output', content: '  • Developed backend REST APIs for user onboarding and transaction' },
      { type: 'output', content: '    processing (Java/Python), serving thousands of concurrent users' },
      { type: 'output', content: '' },
      { type: 'output', content: '  • Implemented business logic for account-level operations with' },
      { type: 'output', content: '    validation and idempotent handlers, reducing production bugs' },
      { type: 'output', content: '' },
      { type: 'output', content: '  • Participated in live production support under tight SLAs,' },
      { type: 'output', content: '    debugging and rolling out fixes rapidly' },
      { type: 'output', content: '' },
      ...reachOut,
    ],

    // ── Projects overview ────────────────────────────────────────────────────
    projects: () => {
      const out = [
        { type: 'output', content: 'Portfolio Projects' },
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' },
      ];
      projects.forEach((p, i) => {
        out.push({ type: 'output', content: `  [${i + 1}]  ${p.name}` });
        out.push({ type: 'output', content: `       ${shortUrl(p.source_code_link)}`, isLink: true, link: p.source_code_link });
        out.push({ type: 'output', content: '' });
      });
      out.push({ type: 'output', content: '  ─────────────────────────────────────────────' });
      out.push({ type: 'output', content: '  For details, type:  project 1  ·  project 2  ·  project 3  ·  project 4  ·  project 5' });
      out.push({ type: 'output', content: '' });
      out.push({ type: 'output', content: `✓ Installed ${projects.length} packages`, isPackageCount: true });
      out.push({ type: 'output', content: '' });
      return out;
    },

    // ── Per-project drill-downs ──────────────────────────────────────────────
    'project 1': () => {
      const p = projects[0];
      return [
        { type: 'output', content: '' },
        { type: 'output', content: `  ${p.name}` },
        { type: 'output', content: '  ─────────────────────────────────────────────' },
        { type: 'output', content: `  URL    ${shortUrl(p.source_code_link)}`, isLink: true, link: p.source_code_link },
        { type: 'output', content: `  Stack  ${p.tags.map(t => t.name).join(' · ')}` },
        { type: 'output', content: '' },
        { type: 'output', content: '  Lightweight cloud-native note-taking platform with a focus on' },
        { type: 'output', content: '  backend performance, secure per-user data isolation, and reliable' },
        { type: 'output', content: '  REST API design deployed on cloud infrastructure.' },
        { type: 'output', content: '' },
        ...reachOut,
      ];
    },
    'project 2': () => {
      const p = projects[1];
      return [
        { type: 'output', content: '' },
        { type: 'output', content: `  ${p.name}` },
        { type: 'output', content: '  ─────────────────────────────────────────────' },
        { type: 'output', content: `  URL    ${shortUrl(p.source_code_link)}`, isLink: true, link: p.source_code_link },
        { type: 'output', content: `  Stack  ${p.tags.map(t => t.name).join(' · ')}` },
        { type: 'output', content: '' },
        { type: 'output', content: '  Multi-profile finance tracker with AI-generated summaries,' },
        { type: 'output', content: '  expense/income tracking, and data pipelines for financial' },
        { type: 'output', content: '  insights — built with secure per-profile data isolation.' },
        { type: 'output', content: '' },
        ...reachOut,
      ];
    },
    'project 3': () => {
      const p = projects[2];
      return [
        { type: 'output', content: '' },
        { type: 'output', content: `  ${p.name}` },
        { type: 'output', content: '  ─────────────────────────────────────────────' },
        { type: 'output', content: `  URL    ${shortUrl(p.source_code_link)}`, isLink: true, link: p.source_code_link },
        { type: 'output', content: `  Stack  ${p.tags.map(t => t.name).join(' · ')}` },
        { type: 'output', content: '' },
        { type: 'output', content: '  Multi-intent routing backend for a healthcare AI system.' },
        { type: 'output', content: '  Integrates IBM Watson with custom business logic, structured' },
        { type: 'output', content: '  logging, and zero-downtime CI/CD deployments.' },
        { type: 'output', content: '' },
        ...reachOut,
      ];
    },
    'project 4': () => {
      const p = projects[3];
      return [
        { type: 'output', content: '' },
        { type: 'output', content: `  ${p.name}` },
        { type: 'output', content: '  ─────────────────────────────────────────────' },
        { type: 'output', content: `  URL    ${shortUrl(p.source_code_link)}`, isLink: true, link: p.source_code_link },
        { type: 'output', content: `  Stack  ${p.tags.map(t => t.name).join(' · ')}` },
        { type: 'output', content: '' },
        { type: 'output', content: '  End-to-end RAG system: ingests heterogeneous data, generates' },
        { type: 'output', content: '  embeddings, indexes into a vector database, and serves scalable' },
        { type: 'output', content: '  AI inference APIs with batching and graceful degradation.' },
        { type: 'output', content: '' },
        ...reachOut,
      ];
    },
    'project 5': () => {
      const p = projects[4];
      return [
        { type: 'output', content: '' },
        { type: 'output', content: `  ${p.name}` },
        { type: 'output', content: '  ─────────────────────────────────────────────' },
        { type: 'output', content: `  URL    ${shortUrl(p.source_code_link)}`, isLink: true, link: p.source_code_link },
        { type: 'output', content: `  Stack  ${p.tags.map(t => t.name).join(' · ')}` },
        { type: 'output', content: '' },
        { type: 'output', content: '  Backend REST APIs for high-throughput transaction processing' },
        { type: 'output', content: '  and user onboarding — JWT auth, idempotent handlers, and' },
        { type: 'output', content: '  production SLA support for thousands of concurrent users.' },
        { type: 'output', content: '' },
        ...reachOut,
      ];
    },

    contact: () => {
      return [
        { type: 'output', content: 'Contact Information' },
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' },
        {
          type: 'output', isCopyable: true, copyKey: 'email',
          copyText: 'preethambhavirisetty66@gmail.com',
          label: 'Email:    ',
          displayText: 'preethambhavirisetty66@gmail.com',
          link: 'mailto:preethambhavirisetty66@gmail.com'
        },
        {
          type: 'output', isCopyable: true, copyKey: 'phone',
          copyText: '+1 (716) 808-9656',
          label: 'Phone:    ',
          displayText: '+1 (716) 808-9656',
          link: 'tel:+17168089656'
        },
        { type: 'output', content: '' },
        { type: 'output', content: 'Social:' },
        {
          type: 'output', isCopyable: true, copyKey: 'linkedin',
          copyText: 'https://www.linkedin.com/in/preetham2001/',
          label: '  LinkedIn: ',
          displayText: 'linkedin.com/in/preetham2001',
          link: 'https://www.linkedin.com/in/preetham2001/'
        },
        {
          type: 'output', isCopyable: true, copyKey: 'github',
          copyText: 'https://github.com/Preethambhavirisetty',
          label: '  GitHub:   ',
          displayText: 'github.com/Preethambhavirisetty',
          link: 'https://github.com/Preethambhavirisetty'
        },
        { type: 'output', content: '' },
        { type: 'output', content: `✓ Installed 6 packages`, isPackageCount: true },
        { type: 'output', content: '' }
      ];
    },
    about: () => {
      const aboutSections = 2;
      return [
        { type: 'output', content: 'About' },
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Software Engineer with 4+ years of experience building production-grade backend' },
        { type: 'output', content: 'systems and integrating AI-driven workflows into customer-facing products. Strong' },
        { type: 'output', content: 'ownership of end-to-end backend architecture, with a focus on scalable system' },
        { type: 'output', content: 'design, clean APIs, operational excellence, and reliable cloud deployments.' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Education:' },
        { type: 'output', content: '  • Master of Science in Computer Science - Binghamton University, NY (Aug 2022 - Dec 2024)' },
        { type: 'output', content: '  • Bachelor of Technology in Information Technology - VR Siddhartha Engineering College, India (May 2018 - Jun 2022)' },
        { type: 'output', content: '' },
        { type: 'output', content: `✓ Installed ${aboutSections} packages`, isPackageCount: true },
        { type: 'output', content: '' }
      ];
    },
    skills: () => [
      { type: 'output', content: 'Technical Skills' },
      { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
      { type: 'output', content: '' },
      { type: 'output', content: '  Languages      Python · Node.js · TypeScript · Java' },
      { type: 'output', content: '' },
      { type: 'output', content: '  AI & GenAI     RAG · LangChain · LlamaIndex · IBM Watson · LLaMA · GPT' },
      { type: 'output', content: '                 Hugging Face · Prompt Engineering · AI Summarization' },
      { type: 'output', content: '' },
      { type: 'output', content: '  Databases       PostgreSQL · MongoDB · Vector Databases · Apache Kafka' },
      { type: 'output', content: '' },
      { type: 'output', content: '  Cloud           AWS (EC2, S3, Lambda) · Docker · Kubernetes · Airflow' },
      { type: 'output', content: '                  CI/CD · Jenkins · Octopus Deploy' },
      { type: 'output', content: '' },
      { type: 'output', content: '  Backend         REST APIs · Microservices · JWT Auth · Multi-tenant Design' },
      { type: 'output', content: '                  Request Routing · API Gateway Patterns' },
      { type: 'output', content: '' },
      { type: 'output', content: '  Observability   CloudWatch · Structured Logging · Metrics · Monitoring' },
      { type: 'output', content: '' },
      { type: 'output', content: '  Core            System Design · Scalability · Reliability' },
      { type: 'output', content: '                  End-to-End Backend Ownership · Production Support' },
      { type: 'output', content: '' },
      { type: 'output', content: `✓ Installed 7 packages`, isPackageCount: true },
      { type: 'output', content: '' },
    ],
    clear: () => {
      return [{ type: 'clear', content: '' }];
    },
    resume: () => {
      const link = document.createElement('a');
      link.href = PreethamBhavirisettyResume;
      link.download = 'Preetham_Bhavirisetty_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return [
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Opening resume download...' },
        { type: 'output', content: 'If download does not start, please use: contact command for email' },
        { type: 'output', content: '' }
      ];
    },
    sudo: () => [
      { type: 'output', content: '' },
      { type: 'output', content: '[sudo] password for preetham: ************' },
      { type: 'output', content: 'sudo: permission denied' },
      { type: 'output', content: 'preetham is not in the sudoers file. This incident will be reported.' },
      { type: 'output', content: '...just kidding. But root access would not help you here anyway 😄' },
      { type: 'output', content: '' }
    ],
    coffee: () => [
      { type: 'output', content: '' },
      { type: 'output', content: '      ( (' },
      { type: 'output', content: '       ) )' },
      { type: 'output', content: '    .______.' },
      { type: 'output', content: '    |      |]' },
      { type: 'output', content: '    \\      /' },
      { type: 'output', content: "     `----'" },
      { type: 'output', content: '' },
      { type: 'output', content: "  Brewing your coffee... ☕" },
      { type: 'output', content: "  Error 418: I'm a teapot." },
      { type: 'output', content: '  (RFC 2324 — Hyper Text Coffee Pot Control Protocol)' },
      { type: 'output', content: '' }
    ],
    fortune: () => {
      const quotes = [
        '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
        '"First, solve the problem. Then, write the code." — John Johnson',
        '"It works on my machine." — Every developer, ever',
        '"The best error message is the one that never shows up." — Thomas Fuchs',
        '"Code is like humor. When you have to explain it, it\'s bad." — Cory House',
        '"Make it work, make it right, make it fast." — Kent Beck',
        '"Simplicity is the soul of efficiency." — Austin Freeman',
        '"Programs must be written for people to read, and only incidentally for machines to execute." — Hal Abelson',
      ];
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      return [
        { type: 'output', content: '' },
        { type: 'output', content: '┌─ fortune ──────────────────────────────────────────────────────────────────┐' },
        { type: 'output', content: '│' },
        { type: 'output', content: `│  ${quote}` },
        { type: 'output', content: '│' },
        { type: 'output', content: '└────────────────────────────────────────────────────────────────────────────┘' },
        { type: 'output', content: '' }
      ];
    },
    ping: () => [
      { type: 'output', content: '' },
      { type: 'output', content: 'PING recruiter.hiring.io (93.184.216.34): 56 data bytes' },
      { type: 'output', content: '64 bytes from 93.184.216.34: icmp_seq=0 ttl=64 time=0.42 ms' },
      { type: 'output', content: '64 bytes from 93.184.216.34: icmp_seq=1 ttl=64 time=0.31 ms' },
      { type: 'output', content: '64 bytes from 93.184.216.34: icmp_seq=2 ttl=64 time=0.28 ms' },
      { type: 'output', content: '' },
      { type: 'output', content: '--- recruiter.hiring.io ping statistics ---' },
      { type: 'output', content: '3 packets transmitted, 3 received, 0% packet loss' },
      { type: 'output', content: 'round-trip min/avg/max = 0.28/0.34/0.42 ms' },
      { type: 'output', content: '' },
      { type: 'output', content: 'Connection established. Ready to talk? → try: contact', isLink: true, link: '#contact' },
      { type: 'output', content: '' }
    ],
    neofetch: () => [
      { type: 'output', content: '' },
      { type: 'output', content: '  preetham@portfolio' },
      { type: 'output', content: '  ──────────────────' },
      { type: 'output', content: '  OS:       PortfolioOS 4.0.0 LTS (React 18)' },
      { type: 'output', content: '  Kernel:   Vite 4.4.5' },
      { type: 'output', content: '  Shell:    zsh + JetBrains Mono' },
      { type: 'output', content: '  DE:       Framer Motion' },
      { type: 'output', content: '  WM:       Tailwind CSS v3' },
      { type: 'output', content: '  CPU:      Neural Engine @ 4+ yrs experience' },
      { type: 'output', content: '  GPU:      RAG Pipeline Accelerator' },
      { type: 'output', content: '  Memory:   Unlimited clean, maintainable code' },
      { type: 'output', content: '  Uptime:   Since 2020' },
      { type: 'output', content: '' },
      { type: 'output', content: '  ████ Backend   ████ Cloud   ████ AI/ML   ████ APIs' },
      { type: 'output', content: '' }
    ],
    matrix: () => {
      setMatrixActive(true);
      return [
        { type: 'output', content: '' },
        { type: 'output', content: 'Entering the Matrix... (press any key or click to exit)' },
        { type: 'output', content: '' }
      ];
    }
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (!trimmedCmd) {
      return [{ type: 'output', content: '' }];
    }

    if (commands[trimmedCmd]) {
      return commands[trimmedCmd]();
    } else {
      return [
        { type: 'output', content: `Command not found: ${cmd}` },
        { type: 'output', content: 'Type "help" to see available commands' },
        { type: 'output', content: '' }
      ];
    }
  };

  const simulateProgress = (duration = 2500) => {
    return new Promise((resolve) => {
      const startTime = Date.now();
      const packages = [
        { name: 'react@18.2.0', size: '145.2 kB' },
        { name: 'framer-motion@10.16.4', size: '89.5 kB' },
        { name: 'three@0.157.0', size: '1.2 MB' },
        { name: '@react-three/fiber@8.14.5', size: '234.8 kB' },
        { name: 'express@4.18.2', size: '67.3 kB' },
        { name: 'mongodb@6.0.0', size: '2.1 MB' },
        { name: 'aws-sdk@2.1500.0', size: '45.8 MB' },
        { name: 'kafka-node@5.0.0', size: '156.4 kB' },
        { name: 'docker@24.0.0', size: '12.3 MB' },
        { name: 'kubernetes@1.28.0', size: '8.7 MB' }
      ];

      let progress = 0;
      let currentPackageIndex = 0;

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        progress = Math.min(100, Math.floor((elapsed / duration) * 100));

        const packageProgress = (progress / 100) * packages.length;
        currentPackageIndex = Math.min(Math.floor(packageProgress), packages.length - 1);
        const currentPkg = packages[currentPackageIndex];

        setCommandHistory(prev => {
          const withoutProgress = prev.filter(item => !item.isProgress);
          return [
            ...withoutProgress,
            {
              type: 'output',
              isProgress: true,
              progress: progress,
              currentPackage: currentPkg.name,
              packageSize: currentPkg.size,
              packageIndex: currentPackageIndex,
              totalPackages: packages.length
            }
          ];
        });

        setTimeout(() => {
          terminalRef.current?.scrollTo({
            top: terminalRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }, 50);

        if (progress >= 100) {
          clearInterval(interval);
          resolve();
        }
      }, 30);
    });
  };

  const handleSubmit = async (e, overrideCmd) => {
    e.preventDefault();
    const cmd = (overrideCmd ?? currentCommand).trim();
    if (!cmd || isLoading) return;

    setCurrentCommand('');
    setCommandIndex(-1);
    setIsLoading(true);
    setShowIdleHint(false);

    const commandEntry = { type: 'command', content: cmd };
    setCommandHistory(prev => [...prev, commandEntry]);

    setTimeout(() => {
      terminalRef.current?.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }, 50);

    await simulateProgress(1000);

    const commandResults = executeCommand(cmd);

    if (commandResults.length > 0 && commandResults[0].type === 'clear') {
      setCommandHistory([
        { type: 'output', content: '╔═══════════════════════════════════════════════════════════════════════════════╗' },
        { type: 'output', content: '║                                                                               ║' },
        { type: 'output', content: '║    ██████╗ ███████╗██╗   ██╗                                                  ║' },
        { type: 'output', content: '║    ██╔══██╗██╔════╝██║   ██║                                                  ║' },
        { type: 'output', content: '║    ██║  ██║█████╗  ██║   ██║                                                  ║' },
        { type: 'output', content: '║    ██║  ██║██╔══╝  ╚██╗ ██╔╝                                                  ║' },
        { type: 'output', content: '║    ██████╔╝███████╗ ╚████╔╝                                                   ║' },
        { type: 'output', content: '║    ╚═════╝ ╚══════╝  ╚═══╝                                                    ║' },
        { type: 'output', content: '║                                                                               ║' },
        { type: 'output', content: '║                    Welcome to Preetham\'s Terminal                            ║', hasName: true },
        { type: 'output', content: '║              Senior Software Engineer | Backend & Cloud Infrastructure        ║' },
        { type: 'output', content: '║                                                                               ║' },
        { type: 'output', content: '╚═══════════════════════════════════════════════════════════════════════════════╝' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Type "help" to see available commands' },
        { type: 'output', content: '' }
      ]);
    } else {
      setCommandHistory(prev => {
        const withoutProgress = prev.filter(item => !item.isProgress);
        return [...withoutProgress, ...commandResults];
      });
    }

    setIsLoading(false);

    setTimeout(() => {
      terminalRef.current?.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: 'smooth'
      });
      inputRef.current?.focus();
    }, 150);
  };

  const handleQuickCommand = (cmd) => {
    if (isLoading) return;
    setShowIdleHint(false);
    handleSubmit({ preventDefault: () => {} }, cmd);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const cmds = commandHistory.filter(h => h.type === 'command').map(h => h.content);
      if (cmds.length > 0) {
        const newIndex = commandIndex === -1 ? cmds.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(newIndex);
        setCurrentCommand(cmds[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const cmds = commandHistory.filter(h => h.type === 'command').map(h => h.content);
      if (cmds.length > 0) {
        const newIndex = commandIndex === -1 ? -1 : Math.min(cmds.length - 1, commandIndex + 1);
        setCommandIndex(newIndex);
        setCurrentCommand(newIndex === -1 ? '' : cmds[newIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const trimmed = currentCommand.trim().toLowerCase();
      const matches = Object.keys(commands).filter(cmd => cmd.startsWith(trimmed));
      if (matches.length === 1) {
        setCurrentCommand(matches[0]);
      }
    }
  };

  // Start idle timer on mount, restart after each command
  useEffect(() => {
    resetIdleTimer();
    return () => { if (idleTimerRef.current) clearTimeout(idleTimerRef.current); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isLoading) resetIdleTimer();
  }, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current && document.activeElement !== inputRef.current) {
        inputRef.current.focus();
      }
    };

    focusInput();
    const interval = setInterval(focusInput, 100);

    return () => clearInterval(interval);
  }, [commandHistory]);

  useEffect(() => {
    const handleClick = (e) => {
      if (terminalRef.current && terminalRef.current.contains(e.target)) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="terminal-window-wrapper" data-theme={theme}>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button close" />
            <span className="terminal-button minimize" />
            <span className="terminal-button maximize" />
          </div>
          <div className="terminal-title">preetham@portfolio:~</div>
          <div className="terminal-header-actions">
            <button type="button" className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
        {/* Terminal Container */}
        <div className="terminal-container">
          <div className="terminal-body" ref={terminalRef}>
            <AnimatePresence>
              {commandHistory.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`terminal-line ${item.type === 'command' ? 'command-line' : 'output-line'}`}
                >
                  {item.type === 'command' && (
                    <span className="terminal-prompt">
                      <span className="user">preetham</span>
                      <span className="separator">@</span>
                      <span className="host">portfolio</span>
                      <span className="separator">:</span>
                      <span className="path">~</span>
                      <span className="separator">$</span>
                      {' '}
                    </span>
                  )}
                  {item.isProgress ? (
                    <div className="ascii-progress-container">
                      <div className="progress-info">
                        <span className="progress-text">Installing packages...</span>
                      </div>
                      <div className="ascii-progress-bar">
                        {generateAsciiProgressBar(item.progress)}
                      </div>
                      {item.currentPackage && (
                        <div className="progress-package">
                          <span className="package-name">→ {item.currentPackage}</span>
                          <span className="package-size"> ({item.packageSize})</span>
                          <span className="package-status"> downloading...</span>
                        </div>
                      )}
                      <div className="progress-stats">
                        <span>Package {item.packageIndex + 1} of {item.totalPackages}</span>
                      </div>
                    </div>
                  ) : item.isPackageCount ? (
                    <span className="terminal-content package-count">{item.content}</span>
                  ) : item.hasName ? (
                    <>
                      <span className="terminal-content">                    Welcome to </span>
                      <span className="highlight-name">Preetham</span>
                      <span className="terminal-content">&apos;s Terminal                            </span>
                    </>
                  ) : item.isCopyable ? (
                    <span className="copyable-line">
                      <span className="terminal-content">{item.label}</span>
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="terminal-link"
                      >
                        {item.displayText}
                      </a>
                      <button
                        type="button"
                        className={`copy-btn ${copiedKeys[item.copyKey] ? 'copy-btn--copied' : ''}`}
                        onClick={() => handleCopy(item.copyKey, item.copyText)}
                        title="Copy to clipboard"
                      >
                        {copiedKeys[item.copyKey] ? '✓ Copied!' : '⧉'}
                      </button>
                    </span>
                  ) : item.isLink ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="terminal-link"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="terminal-content">{item.content}</span>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Idle hint */}
            <AnimatePresence>
              {showIdleHint && (
                <motion.div
                  key="idle-hint"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="idle-hint"
                >
                  💡 Try typing <span className="idle-hint-cmd">&apos;help&apos;</span> to see all commands, or click a button below
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="terminal-input-form">
              <span className="terminal-prompt">
                <span className="user">preetham</span>
                <span className="separator">@</span>
                <span className="host">portfolio</span>
                <span className="separator">:</span>
                <span className="path">~</span>
                <span className="separator">$</span>
                {' '}
              </span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => {
                  setCurrentCommand(e.target.value);
                  if (showIdleHint) {
                    setShowIdleHint(false);
                    resetIdleTimer();
                  }
                }}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                autoFocus
                spellCheck="false"
                disabled={isLoading}
              />
            </form>
          </div>

          {/* Quick-access command panel */}
          <div className="quick-command-panel">
            {['whoami', 'about', 'experience', 'projects', 'skills', 'contact', 'resume', 'clear'].map((cmd) => (
              <button
                key={cmd}
                type="button"
                className="quick-command-chip"
                onClick={() => handleQuickCommand(cmd)}
                disabled={isLoading}
              >
                <span className="chip-dollar">$</span> {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Matrix overlay */}
      {matrixActive && (
        <MatrixOverlay onExit={() => setMatrixActive(false)} />
      )}
    </div>
  );
};

export default Terminal;
