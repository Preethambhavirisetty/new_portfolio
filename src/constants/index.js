// Only import what's actually used in the terminal
import portss from "../assets/portss.png";
import dashboard from "../assets/dashboard.png";
import todo from "../assets/todo.png";
import georoute from "../assets/georoute.png";


const experiences = [
  {
    title: "Bachelor of science in Information Technology",
    company_name: "VR Siddartha Engineering College",
    points: [
      "During my bachelor's, I developed strong coding skills in C and Python and completed internships that deepened my passion for web and software development. Beyond academics, I volunteered with the National Service Scheme, contributing to community initiatives, and actively participated in ACM, where I organized events like coding competitions. This blend of technical expertise and community involvement has shaped my well-rounded journey."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Accenture, Hyderabad, India",
    points: [
      "Scaled transaction monitoring system to handle $3M+ daily transactions. Enhanced fraud detection system using ML models improving detection accuracy by 35%, and architected event sourcing solution with Apache Kafka processing 1K+ TPS. Implemented comprehensive WebSocket alert system reducing incident response time by 45% Contributed to transaction monitoring system using React.js and Java Spring Boot, helping process $1M+ daily transactions. Assisted in implementing fraud detection features using AWS GuardDuty and developed real-time alert notifications reducing response time by 30%."
    ],
  },
  {
    title: "Master of science in Computer Science",
    company_name: "Binghamton univeristy",
    points: [
      "In my master's, I delved deep into design patterns and web development technologies like React, Angular, and AWS. completing various projects and continually drawing knowledge from esteemed professors, underscoring my belief that learning is an endless journey.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Sodexo, Binghamton, NY",
    points: [
      "Collaborated with a team to architect microservices using Java Spring Boot and React.js, enabling 10K+ daily transactions with 99.9% uptime on AWS ECS and Fargate; implemented event-driven architecture with Apache Kafka and AWS EventBridge to reduce data processing latency by 25%, and contributed to designing secure RESTful APIs with Spring WebFlux and API Gateway, achieving sub-200ms response times for 50K+ monthly API calls."
    ],
  },
];


const projects = [
  {
    name: "Portfolio",
    description:
    "Developed an interactive portfolio using React and Tailwind CSS, ensuring responsive design and seamless functionality across devices. Added animations and transitions to enhance visual appeal and engagement, creating a platform to showcase skills and projects. Optimized performance for a smooth and intuitive user experience.",    
    tags: [
      {
        name: "reactjs",
      },
      {
        name: "D3js",
      },
      {
        name: "tailwind",
      },
    ],
    image:   portss,
    source_code_link: "https://github.com/Preethambhavirisetty/new_portfolio.git",
  },
  {
    name: "Market Sales Analysis",
    description:
    "Analyzed sales data with Pandas, enhancing forecast accuracy by 20% and reducing stockouts by 15%. Developed Tableau dashboards, boosting data accessibility by 30% and cutting retrieval time by 25%. Automated data workflows, reducing prep time by 40%, driving a 10% sales increase, and improving overall productivity by 10% through streamlined processes and efficient data handling.",    tags: [
      {
        name: "Pandas",
      },
      {
        name: "Python",
      },
      {
        name: "Tableau",
      },
      {
        name: "Data Cleaning",
      },
    ], 
    image: dashboard,
    source_code_link: "https://public.tableau.com/app/profile/krishna.preetham.bhavirisetty/viz/MarketSales2016-2019/Dashboard1",
  },
  
  {
    name: "Task Management",
    description:
      "Engineered a To-Do list application using Vue.js, emphasizing real-time responsiveness and a user-friendly interface.Integrated the frontend with a robust Django RESTful API, facilitating  task management operations.Implemented features like task addition, monitoring, and removal, enhancing user productivity and providing a streamlined task-tracking experience.",
    tags: [
      {
        name: "Vuejs",
      },
      {
        name: "RESTful Api",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Preethambhavirisetty/Task_management.git",
  },
  {
    name: "Real-Time Route Planner",
    description:
    "Designed and developed a real-time route visualization website with a Python backend and ReactJS frontend, leveraging RESTful APIs for seamless integration between services. Implemented efficient route calculation algorithms and interactive map features, enabling users to visualize and optimize routes dynamically. Focused on delivering a responsive user experience, scalable architecture, and clean, maintainable code for long-term functionality." ,   
    tags: [
      {
        name: "Reactjs",
      },
      {
        name: "Python",
      },
    ],
    image: georoute,
    source_code_link: "https://github.com/Preethambhavirisetty/Geospatial-Visualization-and-Shortest-Path-Optimization",
  },
];

export { experiences, projects };
