import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { theme, cn } from "../theme";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <div className={cn(theme.sectionHeader)} variants={textVariant()}>
        <h2 className={cn(theme.sectionHeading, "text-center")}>
          Technologies
        </h2>
        {/* Underline */}
        <div className={theme.underline} />
      </div>

      <div 
        className="w-full flex justify-center"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <p className={cn(theme.margins.sectionDescription, theme.descriptionText)}>
          I work with a diverse range of technologies and tools to deliver efficient solutions and drive data-driven insights.
        </p>
      </div>

      <div className={cn(theme.margins.sectionContent, "flex flex-row flex-wrap justify-center", theme.gaps.md)}>
        {technologies.map((technology) => (
          <div className='w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28' key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            <Techball icon={technology.icon} name={technology.name} color={technology.color} />
          </div>
        ))}
      </div>
    </>
  );
};

const Techball = ({icon: IconComponent, name, color}) => {
  return (
    <div className={cn("relative group w-full h-full", theme.backgrounds.card, "p-4 sm:p-5", "rounded-2xl", theme.borders.default, theme.shadows.card, "hover:shadow-xl hover:bg-white/95 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center")}>
      <IconComponent size={60} style={{ color: color || "#000000" }} color={color || "#000000"} />
      {/* Tooltip */}
      <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-black-100 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg'>
        {name}
        {/* Tooltip arrow */}
        <span className='absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black-100'></span>
      </span>
    </div>
  );
};

export default SectionWrapper(Tech, "");