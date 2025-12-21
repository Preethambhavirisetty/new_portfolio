import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { PreethamBhavirisetty } from "../assets";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        color: "#000000",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
      }}
      contentArrowStyle={{ borderRight: "15px solid rgba(255, 255, 255, 0.95)" }}
      date={experience.date}
      iconStyle={{ background: "#FFFFFF", border: "2px solid #000000", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"}}
      icon={
        <div className='flex justify-center items-center w-full h-full '>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
          
        </div>
      }
    >
      <div>
        <h3 className='text-black-100 text-xl sm:text-2xl font-bold mb-2'>{experience.title}</h3>
        <p
          className='text-black-100/80 text-base sm:text-lg font-semibold mb-1'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-6 list-disc ml-5 space-y-3'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-black-100/90 text-sm sm:text-base leading-relaxed pl-1'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div className="w-full" variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Professional Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mt-2`}>
          Experience
        </h2>
        <motion.div 
          className="flex items-center justify-center w-full mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a className="text-white px-8 py-3 flex items-center justify-center gap-3 rounded-lg bg-black-100 border border-black-100 hover:bg-black-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium text-sm sm:text-base" href={PreethamBhavirisetty} download>
            <span>Download Resume</span>
            <i className="fa fa-download"></i>
          </a>
        </motion.div>
        
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          lineColor="#000000" // Add this property if the library supports it
          >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");