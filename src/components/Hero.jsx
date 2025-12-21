import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto bg-cream-light flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8`}>
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 left-4 lg:left-10 w-20 h-20 lg:w-28 lg:h-28 border border-black-100/5 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 right-4 lg:right-10 w-16 h-16 lg:w-24 lg:h-24 border border-black-100/5 rotate-12 hidden lg:block"></div>
      
      <div className={`w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 py-12 sm:py-16 lg:py-20`}>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10 w-full lg:w-auto"
        >
          <motion.div 
            className="inline-block mb-4 lg:mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-black-100/70 text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase font-light letter-spacing-wider">Data Analyst</span>
            <div className="h-px w-16 bg-black-100/30 mt-2 mx-auto lg:mx-0"></div>
          </motion.div>
          
          <motion.h1 
            className={`${styles.heroHeadText} mb-5 lg:mb-7`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I&apos;m <span className='text-black-100 font-bold'>Tejaswi Raavi</span>
          </motion.h1>
          
          <motion.p 
            className="text-black-100/80 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10 px-2 sm:px-0"
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
              className="px-8 sm:px-10 py-3 sm:py-3.5 bg-black-100 text-white rounded-sm hover:bg-black-200 transition-all duration-300 text-sm sm:text-base font-medium tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="px-8 sm:px-10 py-3 sm:py-3.5 border-2 border-black-100 text-black-100 rounded-sm hover:bg-black-100 hover:text-white transition-all duration-300 text-sm sm:text-base font-medium tracking-wide hover:shadow-lg transform hover:-translate-y-0.5"
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
            <div className="relative bg-white/60 backdrop-blur-sm p-4 sm:p-5 border border-black-100/15 shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="https://i.pinimg.com/736x/42/cb/7d/42cb7da6b7b2f89105ba25c6829f1328.jpg"
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

{/* <div>
  <div className="flex flex-row gap-1">
    <div className="flex flex-col gap-5">
      <h1 className={`${styles.heroHeadText}`}>
        Hi, I'm <span className='text-[#facc15] font-bold'>Preetham</span> 
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-black`}>
        I love designing software, managing projects,
        and always bring my passion to whatever I'm working on.
      </p>
    </div>
    <ImageDiv/>
  </div>

            <p className={`${styles.heroSubText} mt-2 text-black`}>
              always bring my passion to whatever I'm working on.
            </p>

</div> */}

            {/* <p className={`${styles.heroSubText} mt-2 text-black`}>
          I love designing software, managing projects,  
          and always bring my passion to whatever I'm working on. <br className='sm:block hidden' />– let's build the next big thing.
          </p> */}