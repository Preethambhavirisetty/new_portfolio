import React from "react";
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

import FallbackImage from "../assets/fallback.jpg";

// React Icons for technologies - using Simple Icons for brand consistency
import { 
  SiPython,
  SiTableau,
  SiGit,
  SiMysql,
  SiSap,
  SiJira,
  SiConfluence,
  SiSalesforce,
  SiJupyter,
  SiPandas,
} from "react-icons/si";
import { Icon } from "@iconify/react";

// Iconify icon components for technologies not available in react-icons
const ExcelIcon = ({ size = 60, style, color }) => 
  React.createElement(Icon, { 
    icon: "simple-icons:microsoftexcel", 
    width: size, 
    height: size, 
    style: { ...style, color: color || style?.color || "#000000" } 
  });

const PowerBIIcon = ({ size = 60, style, color }) => 
  React.createElement(Icon, { 
    icon: "simple-icons:powerbi", 
    width: size, 
    height: size, 
    style: { ...style, color: color || style?.color || "#000000" } 
  });

const AWSIcon = ({ size = 60, style, color }) => 
  React.createElement(Icon, { 
    icon: "simple-icons:amazonaws", 
    width: size, 
    height: size, 
    style: { ...style, color: color || style?.color || "#000000" } 
  });

const SharePointIcon = ({ size = 60, style, color }) => 
  React.createElement(Icon, { 
    icon: "simple-icons:microsoftsharepoint", 
    width: size, 
    height: size, 
    style: { ...style, color: color || style?.color || "#000000" } 
  });

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
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23FEF9E7%3B%7D.cls-2%7Bfill:%23FFB6C1%3B%7D.cls-3%7Bfill:%235080EE%3B%7D.cls-4%7Bfill:%23FFD700%3B%7D.cls-5%7Bfill:%23FF6B6B%3B%7D.cls-6%7Bfill:%234ECDC4%3B%7D.cls-7%7Bfill:none%3Bstroke:%23000%3Bstroke-width:3%3Bstroke-linecap:round%3Bstroke-linejoin:round%3B%7D%3C/style%3E%3C/defs%3E%3Crect class='cls-1' width='200' height='200'/%3E%3Ccircle class='cls-2' cx='100' cy='80' r='35'/%3E%3Cpath class='cls-7' d='M85 65 Q100 55 115 65 M85 75 Q100 85 115 75'/%3E%3Ccircle class='cls-7' cx='95' cy='70' r='2'/%3E%3Ccircle class='cls-7' cx='105' cy='70' r='2'/%3E%3Cpath class='cls-7' d='M100 75 Q105 80 100 85'/%3E%3Crect class='cls-3' x='70' y='110' width='60' height='70' rx='5'/%3E%3Crect class='cls-1' x='75' y='115' width='50' height='60'/%3E%3Crect class='cls-4' x='80' y='145' width='8' height='25'/%3E%3Crect class='cls-5' x='92' y='155' width='8' height='15'/%3E%3Crect class='cls-6' x='104' y='150' width='8' height='20'/%3E%3Cpath class='cls-7' d='M75 115 L125 115 M75 140 L125 140'/%3E%3Ccircle class='cls-4' cx='95' cy='50' r='4'/%3E%3Ccircle class='cls-5' cx='115' cy='45' r='3'/%3E%3Ccircle class='cls-6' cx='110' cy='60' r='3'/%3E%3C/svg%3E",
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
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "SQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "Excel",
    icon: ExcelIcon,
    color: "#217346",
  },
  {
    name: "Power BI",
    icon: PowerBIIcon,
    color: "#F2C811",
  },
  {
    name: "Tableau",
    icon: SiTableau,
    color: "#E97627",
  },
  {
    name: "AWS",
    icon: AWSIcon,
    color: "#FF9900",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "SAP",
    icon: SiSap,
    color: "#008FD3",
  },
  {
    name: "Jira",
    icon: SiJira,
    color: "#0052CC",
  },
  {
    name: "Confluence",
    icon: SiConfluence,
    color: "#172B4D",
  },
  {
    name: "SharePoint",
    icon: SharePointIcon,
    color: "#0078D4",
  },
  {
    name: "Salesforce",
    icon: SiSalesforce,
    color: "#00A1E0",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "#150458",
  },
  {
    name: "Jupyter",
    icon: SiJupyter,
    color: "#F37626",
  },
];


const experiences = [
  {
    title: "Data Analyst",
    company_name: "Kellogg Company/Kellanova, Naperville, IL",
    icon: id,
    iconBg: "#4A90E2",
    date: "July 2023 – Present",
    points: [
      "Organized and managed data using SAP BW to establish a centralized repository, enhancing data retrieval efficiency by 30%.",
      "Performed data analysis in Excel with VBA macros for automation, and use pivot tables, array formulas, and Power Pivots, boosting analytical capabilities by 25%.",
      "Developed and maintained interactive Tableau reports, leveraging calculated fields, dynamic filters, and data blending to create impactful dashboards and reports, increasing user engagement by 40%.",
      // "Crafted complex SQL queries for Amazon Redshift, utilizing joins, Common Table Expressions (CTEs), and temporary tables to efficiently extract, transform, and process large datasets.",
      // "Managed data integration and transformation using AWS services, including Amazon Redshift for data warehousing and S3 for data storage, streamlining data workflows by 20%."
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Merck & Co (Pharma), Charlotte, NC",
    icon: id,
    iconBg: "#4A90E2",
    date: "August 2022 – June 2023",
    points: [
      // "Automated tasks and developed custom VBA macros in Excel, including VLOOKUP and data links, enhancing efficiency by 30%.",
      "Developed and optimized Power BI reports and dashboards, incorporating DAX formulas to enhance data analysis and reporting efficiency, leading to a 20% increase in decision-making speed.",
      // "Developed SQL queries and managed data integration through ETL processes, optimizing data workflows and integration.",
      // "Utilized AWS services (Redshift, S3, EMR) for data warehousing and processing, improving cloud data solutions.",
      // "Maintained version control via Git, collaborating with a team of three analysts.",
      "Designed automation test scripts in Python, increasing testing efficiency by 35%, and used Python libraries for machine learning.",
      // "Conducted data analysis and testing using SQL Server, R, and Python, delivering actionable insights and ensuring data integrity."
    ],
  },
  {
    title: "Cloud Data Analyst",
    company_name: "Belk Inc, Charlotte, NC",
    icon: id,
    iconBg: "#4A90E2",
    date: "June 2020 – July 2021",
    points: [
      "Led many projects using Agile methodology, enhancing iterative development processes, and achieving a reduction in project delivery time.",
      "Performed detailed analysis on a large retail dataset using Python and visualized trends using Matplotlib and Seaborn.",
      // "Processed and analyzed third-party spending data with Python and R, improving data accuracy and processing efficiency by 30%.",
      // "Extended and implemented active Tableau dashboards, which streamlined data analysis and reporting, leading to increase in data-driven decision-making.",
      // "Created and maintained MySQL databases and Crystal Reports, resulting in improvement in data manipulation and reporting accuracy.",
      // "Facilitated expert support with Excel, R, and Python, enhancing data management and analytics, and contributing to a 15% increase in team productivity."
    ],
  },
  {
    title: "Master of Professional Science in Data Science",
    company_name: "University at Buffalo, NY, USA",
    icon: edu,
    iconBg: "#4A90E2",
    date: "August 2021 – December 2022",
    points: [
      "Specialized in data science methodologies, statistical analysis, and predictive modeling. Completed advanced coursework in machine learning, data mining, big data analytics, and data visualization. Developed expertise in Python, R, SQL, and various data science tools. Worked on capstone projects involving real-world data science problems and solutions."
    ],
  },
  {
    title: "Bachelor of Science in Computer Science",
    company_name: "Koneru Lakshmaiah University, Vijayawada, India",
    icon: edu,
    iconBg: "#4A90E2",
    date: "2016 - 2020",
    points: [
      "Developed strong foundation in computer science fundamentals, data structures, algorithms, and database management. Completed projects focused on data analysis and business intelligence. Actively participated in student organizations and community service, developing leadership and communication skills essential for professional growth."
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
    "Analyzed sales data using Python and Pandas to improve forecast accuracy and reduce inventory stockouts. Created interactive Tableau dashboards for real-time insights and automated data processing workflows, resulting in improved sales performance.",    
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 300'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23FEF9E7%3B%7D.cls-2%7Bfill:%23B8D4F0%3B%7D.cls-3%7Bfill:%2394A3B8%3B%7D.cls-4%7Bfill:%238B7355%3B%7D.cls-5%7Bfill:%2322C55E%3B%7D.cls-6%7Bfill:%23F97316%3B%7D.cls-7%7Bfill:%23EF4444%3B%7D.cls-8%7Bfill:%23FACC15%3B%7D.cls-9%7Bfill:%234ECDC4%3B%7D.cls-10%7Bfill:none%3Bstroke:%23000%3Bstroke-width:2.5%3Bstroke-linecap:round%3Bstroke-linejoin:round%3B%7D%3C/style%3E%3C/defs%3E%3Crect class='cls-1' width='500' height='300'/%3E%3Cg transform='translate(200, 80)'%3E%3Ccircle class='cls-2' cx='50' cy='50' r='45'/%3E%3Cpath class='cls-10' d='M35 35 Q50 25 65 35 M35 50 Q50 60 65 50'/%3E%3Ccircle class='cls-10' cx='45' cy='40' r='2.5'/%3E%3Ccircle class='cls-10' cx='55' cy='40' r='2.5'/%3E%3Cpath class='cls-10' d='M50 50 Q55 60 50 70'/%3E%3Crect class='cls-4' x='20' y='80' width='60' height='90' rx='8'/%3E%3Crect class='cls-1' x='25' y='85' width='50' height='80'/%3E%3Crect class='cls-5' x='32' y='125' width='10' height='35'/%3E%3Crect class='cls-6' x='46' y='115' width='10' height='45'/%3E%3Crect class='cls-7' x='60' y='105' width='10' height='55'/%3E%3Cpath class='cls-10' d='M25 85 L75 85 M25 110 L75 110'/%3E%3Ccircle class='cls-8' cx='45' cy='25' r='5'/%3E%3Ccircle class='cls-7' cx='65' cy='20' r='4'/%3E%3Ccircle class='cls-9' cx='60' cy='35' r='4'/%3E%3C/g%3E%3C/svg%3E",
    source_code_link: "https://public.tableau.com/app/profile/krishna.preetham.bhavirisetty/viz/MarketSales2016-2019/Dashboard1",
  },
  {
    name: "Customer Segmentation Analysis",
    description:
    "Segmented customers using clustering techniques to identify distinct groups based on purchasing behavior. Built visualizations and dashboards that enabled more targeted marketing campaigns and improved conversion rates.",    
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 300'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23FEF9E7%3B%7D.cls-2%7Bfill:%23B8D4F0%3B%7D.cls-3%7Bfill:%2394A3B8%3B%7D.cls-4%7Bfill:%238B7355%3B%7D.cls-5%7Bfill:%2322C55E%3B%7D.cls-6%7Bfill:%23F97316%3B%7D.cls-7%7Bfill:%23EF4444%3B%7D.cls-8%7Bfill:%23FACC15%3B%7D.cls-9%7Bfill:%234ECDC4%3B%7D.cls-10%7Bfill:none%3Bstroke:%23000%3Bstroke-width:2.5%3Bstroke-linecap:round%3Bstroke-linejoin:round%3B%7D%3C/style%3E%3C/defs%3E%3Crect class='cls-1' width='500' height='300'/%3E%3Cg transform='translate(200, 80)'%3E%3Ccircle class='cls-2' cx='50' cy='50' r='45'/%3E%3Cpath class='cls-10' d='M35 35 Q50 25 65 35 M35 50 Q50 60 65 50'/%3E%3Ccircle class='cls-10' cx='45' cy='40' r='2.5'/%3E%3Ccircle class='cls-10' cx='55' cy='40' r='2.5'/%3E%3Cpath class='cls-10' d='M50 50 Q55 60 50 70'/%3E%3Crect class='cls-4' x='20' y='80' width='60' height='90' rx='8'/%3E%3Crect class='cls-1' x='25' y='85' width='50' height='80'/%3E%3Crect class='cls-5' x='32' y='125' width='10' height='35'/%3E%3Crect class='cls-6' x='46' y='115' width='10' height='45'/%3E%3Crect class='cls-7' x='60' y='105' width='10' height='55'/%3E%3Cpath class='cls-10' d='M25 85 L75 85 M25 110 L75 110'/%3E%3Ccircle class='cls-8' cx='45' cy='25' r='5'/%3E%3Ccircle class='cls-7' cx='65' cy='20' r='4'%3E%3Ccircle class='cls-9' cx='60' cy='35' r='4'/%3E%3C/g%3E%3C/svg%3E",
    source_code_link: "#",
  },
  {
    name: "Business Process Optimization",
    description:
    "Analyzed business processes to identify bottlenecks and inefficiencies. Documented process flows and created recommendations that reduced operational costs and improved overall efficiency.",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 300'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23FEF9E7%3B%7D.cls-2%7Bfill:%23B8D4F0%3B%7D.cls-3%7Bfill:%2394A3B8%3B%7D.cls-4%7Bfill:%238B7355%3B%7D.cls-5%7Bfill:%2322C55E%3B%7D.cls-6%7Bfill:%23F97316%3B%7D.cls-7%7Bfill:%23EF4444%3B%7D.cls-8%7Bfill:%23FACC15%3B%7D.cls-9%7Bfill:%234ECDC4%3B%7D.cls-10%7Bfill:none%3Bstroke:%23000%3Bstroke-width:2.5%3Bstroke-linecap:round%3Bstroke-linejoin:round%3B%7D%3C/style%3E%3C/defs%3E%3Crect class='cls-1' width='500' height='300'/%3E%3Cg transform='translate(200, 80)'%3E%3Ccircle class='cls-2' cx='50' cy='50' r='45'/%3E%3Cpath class='cls-10' d='M35 35 Q50 25 65 35 M35 50 Q50 60 65 50'/%3E%3Ccircle class='cls-10' cx='45' cy='40' r='2.5'/%3E%3Ccircle class='cls-10' cx='55' cy='40' r='2.5'/%3E%3Cpath class='cls-10' d='M50 50 Q55 60 50 70'/%3E%3Crect class='cls-4' x='20' y='80' width='60' height='90' rx='8'/%3E%3Crect class='cls-1' x='25' y='85' width='50' height='80'/%3E%3Crect class='cls-5' x='32' y='125' width='10' height='35'/%3E%3Crect class='cls-6' x='46' y='115' width='10' height='45'/%3E%3Crect class='cls-7' x='60' y='105' width='10' height='55'/%3E%3Cpath class='cls-10' d='M25 85 L75 85 M25 110 L75 110'/%3E%3Ccircle class='cls-8' cx='45' cy='25' r='5'/%3E%3Ccircle class='cls-7' cx='65' cy='20' r='4'/%3E%3Ccircle class='cls-9' cx='60' cy='35' r='4'/%3E%3C/g%3E%3C/svg%3E",
    source_code_link: "#",
  },
  {
    name: "Financial Performance Dashboard",
    description:
    "Built a Tableau dashboard tracking financial metrics and KPIs. Provided real-time insights into revenue, expenses, and profitability trends, enabling faster decision-making and improving forecast accuracy.",   
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 300'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23FEF9E7%3B%7D.cls-2%7Bfill:%23B8D4F0%3B%7D.cls-3%7Bfill:%2394A3B8%3B%7D.cls-4%7Bfill:%238B7355%3B%7D.cls-5%7Bfill:%2322C55E%3B%7D.cls-6%7Bfill:%23F97316%3B%7D.cls-7%7Bfill:%23EF4444%3B%7D.cls-8%7Bfill:%23FACC15%3B%7D.cls-9%7Bfill:%234ECDC4%3B%7D.cls-10%7Bfill:none%3Bstroke:%23000%3Bstroke-width:2.5%3Bstroke-linecap:round%3Bstroke-linejoin:round%3B%7D%3C/style%3E%3C/defs%3E%3Crect class='cls-1' width='500' height='300'/%3E%3Cg transform='translate(200, 80)'%3E%3Ccircle class='cls-2' cx='50' cy='50' r='45'/%3E%3Cpath class='cls-10' d='M35 35 Q50 25 65 35 M35 50 Q50 60 65 50'/%3E%3Ccircle class='cls-10' cx='45' cy='40' r='2.5'/%3E%3Ccircle class='cls-10' cx='55' cy='40' r='2.5'/%3E%3Cpath class='cls-10' d='M50 50 Q55 60 50 70'/%3E%3Crect class='cls-4' x='20' y='80' width='60' height='90' rx='8'/%3E%3Crect class='cls-1' x='25' y='85' width='50' height='80'/%3E%3Crect class='cls-5' x='32' y='125' width='10' height='35'/%3E%3Crect class='cls-6' x='46' y='115' width='10' height='45'/%3E%3Crect class='cls-7' x='60' y='105' width='10' height='55'/%3E%3Cpath class='cls-10' d='M25 85 L75 85 M25 110 L75 110'/%3E%3Ccircle class='cls-8' cx='45' cy='25' r='5'%3E%3Ccircle class='cls-7' cx='65' cy='20' r='4'/%3E%3Ccircle class='cls-9' cx='60' cy='35' r='4'/%3E%3C/g%3E%3C/svg%3E",
    source_code_link: "#",
  },
];

export { services, technologies, experiences, projects };
