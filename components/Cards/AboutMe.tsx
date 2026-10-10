"use client";

import {
  ShieldCheck,
  Download,
  TerminalSquare,
  Clock5,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <div className="bezel-outer w-full">
      <div className="bezel-inner !p-4 gap-3">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row gap-3.5 items-center sm:items-start text-center sm:text-left relative z-10">
          <div className="relative group/avatar shrink-0">
            <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl transition-transform duration-300 group-hover/avatar:scale-[1.02] size-16 sm:size-18 bg-linear-to-br from-primary/20 via-zinc-900 to-zinc-950 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-primary">
                AP
              </span>
            </div>
            {/* Live Availability indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center">
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500 border-2 border-[#0c0d12]" />
            </div>
          </div>

          <div className="flex flex-col justify-center flex-1 min-w-0">
            <div className="flex flex-row flex-wrap justify-center sm:justify-start items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[9px] font-mono font-semibold uppercase tracking-wider text-emerald-400">
                <ShieldCheck size={10} className="text-emerald-400" />
                Available To Build
              </span>
              <a
                href="/FDE-AI-FSD-Amit_Parmar.pdf"
                download
                className="inline-flex items-center gap-1 text-[9px] font-mono font-medium uppercase tracking-tight text-zinc-400 hover:text-white transition-colors duration-150"
              >
                <span>CV</span>
                <Download size={10} className="text-primary/70" />
              </a>
            </div>
            
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
              Amit Parmar
            </h2>
            <p className="text-[11px] text-zinc-400 font-normal leading-relaxed mt-0.5 text-pretty">
              Full-stack & AI Systems Engineer crafting event-driven microservices, real-time messaging, and multi-agent RAG architectures.
            </p>
          </div>
        </div>

        {/* Micro Meta Tags */}
        <div className="flex flex-wrap gap-1.5 text-[9px] font-mono text-zinc-400 relative z-10">
          {[
            { icon: TerminalSquare, label: "Full-stack & Systems" },
            { icon: Clock5, label: "IST (UTC+5:30)" },
            { icon: MapPin, label: "India" },
          ].map((tag, i) => (
            <div 
              key={i} 
              className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-zinc-300 transition-colors hover:border-white/10"
            >
              <tag.icon className="text-primary size-2.5" />
              <span>{tag.label}</span>
            </div>
          ))}
        </div>

        {/* Professional Bio */}
        <div className="relative z-10">
          <p className="text-[11px] text-zinc-400 leading-relaxed font-normal">
            Architecting across three core domains: resilient event-driven microservices with transactional outbox sagas (ModularMart), sub-100ms real-time chat with local-first sync (QuickChat), and citation-grounded multi-agent RAG engines with hybrid search (Agentic Workspace).
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 grid grid-cols-2 gap-2 relative z-10 border-t border-white/[0.05]">
          <a
            href="https://github.com/amitxparmar"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-3 py-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-150 active:scale-[0.97]"
          >
            <div className="flex items-center gap-2">
              <Github className="size-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-medium text-zinc-300 group-hover:text-white">GitHub</span>
            </div>
            <div className="size-4 rounded-full bg-white/[0.05] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <ArrowUpRight size={10} />
            </div>
          </a>

          <a
            href="https://linkedin.com/in/amitxparmar"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-3 py-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-150 active:scale-[0.97]"
          >
            <div className="flex items-center gap-2">
              <Linkedin className="size-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-xs font-medium text-zinc-300 group-hover:text-white">LinkedIn</span>
            </div>
            <div className="size-4 rounded-full bg-white/[0.05] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <ArrowUpRight size={10} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
