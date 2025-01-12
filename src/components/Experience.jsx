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
        background: "linear-gradient(to bottom right, white, white, #F5F5F5)",
        color: "black",
        boxShadow: "0 0 50px 0 rgba(0, 0, 0, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "20px solid  white" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg}}
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
        <h3 className='text-[#facc15] text-[20px] font-black'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
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
          <a className = "text-black-100 w-36 flex items-center justify-center rounded-lg border border-[#facc15] py-2 hover:bg-[#facc15] transition ease-linear space-x-3" href={ PreethamBhavirisetty } download><span>Resume </span><i className="fa fa-download "></i></a>
        </div>
        
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          lineColor="#facc15" // Add this property if the library supports it
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