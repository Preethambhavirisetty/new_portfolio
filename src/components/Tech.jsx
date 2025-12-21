import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <Techball icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const Techball = ({icon}) => {
  return (
    <div className='bg-white/80 backdrop-blur-lg p-5 rounded-2xl border border-black-100/10 shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-300 hover:-translate-y-1'>
      <img src={icon} alt="tech" className="w-full h-full object-contain" />
    </div>
  );
};

export default SectionWrapper(Tech, "");