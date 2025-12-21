import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
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
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl sm:w-[380px] w-full border border-black-100/15 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            width="100"
            height="100"
            alt="project_image"
            className="w-full h-full object-contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black-100/80 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-black-100 transition-colors shadow-modern border border-cream-light/20"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-black-100 font-bold text-xl sm:text-2xl mb-3">{name}</h3>
          <p className="text-black-100/80 text-sm sm:text-base leading-relaxed">{description}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="text-xs sm:text-sm px-3 py-1.5 bg-black-100/5 border border-black-100/10 rounded-full text-black-100/70 font-medium"
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={`${styles.sectionHeadText} mt-2`}>Projects</h2>
      </motion.div>

      <motion.div 
        className="w-full flex"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <p className="mt-6 text-black-100/80 text-base sm:text-lg max-w-4xl leading-relaxed">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project demonstrates my
          ability to analyze data, create meaningful visualizations, and provide
          actionable business insights. These projects reflect my expertise in
          business analysis, data-driven decision making, and strategic planning.
        </p>
      </motion.div>

      <div className="mt-24 flex flex-wrap justify-center gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
