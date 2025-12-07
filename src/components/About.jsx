import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-modern border border-black-100/20"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-cream-light/70 backdrop-blur-lg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-black-100/20 shadow-modern"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-black-100 text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black-100 text-[17px] max-w-3xl leading-[30px]"
      >
        Data is how I transform business challenges into strategic opportunities. As a Business Analyst, I specialize in analyzing complex datasets, creating insightful visualizations, and translating findings into actionable recommendations. My portfolio showcases my journey through impactful projects, demonstrating my expertise in data analysis, business intelligence, and process optimization. I work collaboratively with stakeholders to understand business needs, identify improvement opportunities, and deliver solutions that drive meaningful results.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
