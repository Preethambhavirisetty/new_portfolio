import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { theme, cn } from "../theme";
import { github, fallbackImage } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = description.length > 150; // Check if description needs truncation

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 300,
        }}
        className={cn(theme.backgrounds.card, theme.padding.card, "rounded-2xl", theme.containerWidths.card, theme.borders.medium, theme.shadows.card, "hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col", !isExpanded ? 'sm:h-[520px] h-auto' : '')}
      >
        <div className="relative w-full h-[250px] flex-shrink-0">
          <img
            src={fallbackImage}
            width="100"
            height="100"
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl bg-black-100/5"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black-100/80 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-black-100 transition-colors shadow-modern"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col flex-grow">
          <h3 className={cn(theme.textColors.primary, theme.fontWeights.bold, theme.fontSizes.titleMd, "mb-3 flex-shrink-0")}>{name}</h3>
          <div className="flex-grow">
            <p 
              className={cn(theme.textColors.secondary, theme.fontSizes.bodySm, "leading-relaxed transition-all duration-300", !isExpanded && shouldTruncate ? 'line-clamp-3' : '')}
            >
              {description}
            </p>
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(theme.textColors.tertiary, "hover:text-black-100", theme.fontSizes.bodySm, theme.fontWeights.medium, "underline transition-colors")}
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-2 flex-shrink-0">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={cn(theme.fontSizes.tag, "px-1 py-1 bg-black-100/5", theme.borders.default, "rounded-lg", theme.textColors.tertiary, theme.fontWeights.medium)}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className={cn(theme.sectionHeader)} variants={textVariant()}>
        <h2 className={cn(theme.sectionHeading, "text-center")}>
          Projects
        </h2>
        {/* Underline */}
        <div className="h-1 w-24 mt-2 mb-0.5 rounded bg-red-500/80" />
      </div>

      <div 
        className="w-full flex justify-center"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <p className={cn(theme.margins.sectionDescription, theme.descriptionText)}>
          Below are examples of my work involving data analysis and visualization.
          Each project highlights practical skills applied to some real-world problems.
        </p>
      </div>

      <div className={cn(theme.margins.sectionContent, "flex flex-wrap justify-start", theme.gaps.md)}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
