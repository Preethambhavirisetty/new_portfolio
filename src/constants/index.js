import { Cloud } from "@react-three/drei";
import {
  mobile,
  backend,
  creator,
  code,
  software,
  react,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mysql,
  python1,
  aws,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  edu,
  id,
  portss,
  dashboard,
  tableau,
  todo,
  threejs,
  dataengineer,
  dataanalysis,
  cloud,
  georoute
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Software Developer",
    icon: software,
  },
  {
    title: "Solution Architect",
    icon: dataanalysis,
  },
  {
    title: "Cloud Engineer",
    icon: cloud,
  },
  {
    title: "Data Engineer",
    icon: dataengineer,
  },
  
];                

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Python1",
    icon: python1,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "tableau",
    icon: tableau,
  },
 
];


const experiences = [
  {
    title: "Bachelor of science in Information Technology",
    company_name: "VR Siddartha Engineering College",
    icon: edu,
    iconBg: "#facc15",
    date: "June 2018 - April 2022",
    points: [
      "During my bachelor's, I developed strong coding skills in C and Python and completed internships that deepened my passion for web and software development. Beyond academics, I volunteered with the National Service Scheme, contributing to community initiatives, and actively participated in ACM, where I organized events like coding competitions. This blend of technical expertise and community involvement has shaped my well-rounded journey."
    ],
  },

  {
    title: "Software Developer",
    company_name: "Accenture, Hyderabad, India",
    icon: id,
    iconBg: "#facc15",
    date: "May 2021 - July 2022",
    points: [
      "Scaled transaction monitoring system to handle $3M+ daily transactions. Enhanced fraud detection system using ML models improving detection accuracy by 35%, and architected event sourcing solution with Apache Kafka processing 1K+ TPS. Implemented comprehensive WebSocket alert system reducing incident response time by 45% Contributed to transaction monitoring system using React.js and Java Spring Boot, helping process $1M+ daily transactions. Assisted in implementing fraud detection features using AWS GuardDuty and developed real-time alert notifications reducing response time by 30%."


    ],
  },
  {
    title: "Master of science in Computer Science",
    company_name: "Binghamton univeristy",
    icon: edu,
    iconBg: "#facc15",
    date: "Aug 2022 - Dec 2024",
    points: [
      "In my master's, I delved deep into design patterns and web development technologies like React, Angular, and AWS. completing various projects and continually drawing knowledge from esteemed professors, underscoring my belief that learning is an endless journey.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Sodexo, Binghamton, NY",
    icon: id,
    iconBg: "#facc15",
    date: "Jan 2023 - Dec 2024",
    points: [
      "Collaborated with a team to architect microservices using Java Spring Boot and React.js, enabling 10K+ daily transactions with 99.9% uptime on AWS ECS and Fargate; implemented event-driven architecture with Apache Kafka and AWS EventBridge to reduce data processing latency by 25%, and contributed to designing secure RESTful APIs with Spring WebFlux and API Gateway, achieving sub-200ms response times for 50K+ monthly API calls."


    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Portfolio",
    description:
    "Developed an interactive portfolio using React and Tailwind CSS, ensuring responsive design and seamless functionality across devices. Added animations and transitions to enhance visual appeal and engagement, creating a platform to showcase skills and projects. Optimized performance for a smooth and intuitive user experience.",    
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "D3js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
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
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Tableau",
        color: "pink-text-gradient",
      },
      {
        name: "Data Cleaning",
        color: "blue-text-gradient",
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
        color: "blue-text-gradient",
      },
      {
        name: "RESTful Api",
        color: "green-text-gradient",
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
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      
    ],
    image: georoute,
    source_code_link: "https://github.com/Preethambhavirisetty/Geospatial-Visualization-and-Shortest-Path-Optimization",
  },
];

export { services, technologies, experiences, projects };
