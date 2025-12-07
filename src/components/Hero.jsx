import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto bg-cream-light flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8`}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-4 lg:left-10 w-24 h-24 lg:w-32 lg:h-32 border border-black-100/10 rotate-45 hidden md:block"></div>
      <div className="absolute bottom-20 right-4 lg:right-10 w-20 h-20 lg:w-24 lg:h-24 border border-black-100/10 rotate-12 hidden md:block"></div>
      <div className="absolute top-1/2 left-0 w-px h-48 lg:h-64 bg-gradient-to-b from-transparent via-black-100/20 to-transparent hidden xl:block"></div>
      
      <div className={`w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 py-12 sm:py-16 lg:py-20`}>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10 w-full lg:w-auto"
        >
          <div className="inline-block mb-3 lg:mb-4">
            <span className="text-black-100/60 text-xs sm:text-sm lg:text-base tracking-widest uppercase font-light">Business Analyst</span>
          </div>
          
          <h1 className={`${styles.heroHeadText} mb-4 lg:mb-6`}>
            Hi, I'm <span className='text-black-100 font-bold'>Tejaswi</span>
          </h1>
          
          <p className="text-black-100 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 lg:mb-8 px-2 sm:px-0">
            Transforming data into actionable insights through analysis, visualization, and strategic planning.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <a 
              href="#work" 
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black-100 text-white rounded-sm hover:bg-black-200 transition-colors text-xs sm:text-sm font-medium tracking-wide"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-black-100 text-black-100 rounded-sm hover:bg-black-100 hover:text-white transition-colors text-xs sm:text-sm font-medium tracking-wide"
            >
              Get In Touch
            </a>
          </div>
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
            <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-full h-full border-2 border-black-100/20 hidden lg:block"></div>
            
            {/* Image container */}
            <div className="relative bg-cream-light/50 backdrop-blur-sm p-3 sm:p-4 border border-black-100/20 shadow-modern">
              <img
                src="https://i.pinimg.com/736x/42/cb/7d/42cb7da6b7b2f89105ba25c6829f1328.jpg"
                alt="Preetham"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute -bottom-1.5 -left-1.5 lg:-bottom-2 lg:-left-2 w-12 h-12 lg:w-16 lg:h-16 border-l-2 border-b-2 border-black-100/20 hidden sm:block"></div>
            <div className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 w-12 h-12 lg:w-16 lg:h-16 border-r-2 border-t-2 border-black-100/20 hidden sm:block"></div>
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