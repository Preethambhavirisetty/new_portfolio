import { motion } from "framer-motion";

const stages = ["Discover", "Design", "Build", "Ship"];

const CycleDiagram = () => {
  return (
    <div className="mt-10">
      <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-muted">Cycle of creation</p>
      <div className="flex flex-wrap items-center gap-3">
        {stages.map((stage, i) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="rounded-full bg-sage px-3 py-1.5 text-[11px] font-medium text-ink">
              {stage}
            </span>
            {i < stages.length - 1 && <span className="text-muted/60">/</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CycleDiagram;
