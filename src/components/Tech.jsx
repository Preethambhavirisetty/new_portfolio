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
    <div className='bg-cream-light/70 backdrop-blur-lg p-4 rounded-2xl border border-black-100/20 shadow-modern hover:bg-cream-light/90 transition-all'>
      <img src={icon} alt="tech" className="w-full h-full object-contain" />
    </div>
  );
};

export default SectionWrapper(Tech, "");