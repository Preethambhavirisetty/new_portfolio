import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import  Animations  from "./canvas/Animations";
import { homeimage } from "../assets";

const Hline = () => {

  return (
        <div className='flex flex-col justify-center items-center mt-20'>
          <div className='w-5 h-5 rounded-full bg-[#facc15]' />
          <div className='w-1 sm:h-80 h-40  bg-gradient-to-b from-yellow-500' />
        </div>
  ) 
}

const AnimationDiv = () => {
  return (
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
    <a href='#about'>
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className='w-3 h-3 rounded-full bg-secondary mb-1'
        />
      </div>
    </a>
  </div>
  )
}

const ImageDiv = () => {
  return (
  //   <div
  //   className={`mt-20 inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} bg-red-400 `}
  // >
      <img
        src={homeimage}
        alt="hi"
        className='w-[300px] h-[250px] object-contain'
      />
  // </div>
  )
}

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <Hline/>
        <div className="flex flex-col -space-y-1">
          <div className="flex flex-row gap-1">
            <div>
              <div className="h-24">

              </div>
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I'm <span className='text-[#facc15] font-bold'>Preetham</span> 
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-black`}>
              I am a graduate of Binghamton University, passionate about  
              </p>
            </div>
            <ImageDiv/>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
          software engineering and full-stack development. I love creating innovative solutions, managing impactful projects, and bringing my full dedication to every challenge. 
          
          </p>
        </div>
      </div>

      <AnimationDiv/>
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