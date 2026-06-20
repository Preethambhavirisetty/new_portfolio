import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constants";

const screenshots = projects.map((p) => ({ name: p.name, image: p.image }));

const FunShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % screenshots.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-container text-center !pt-10 !pb-24">
      <p className="text-[11px] text-muted mb-8">Some works I do :)</p>

      <div className="flex items-center justify-center gap-5 sm:gap-10">
        <div className="hidden sm:grid h-16 w-32 place-items-center rounded-sm bg-white text-xs font-semibold text-ink rotate-[-2deg] shadow-[0_18px_45px_rgba(24,22,18,0.06)]">
          NoteLite
        </div>

        <div className="w-64 rounded-[2rem] bg-[#f2771c] p-3 shadow-[0_28px_55px_rgba(213,91,16,0.28)]">
          <div className="relative h-[25rem] overflow-hidden rounded-[1.35rem] bg-cream">
            <AnimatePresence mode="wait">
              <motion.img
                key={screenshots[index].name}
                src={screenshots[index].image}
                alt={screenshots[index].name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 h-[68%] w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink p-4 text-left text-cream">
              <p className="font-display text-xl leading-none">{screenshots[index].name.split(" ")[0]}</p>
              <p className="mt-2 text-[10px] leading-4 text-cream/60">
                Interface experiments, production systems, and a little polish where it matters.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {screenshots.map((s, i) => (
              <span
                key={s.name}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-cream" : "bg-cream/35"}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden sm:grid h-16 w-32 place-items-center rounded-sm bg-[#66221d] text-xs font-semibold text-cream rotate-[2deg] shadow-[0_18px_45px_rgba(24,22,18,0.1)]">
          Design Corner
        </div>
      </div>
    </div>
  );
};

export default FunShowcase;
