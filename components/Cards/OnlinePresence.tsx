"use client";

import { Github, Instagram, Linkedin, Rocket, Send, Share2 } from "lucide-react";
import { motion } from "motion/react";

const OnlinePresence = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="col-span-2 rounded-[2.5rem] border-premium card-gradient-gray hover-glow-purple transition-all duration-500 min-h-[340px] lg:min-h-0 flex-1 group/online flex flex-col relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute -left-4 -bottom-4 opacity-5 group-hover/online:scale-110 group-hover/online:-rotate-12 transition-transform duration-1000">
        <Share2 size={140} className="text-primary" />
      </div>

      <div className="flex h-20 flex-col items-center justify-center border-b border-white/5 p-4 lg:h-12 lg:p-2 2xl:h-24 relative z-10">
        <h4 className="text-[10px] lg:text-[8px] 2xl:text-[10px] mb-1 flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-hover/online:opacity-100 transition-opacity">
          <Rocket className="fill-primary/20 text-primary" size={10} /> Socials
        </h4>
        <h3 className="text-xl font-black text-white tracking-tightest lg:text-sm 2xl:text-2xl leading-none">Presence</h3>
      </div>

      <div className="grid grid-cols-2 gap-2 p-4 lg:grid-cols-4 lg:gap-1 lg:p-2 2xl:grid-rows-4 2xl:grid-cols-1 2xl:p-6 2xl:gap-3 relative z-10 mt-auto mb-auto">
        {[
          { icon: Github, label: "GitHub", href: "https://github.com/AmitxParmar", delay: 0.5 },
          { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/AmitxParmar", delay: 0.6 },
          { icon: Instagram, label: "Instagram", href: "https://instagram.com/AmitxParmar", delay: 0.7 },
          { icon: Send, label: "Telegram", href: "https://t.me/AmitxParmar", delay: 0.8 },
        ].map((social, i) => (
          <motion.a
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: social.delay }}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/2 p-3 lg:p-1.5 hover:bg-white/6 transition-all duration-300 shadow-inner 2xl:justify-start 2xl:px-5 2xl:py-3.5 hover:border-primary/30"
          >
            <div className="rounded-lg bg-black/40 p-2 lg:p-1.5 group-hover/link:bg-primary/20 transition-colors border border-white/5 group-hover/link:border-primary/40 shadow-2xl relative">
              <social.icon className="size-4 lg:size-3.5 2xl:size-5 text-primary group-hover/link:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-[11px] lg:text-[8px] font-black uppercase tracking-widest text-white/70 group-hover/link:text-white transition-colors lg:hidden 2xl:inline">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default OnlinePresence;
