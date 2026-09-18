"use client";

import { motion } from "motion/react";

const AchievementGrid = () => {
  return (
    <>
      {/* Achievements */}
      <div className="hidden col-span-4 row-span-1 min-w-0 lg:grid grid-cols-3 items-stretch gap-3 2xl:gap-4 relative z-10">
        {[
          { label: "Microservices", value: "05", delay: 0 },
          { label: "Architecture Patterns", value: "10", delay: 0.1 },
          { label: "API Endpoints", value: "20", delay: 0.2 },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: item.delay }}
            className="flex-1 rounded-[1.5rem] border-premium card-gradient-green p-5 lg:p-4 2xl:p-6 hover-glow-purple transition-all duration-500 group/metric flex flex-col justify-center"
          >
            <h3 className="mb-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-primary opacity-80 group-hover/metric:opacity-100 transition-opacity">
              {item.label}
            </h3>
            <p className="text-4xl font-black text-white tracking-tightest lg:text-3xl 2xl:text-5xl group-hover/metric:scale-105 transition-transform origin-left">
              {item.value}<span className="text-primary">+</span>
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AchievementGrid;
