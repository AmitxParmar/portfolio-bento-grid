"use client";

import {
  ShieldCheck,
  Download,
  TerminalSquare,
  Clock5,
  MapPin,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-1 flex-col rounded-[2rem] border-premium card-gradient-pink p-5 lg:p-4 2xl:p-8 overflow-hidden hover-glow-purple group/card transition-all duration-500"
    >
      {/* Background Sparkle Decoration */}
      <div className="absolute -right-4 -top-4 opacity-5 group-hover/card:scale-110 group-hover/card:rotate-12 transition-transform duration-1000">
        <Sparkles size={160} className="text-primary" />
      </div>

      <div className="flex flex-col sm:flex-row gap-5 mb-5 lg:mb-3 2xl:mb-8 relative z-10">
        <div className="relative group/avatar shrink-0">
          <div className="absolute -inset-1.5 bg-linear-to-tr from-primary/40 to-primary/0 rounded-2xl blur-md opacity-0 group-hover/avatar:opacity-100 transition duration-700" />
          <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 group-hover/avatar:scale-[1.02]">
            <Image
              src={"/profile-pic.jpg"}
              className="mx-auto sm:mx-0 aspect-square size-24 object-cover lg:size-20 2xl:size-32"
              height={128}
              width={128}
              alt={"Avatar"}
              priority
            />
          </div>
          {/* Pulsing Status Dot */}
          <div className="absolute -bottom-1 -right-1 flex items-center justify-center">
            <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-primary/40 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary border-2 border-bg" />
          </div>
        </div>

        <div className="flex flex-col justify-center text-center sm:text-left flex-1 lg:justify-start pt-1">
          <div className="mb-2.5 flex flex-row flex-wrap justify-center sm:justify-start items-center gap-3 lg:mb-1.5">
            <Badge className="w-fit border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-primary shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)] font-black uppercase tracking-widest text-[9px]">
              <ShieldCheck className="mr-1.5 text-primary" size={12} />
              Available To Work
            </Badge>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/amitxparmar@github.pdf"
              download
              className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-tighter text-lightText/60 hover:text-primary transition-colors group/resume"
            >
              Resume
              <Download className="size-3.5 group-hover/resume:-translate-y-0.5 transition-transform text-primary/50" />
            </motion.a>
          </div>
          <h3 className="text-2xl font-black text-purple-300 leading-tight 2xl:text-4xl lg:text-xl tracking-tightest mb-0.5">
            Amit Parmar
          </h3>
          <p className="text-sm text-lightText lg:text-[12px] 2xl:text-base font-medium max-w-[20ch] sm:max-w-none mx-auto sm:mx-0">
            BCA Graduate & <span className="text-white/90 font-black">Full-stack Developer</span> building distributed systems and cloud-native architectures.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 rounded-2xl border border-white/5 bg-black/20 p-2 text-[10px] text-lightText mb-6 lg:mb-3 lg:p-1.5 2xl:mb-8 2xl:p-3 2xl:text-xs font-bold uppercase tracking-widest shadow-inner relative z-10">
        {[
          { icon: TerminalSquare, label: "Full-stack" },
          { icon: Clock5, label: "IST (GMT+5:30)" },
          { icon: MapPin, label: "India" },
        ].map((tag, i) => (
          <div key={i} className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-white/80 transition-all hover:bg-white/8 hover:border-white/10 group/tag">
            <tag.icon className="text-primary size-3.5 group-hover/tag:scale-110 transition-transform" />
            <span>{tag.label}</span>
          </div>
        ))}
      </div>

      {/* Professional Bio */}
      <div className="flex-1 flex flex-col justify-center mb-6 lg:mb-3 2xl:mb-8 relative z-10">
        <p className="text-[12px] lg:text-[11px] 2xl:text-sm text-lightText/80 leading-relaxed font-semibold line-clamp-3">
          Software Engineer specializing in modular monoliths, event-driven architectures, and high-performance APIs. I build resilient backend systems, optimize data layers, and design clean developer interfaces.
        </p>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-3 2xl:gap-4 relative z-10">
        <InteractiveHoverButton className="group h-11 lg:h-10 2xl:h-14 rounded-xl border border-white/5 bg-white/3 hover:bg-primary transition-all duration-300">
          <a
            href="https://github.com/amitxparmar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5"
          >
            <Github className="text-primary group-hover:text-white size-5 transition-colors duration-300" />
            <span className="text-[11px] font-black uppercase tracking-widest group-hover:text-white transition-colors duration-300">GitHub</span>
          </a>
        </InteractiveHoverButton>
        <InteractiveHoverButton className="group h-11 lg:h-10 2xl:h-14 rounded-xl border border-white/5 bg-white/3 hover:bg-primary transition-all duration-300">
          <a
            href="https://linkedin.com/in/amitxparmar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5"
          >
            <Linkedin className="text-primary group-hover:text-white size-5 transition-colors duration-300" />
            <span className="text-[11px] font-black uppercase tracking-widest group-hover:text-white transition-colors duration-300">LinkedIn</span>
          </a>
        </InteractiveHoverButton>
      </div>
    </motion.div>
  );
};

export default AboutMe;
