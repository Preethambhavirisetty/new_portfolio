import { Cloud } from "@react-three/drei";
import {
  mobile,
  backend,
  creator,
  code,
  python,
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
    title: "Data Analyst",
    icon: dataanalysis,
  },
  {
    title: "Data Engineer",
    icon: dataengineer,
  },
  {
    title: "Cloud Engineer",
    icon: cloud,
  },
  {
    title: "Software Developer",
    icon: python,
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
    name: "tableau",
    icon: tableau,
  },
 
];

const experiences = [
  {
    title: "Bachlor's",
    company_name: "VR Siddartha Engineering College",
    icon: edu,
    iconBg: "#383E56",
    date: "June 2018 - April 2022",
    points: [
      "In my bachelor's, I honed my coding skills in C and Python. And did couple of internships, fueling my passion for web and software development. ",
      "My commitment extended beyond academics, as I volunteered for the National Service Scheme, a government organization. Additionally, as an active member of ACM. ", 
      "I spearheaded events like coding competitions. This amalgamation of tech prowess and community service has enriched my multifaceted journey."
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Avanish Solutions, Hyderabad, India",
    icon: id,
    iconBg: "#E6DEDD",
    date: "January 2021 - April 2021",
    points: [
      "Established a seamless process for regular data export, import, and backup.",
      "Conducted an in-depth analysis of database systems, optimising the efficiency of integration and tested database servers.",
      "Implemented trend analysis and statistical monitoring to identify valuable insights from the data."
,
    ],
  },
  {
    title: "Software Developer",
    company_name: "Saadrusso Technologies Private Limited, Hyderabad, India",
    icon: id,
    iconBg: "#383E56",
    date: "May 2021 - July 2022",
    points: [
      "Implemented various APIs and business logic for Event Core, our flagship digital memory book product.",
      "Integrated the back-end through Go lang, ensuring a cohesive and efficient system.", 
      "Generate a plugin to display all photos and posts made in event and moment. Using that plugin we can display all posts and stories in our WordPress site.",
    ],
  },
  {
    title: "Master's",
    company_name: "Binghamton univeristy",
    icon: edu,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "In my master's, I delved deep into design patterns and web development technologies like React, Angular, and AWS." ,
      "completing various projects and continually drawing knowledge from esteemed professors, underscoring my belief that learning is an endless journey.",
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
      "Designed and developed an interactive portfolio leveraging React, showcasing real-time 3D graphics using D3.js. Implemented responsive UI/UX design techniques utilizing Tailwind CSS, enhancing user engagement across devices. Integrated advanced animations and effects with D3.js to create a unique, dynamic online presence for showcasing my work.",
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
        "Analyzed sales data with Pandas, boosting forecast accuracy by 20% and reducing stockouts by 15%. Developed Tableau dashboards, improving data access by 30% and cutting retrieval time by 25%. Automated data processing with Pandas, cutting prep time by 40% and driving a 10% sales growth. Streamlined data workflows, enhancing efficiency and contributing to a 10% increase in overall productivity",
    tags: [
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
];

export { services, technologies, experiences, projects };