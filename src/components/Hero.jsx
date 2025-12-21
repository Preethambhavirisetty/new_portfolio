import { motion } from "framer-motion";

import { styles } from "../styles";
import { theme, cn } from "../theme";

import heroImage from "../assets/hero_img.png";

const Hero = () => {
  return (
    <section className={cn("relative w-full min-h-screen mx-auto", theme.backgrounds.primary, "flex items-center justify-center overflow-hidden", theme.padding.section)}>
      {/* Subtle Decorative Elements */}
      <div className="absolute top-10 mt-40 left-4 lg:left-10 w-20 h-20 lg:w-28 lg:h-28 border border-black-100/5 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-0 right-4 lg:right-10 w-16 h-16 lg:w-24 lg:h-24 border border-black-100/5 rotate-12 hidden lg:block"></div>
      
      <div className={cn("w-full", theme.containerWidths.maxContent, "mx-auto flex flex-col lg:flex-row items-center justify-between", theme.gaps.md, theme.padding.sectionY)}>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10 w-full lg:w-auto mt-16 sm:mt-0"
        >
          <motion.div 
            className="inline-block mb-4 lg:mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={theme.heroStyles.tagline}>Data Analyst</span>
            <div className="h-px w-16 bg-black-100/30 mt-2 mx-auto lg:mx-0"></div>
          </motion.div>
          
          <motion.h1 
            className={cn(theme.heroStyles.heading, "mb-5 sm:mb-6 lg:mb-7")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I&apos;m <span className='text-black-100 font-bold'>Tejaswi Raavi</span>
          </motion.h1>
          
          <motion.p 
            className={cn(theme.heroStyles.subheading, theme.textColors.secondary, "max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-0")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Data Analyst with expertise in improving data retrieval efficiency by 30%. Skilled in Excel VBA, Tableau, and Power BI, boosting analysis and engagement by up to 40%. Proficient in SQL, Python, and AWS services for data integration.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a 
              href="#work" 
              className={theme.buttonStyles.primary}
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className={theme.buttonStyles.secondary}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end relative max-w-md lg:max-w-lg"
        >
          <div className="relative w-full">
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 lg:-top-5 lg:-right-5 w-full h-full border border-black-100/15 hidden lg:block"></div>
            
            {/* Image container */}
            <div className={cn("relative", theme.backgrounds.cardAlt, theme.padding.cardMd, theme.borders.medium, theme.shadows.cardStrong, "hover:shadow-2xl transition-all duration-500")}>
              <img
                src={heroImage}
                alt="Tejaswi Raavi"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute -bottom-2 -left-2 lg:-bottom-3 lg:-left-3 w-12 h-12 lg:w-16 lg:h-16 border-l border-b border-black-100/15 hidden sm:block"></div>
            <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 w-12 h-12 lg:w-16 lg:h-16 border-r border-t border-black-100/15 hidden sm:block"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;