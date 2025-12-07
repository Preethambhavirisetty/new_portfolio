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
        background: "rgba(254, 249, 231, 0.8)",
        backdropFilter: "blur(10px)",
        color: "#000000",
        boxShadow: "0 0 50px 0 rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(0, 0, 0, 0.2)",
      }}
      contentArrowStyle={{ borderRight: "20px solid  #E8F4F8" }}
      date={experience.date}
      iconStyle={{ background: "#FEF9E7", border: "2px solid #000000"}}
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
      <div >
        <h3 className='text-black-100 text-[20px] font-black'>{experience.title}</h3>
        <p
          className='text-black-100 text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-black-100 text-[14px] pl-1 tracking-wider'
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
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
        <div className="flex items-center justify-center w-full">
          <a className = "text-white w-36 flex items-center justify-center rounded-lg bg-black-100 backdrop-blur-sm border border-black-100 py-2 hover:bg-black-200 transition ease-linear space-x-3 shadow-modern" href={ PreethamBhavirisetty } download><span>Resume </span><i className="fa fa-download "></i></a>
        </div>
        
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