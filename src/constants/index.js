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
    title: "Data Analysis",
    icon: dataanalysis,
  },
  {
    title: "Business Intelligence",
    icon: dashboard,
  },
  {
    title: "Data Visualization",
    icon: tableau,
  },
  {
    title: "Strategic Planning",
    icon: software,
  },
  
];                

const technologies = [
  {
    name: "Python",
    icon: python1,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "SQL",
    icon: mysql,
  },
  {
    name: "Excel",
    icon: dashboard,
  },
  {
    name: "Power BI",
    icon: dataanalysis,
  },
  {
    name: "R",
    icon: software,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Git",
    icon: git,
  },
];


const experiences = [
  {
    title: "Bachelor of Science in Information Technology",
    company_name: "VR Siddartha Engineering College",
    icon: edu,
    iconBg: "#4A90E2",
    date: "2017 - 2021",
    points: [
      "Developed strong analytical and problem-solving skills through coursework in data structures, database management, and statistics. Completed projects focused on data analysis and business intelligence, which sparked my interest in business analytics. Actively participated in student organizations and community service, developing leadership and communication skills essential for business analysis."
    ],
  },
  {
    title: "Business Analyst Intern",
    company_name: "Accenture, Hyderabad, India",
    icon: id,
    iconBg: "#4A90E2",
    date: "2021 - 2022",
    points: [
      "Analyzed business requirements and translated them into technical specifications for development teams. Created comprehensive documentation including business requirement documents (BRD) and functional requirement documents (FRD). Conducted stakeholder interviews and facilitated requirements gathering sessions. Developed data models and process flows to visualize business operations. Assisted in creating test cases and user acceptance testing documentation."
    ],
  },
  {
    title: "Master of Science in Computer Science",
    company_name: "Binghamton University",
    icon: edu,
    iconBg: "#4A90E2",
    date: "2022 - 2024",
    points: [
      "Specialized in data analytics, business intelligence, and statistical analysis. Completed advanced coursework in machine learning, data mining, and predictive analytics. Developed expertise in data visualization tools and techniques. Worked on capstone projects involving real-world business problems and data-driven solutions. Gained proficiency in SQL, Python, R, and various BI tools."
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Sodexo, Binghamton, NY",
    icon: id,
    iconBg: "#4A90E2",
    date: "2024 - Present",
    points: [
      "Analyze business processes and identify opportunities for improvement through data-driven insights. Develop and maintain dashboards using Tableau and Power BI to track key performance indicators. Collaborate with cross-functional teams to gather requirements and define project scope. Perform data analysis using SQL and Python to support business decision-making. Create detailed reports and presentations for stakeholders, translating complex data into actionable insights."
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
    name: "Market Sales Analysis Dashboard",
    description:
    "Conducted comprehensive sales data analysis using Python and Pandas, improving forecast accuracy by 20% and reducing inventory stockouts by 15%. Developed interactive Tableau dashboards that increased data accessibility by 30% and reduced report generation time by 25%. Automated data processing workflows, cutting data preparation time by 40% and contributing to a 10% increase in sales through better inventory management.",    
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "Tableau",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "blue-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://public.tableau.com/app/profile/krishna.preetham.bhavirisetty/viz/MarketSales2016-2019/Dashboard1",
  },
  {
    name: "Customer Segmentation Analysis",
    description:
    "Performed customer segmentation analysis using clustering techniques to identify distinct customer groups based on purchasing behavior. Created visualizations and reports that helped marketing teams target campaigns more effectively, resulting in a 15% improvement in campaign conversion rates. Developed automated reporting dashboards for ongoing customer analysis.",    
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "blue-text-gradient",
      },
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
    ], 
    image: dataanalysis,
    source_code_link: "#",
  },
  {
    name: "Business Process Optimization",
    description:
    "Analyzed existing business processes and identified bottlenecks through data analysis and stakeholder interviews. Documented current state and future state process flows, leading to recommendations that reduced operational costs by 12%. Created comprehensive business requirement documents and worked with development teams to implement process improvements.",
    tags: [
      {
        name: "Process Analysis",
        color: "blue-text-gradient",
      },
      {
        name: "Documentation",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
    ],
    image: software,
    source_code_link: "#",
  },
  {
    name: "Financial Performance Dashboard",
    description:
    "Developed a comprehensive financial performance dashboard using Tableau that tracks key financial metrics and KPIs. The dashboard provides real-time insights into revenue, expenses, and profitability trends, enabling faster decision-making. Reduced time spent on financial reporting by 35% and improved accuracy of financial forecasts.",   
    tags: [
      {
        name: "Tableau",
        color: "blue-text-gradient",
      },
      {
        name: "Financial Analysis",
        color: "blue-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "blue-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "#",
  },
];

export { services, technologies, experiences, projects };
