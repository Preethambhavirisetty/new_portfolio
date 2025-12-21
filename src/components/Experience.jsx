import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { theme, cn } from "../theme";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
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
        <h3 className={cn(theme.textColors.primary, theme.fontSizes.title, theme.fontWeights.bold, "mb-2")}>{experience.title}</h3>
        <p
          className={cn(theme.textColors.secondary, theme.fontSizes.bodyLg, theme.fontWeights.semibold, "mb-1")}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className={cn(theme.margins.sectionDescription, "list-disc ml-5 space-y-3")}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-black-100/90 text-sm sm:text-base leading-relaxed pl-1"
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
      <div className={cn(theme.sectionHeader)} variants={textVariant()}>
        <h2 className={cn(theme.sectionHeading, "text-center")}>
          Experience
        </h2>
        {/* Underline */}
        <div className={theme.underline} />
      </div>

      <div 
        className="w-full flex justify-center"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <p className={cn(theme.margins.sectionDescription, theme.descriptionText)}>
          I work with leading organizations to drive data-driven decisions and optimize business processes through data analysis, business intelligence, and strategic planning.
        </p>
      </div>
      
      <motion.div 
        className="flex items-center justify-center w-full mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a className={cn(theme.textColors.white, theme.padding.buttonSm, "flex items-center gap-3 rounded-lg", theme.backgrounds.button, "border border-black-100 hover:bg-black-200 transition-all duration-300", theme.shadows.card, "hover:shadow-xl transform hover:-translate-y-0.5", theme.fontWeights.medium, theme.fontSizes.bodySm)} href={PreethamBhavirisetty} download>
          <span>Download Resume</span>
          <i className="fa fa-download"></i>
        </a>
      </motion.div>

      <div className={cn(theme.margins.sectionLarge, "flex flex-col")}>
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