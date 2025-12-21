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
        className="bg-white/80 backdrop-blur-lg rounded-2xl py-8 px-10 min-h-[300px] flex justify-evenly items-center flex-col border border-black-100/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="w-20 h-20 flex items-center justify-center bg-black-100/5 rounded-xl mb-2">
          <img
            src={icon}
            alt={title}
            className="w-14 h-14 object-contain"
          />
        </div>

        <h3 className="text-black-100 text-lg sm:text-xl font-semibold text-center mt-3">
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
        <h2 className={`${styles.sectionHeadText} mt-2`}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-black-100/90 text-base sm:text-lg lg:text-[18px] max-w-4xl leading-relaxed sm:leading-[32px]"
      >
        Data Analyst with expertise in improving data retrieval efficiency by 30%. Skilled in Excel VBA, Tableau, and Power BI, boosting analysis and engagement by up to 40%. Proficient in SQL for Amazon Redshift and AWS services for data integration and experienced in version control and collaborative coding through GitHub. Enhanced testing efficiency by 35% using Python and machine learning libraries. Experienced in Agile project management, increasing team productivity by 15% and improving data accuracy by 30%. Fluent in English, with strong written and verbal communication skills used in client-facing and cross-functional roles.
      </motion.p>

      <div className="mt-24 flex flex-wrap justify-center gap-8 lg:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
