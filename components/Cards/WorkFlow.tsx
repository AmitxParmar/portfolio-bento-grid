"use client";

import React from "react";
import { Book, Globe, Hammer, Puzzle, Settings, Star, Zap } from "lucide-react";
import { motion } from "motion/react";

const WorkFlow = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-[2.5rem] border-premium h-101 card-gradient-orange lg:col-span-2 hover-glow-purple transition-all duration-500 group/workflow flex flex-col relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover/workflow:scale-110 group-hover/workflow:rotate-6 transition-transform duration-1000">
        <Zap size={140} className="text-primary" />
      </div>

      <div className="flex h-20 flex-col items-center justify-center border-b border-white/5 p-4 lg:h-16 2xl:h-24 relative z-10">
        <h4 className="text-[10px] mb-1 flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-hover/workflow:opacity-100 transition-opacity">
          <Star className="fill-primary/20 text-primary" size={12} /> Process
        </h4>
        <h3 className="text-xl font-black text-white tracking-tightest lg:text-base 2xl:text-2xl leading-none">Workflow</h3>
      </div>

      {/* <!-- Workflow steps --> */}
      <div className="grid gap-1.5 px-5 py-5 lg:py-2 2xl:gap-2.5 2xl:py-6 relative z-10">
        {[
          { icon: Globe, label: "Goal & Objectives", delay: 0.4 },
          { icon: Book, label: "Research & Planning", delay: 0.5 },
          { icon: Puzzle, label: "Wireframe & Design", delay: 0.6 },
          { icon: Settings, label: "Development", delay: 0.7 },
          { icon: Hammer, label: "Testing & Support", delay: 0.8 },
        ].map((step, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: step.delay }}
            key={i} 
            className="group/item flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5 hover:bg-white/[0.06] transition-all duration-300 shadow-inner group/step hover:border-primary/30"
          >
            <div className="rounded-lg bg-black/40 p-2 group-hover/item:bg-primary/20 transition-colors border border-white/5 group-hover/item:border-primary/40 relative">
              <step.icon size={14} className="text-primary group-hover/item:scale-110 transition-transform duration-300" />
              {/* Active indicator dot */}
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest text-white/70 group-hover/item:text-white transition-colors">{step.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkFlow;
