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
  portfo,
  vote,
  
  todo,
  threejs,
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
    title: "Web Developer",
    icon: code,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    title: "Data Analyst intern",
    company_name: "Avanish Solutions",
    icon: id,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Established a seamless process for regular data export, import, and backup.",
      "Conducted an in-depth analysis of database systems, optimising the efficiency of integration and tested database servers.",
      "Implemented trend analysis and statistical monitoring to identify valuable insights from the data."
,
    ],
  },
  {
    title: "Back-End Developer intern",
    company_name: "Saadrusso Technologies Private Limited",
    icon: id,
    iconBg: "#383E56",
    date: "Jan 2022 - May 2022",
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
    date: "Aug 2023 - Present",
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
      "Designed and developed an interactive portfolio leveraging React, showcasing real-time 3D graphics using Three.js. Implemented responsive UI/UX design techniques utilizing Tailwind CSS, enhancing user engagement across devices. Integrated advanced animations and effects with Three.js to create a unique, dynamic online presence for showcasing my work.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:   portfo,
    source_code_link: "https://github.com/Preethambhavirisetty/new_portfolio.git",
  },
  {
    name: "online voting system",
    description:
      "Engineered a secure online voting system using Django, enabling users to cast votes remotely from the comfort of their homes. Implemented a dual-interface design, with user-facing features to view participants and cast votes, and an admin dashboard for comprehensive management and oversight. Leveraged HTML and CSS to craft intuitive and responsive layouts",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "sqlite",
        color: "blue-text-gradient",
      },
    ], 
    image: vote,
    source_code_link: "https://github.com/Preethambhavirisetty/Online_majoritarian.git",
  },
  {
    name: "To-Do",
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