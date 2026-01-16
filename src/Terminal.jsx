import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences, projects } from './constants';
import PreethamBhavirisettyResume from './assets/PreethamBhavirisetty.pdf';

const Terminal = () => {
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
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const generateAsciiProgressBar = (progress) => {
    const barLength = 50;
    const filled = Math.floor((progress / 100) * barLength);
    const empty = barLength - filled;
    return `[${'█'.repeat(filled)}${'░'.repeat(empty)}]`;
  };

  const commands = {
    help: () => {
      const helpCommands = 9; // Number of commands listed
      return [
        { type: 'output', content: 'Available commands:' },
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' },
        { type: 'output', content: '  experience  - Show professional experience' },
        { type: 'output', content: '  projects    - Display portfolio projects' },
        { type: 'output', content: '  contact     - Get contact information' },
        { type: 'output', content: '  about       - About me' },
        { type: 'output', content: '  skills      - Technical skills' },
        { type: 'output', content: '  clear       - Clear terminal' },
        { type: 'output', content: '  resume      - Download resume' },
        { type: 'output', content: '  ls          - List available sections' },
        { type: 'output', content: '  whoami      - Display user information' },
        { type: 'output', content: '' },
        { type: 'output', content: `✓ Installed check ${helpCommands} packages`, isPackageCount: true },
        { type: 'output', content: '' }
      ];
    },
    ls: () => {
      const sections = 5; // experience, projects, contact, about, skills
      return [
        { type: 'output', content: 'Available sections:' },
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' },
        { type: 'output', content: '  experience/' },
        { type: 'output', content: '  projects/' },
        { type: 'output', content: '  contact/' },
        { type: 'output', content: '  about/' },
        { type: 'output', content: '  skills/' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Use commands to explore each section' },
        { type: 'output', content: '' },
        { type: 'output', content: `✓ Installed ${sections} packages`, isPackageCount: true },
        { type: 'output', content: '' }
      ];
    },
    whoami: () => {
      const whoamiItems = 5; // Username, Role, Focus, Location, Specializing in (5 items)
      return [
        { type: 'output', content: 'User Information' },
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Username: preetham' },
        { type: 'output', content: 'Role:     Senior Software Engineer' },
        { type: 'output', content: 'Focus:    Backend Systems & Cloud Infrastructure' },
        { type: 'output', content: 'Location: Salt Lake City, Utah' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Specializing in:' },
        { type: 'output', content: '  • Microservices Architecture' },
        { type: 'output', content: '  • Distributed Systems' },
        { type: 'output', content: '  • Cloud Infrastructure (AWS)' },
        { type: 'output', content: '  • Event-Driven Architecture' },
        { type: 'output', content: '  • High-Performance APIs' },
        { type: 'output', content: '' },
        { type: 'output', content: `✓ Installed ${whoamiItems} packages`, isPackageCount: true },
        { type: 'output', content: '' }
      ];
    },
    experience: () => {
      const output = [
        { type: 'output', content: 'Professional Experience' },
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' }
      ];
      
      const experienceDates = [
        'Sep 2025 - Present',
        'Sep 2024 - Aug 2025',
        'Sep 2020 - Jul 2022',
        'Aug 2022 - Dec 2024',
        'May 2018 - Jun 2022'
      ];
      
      experiences.forEach((exp, idx) => {
        // Check if this is education (last 2 items)
        const isEducation = idx >= experiences.length - 2;
        
        if (!isEducation) {
          // Professional Experience Format
          output.push({ type: 'output', content: `┌─ ${exp.title}` });
          output.push({ type: 'output', content: `│  ${exp.company_name}` });
          output.push({ type: 'output', content: `│  ${experienceDates[idx] || 'N/A'}` });
          output.push({ type: 'output', content: '│' });
          
          exp.points.forEach((point, pointIdx) => {
            // Split point into achievement and result
            const resultMatch = point.match(/Result:\s*(.+)$/);
            const achievement = resultMatch ? point.substring(0, point.indexOf('Result:')).trim() : point;
            const result = resultMatch ? resultMatch[1].trim() : null;
            
            output.push({ type: 'output', content: `│  • ${achievement}` });
            if (result) {
              output.push({ type: 'output', content: `│    → ${result}` });
            }
            if (pointIdx < exp.points.length - 1) {
              output.push({ type: 'output', content: '│' });
            }
          });
          
          output.push({ type: 'output', content: '└─' });
        } else {
          // Education Format (simpler)
          output.push({ type: 'output', content: `┌─ ${exp.title}` });
          output.push({ type: 'output', content: `│  ${exp.company_name}` });
          output.push({ type: 'output', content: `│  ${experienceDates[idx] || 'N/A'}` });
          if (exp.points && exp.points.length > 0) {
            output.push({ type: 'output', content: '│' });
            exp.points.forEach((point) => {
              output.push({ type: 'output', content: `│  • ${point}` });
            });
          }
          output.push({ type: 'output', content: '└─' });
        }
        
        if (idx < experiences.length - 1) {
          output.push({ type: 'output', content: '' });
        }
      });
      
      output.push({ type: 'output', content: '' });
      output.push({ type: 'output', content: `✓ Installed ${experiences.length} packages`, isPackageCount: true });
      output.push({ type: 'output', content: '' });
      
      return output;
    },
    projects: () => {
      const output = [
        { type: 'output', content: 'Portfolio Projects' },
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' }
      ];
      
      projects.forEach((project, idx) => {
        output.push({ type: 'output', content: `[${idx + 1}] ${project.name}` });
        output.push({ type: 'output', content: `    Description: ${project.description}` });
        output.push({ type: 'output', content: `    Technologies: ${project.tags.map(t => t.name).join(', ')}` });
        output.push({ type: 'output', content: `    Repository: ${project.source_code_link}`, isLink: true, link: project.source_code_link });
        output.push({ type: 'output', content: '' });
      });
      
      output.push({ type: 'output', content: `✓ Installed ${projects.length} packages`, isPackageCount: true });
      output.push({ type: 'output', content: '' });
      
      return output;
    },
    contact: () => {
      const contactItems = 6; // Email, Phone, Social header, LinkedIn, GitHub
      return [
        { type: 'output', content: 'Contact Information' },
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Email:    preethambhavirisetty@gmail.com', isLink: true, link: 'mailto:preethambhavirisetty@gmail.com' },
        { type: 'output', content: 'Phone:    +1 (716) 808-9656', isLink: true, link: 'tel:+17168089656' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Social:' },
        { type: 'output', content: '  LinkedIn: https://www.linkedin.com/in/preetham2001/', isLink: true, link: 'https://www.linkedin.com/in/preetham2001/' },
        { type: 'output', content: '  GitHub:   https://github.com/Preethambhavirisetty', isLink: true, link: 'https://github.com/Preethambhavirisetty' },
        { type: 'output', content: '' },
        { type: 'output', content: `✓ Installed ${contactItems} packages`, isPackageCount: true },
        { type: 'output', content: '' }
      ];
    },
    about: () => {
      const aboutSections = 2; // Main description + Education
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
    skills: () => {
      const skillCategories = 7; // AI/ML, Backend, Data, MLOps, Cloud, Observability, Core Strengths
      return [
        { type: 'output', content: 'Technical Skills' },
        { type: 'output', content: '═══════════════════════════════════════════════════════════════════════════════' },
        { type: 'output', content: '' },
        { type: 'output', content: 'AI / Applied ML & GenAI:' },
        { type: 'output', content: '  IBM Watson Assistant, IBM Watson Orchestrator, GPT, LLaMA, Hugging Face' },
        { type: 'output', content: '  Transformers, LangChain, LlamaIndex, prompt engineering, AI summarization,' },
        { type: 'output', content: '  Retrieval-Augmented Generation (RAG)' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Backend Engineering:' },
        { type: 'output', content: '  Node.js, TypeScript, Python, REST API design, microservices architecture,' },
        { type: 'output', content: '  request routing, multi-tenant backend design, API authentication (JWT)' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Data & Pipelines:' },
        { type: 'output', content: '  Vector databases (embeddings & similarity search), Apache Kafka' },
        { type: 'output', content: '  (event pipelines), batch processing, scheduled jobs, data normalization' },
        { type: 'output', content: '' },
        { type: 'output', content: 'MLOps & Deployment:' },
        { type: 'output', content: '  Docker, CI/CD (Jenkins, Octopus Deploy), environment-based deployments,' },
        { type: 'output', content: '  Airflow (scheduled pipelines)' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Cloud & Infrastructure:' },
        { type: 'output', content: '  AWS (EC2, S3, Lambda), containerized deployments, cloud networking' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Observability & Reliability:' },
        { type: 'output', content: '  Structured logging, metrics, CloudWatch, production monitoring,' },
        { type: 'output', content: '  failure handling, debugging' },
        { type: 'output', content: '' },
        { type: 'output', content: 'Core Engineering Strengths:' },
        { type: 'output', content: '  System design, scalability, reliability, end-to-end backend ownership,' },
        { type: 'output', content: '  production issue resolution' },
        { type: 'output', content: '' },
        { type: 'output', content: `✓ Installed ${skillCategories} packages`, isPackageCount: true },
        { type: 'output', content: '' }
      ];
    },
    clear: () => {
      return [{ type: 'clear', content: '' }];
    },
    resume: () => {
        // Trigger the actual download
        const link = document.createElement('a');
        link.href = PreethamBhavirisettyResume; // Fixed the path to point to the public assets directory
        link.download = 'Preetham_Bhavirisetty_Resume.pdf'; // The filename for download
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
        
        // Determine which package is being "downloaded" based on progress
        const packageProgress = (progress / 100) * packages.length;
        currentPackageIndex = Math.min(Math.floor(packageProgress), packages.length - 1);
        const currentPkg = packages[currentPackageIndex];
        
        // Update progress in command history
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
        
        // Auto-scroll to progress bar during loading
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentCommand.trim() || isLoading) return;

    const cmd = currentCommand.trim();
    setCurrentCommand('');
    setCommandIndex(-1);
    setIsLoading(true);

    // Add command to history
    const commandEntry = { type: 'command', content: cmd };
    setCommandHistory(prev => [...prev, commandEntry]);

    // Scroll to show the command
    setTimeout(() => {
      terminalRef.current?.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }, 50);

    // Show progress bar (2-3 seconds)
    await simulateProgress(1000);

    // Remove progress and add results
    const commandResults = executeCommand(cmd);
    
    // Handle clear command
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
        { type: 'output', content: '║                    Welcome to Preetham&apos;s Terminal                        ║', hasName: true },
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
    
    // Scroll to bottom after command completes
    setTimeout(() => {
      terminalRef.current?.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: 'smooth'
      });
      // Refocus input after scrolling
      inputRef.current?.focus();
    }, 150);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const commands = commandHistory.filter(h => h.type === 'command').map(h => h.content);
      if (commands.length > 0) {
        const newIndex = commandIndex === -1 ? commands.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(newIndex);
        setCurrentCommand(commands[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const commands = commandHistory.filter(h => h.type === 'command').map(h => h.content);
      if (commands.length > 0) {
        const newIndex = commandIndex === -1 ? -1 : Math.min(commands.length - 1, commandIndex + 1);
        setCommandIndex(newIndex);
        setCurrentCommand(newIndex === -1 ? '' : commands[newIndex]);
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

  useEffect(() => {
    // Always keep input focused
    const focusInput = () => {
      if (inputRef.current && document.activeElement !== inputRef.current) {
        inputRef.current.focus();
      }
    };
    
    focusInput();
    const interval = setInterval(focusInput, 100);
    
    return () => clearInterval(interval);
  }, [commandHistory]);

  // Handle clicks anywhere to focus input
  useEffect(() => {
    const handleClick = (e) => {
      // If clicking in terminal body, focus input
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
    <div className="terminal-window-wrapper">
      <div className="terminal-window">
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
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoFocus
            spellCheck="false"
            disabled={isLoading}
          />
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

