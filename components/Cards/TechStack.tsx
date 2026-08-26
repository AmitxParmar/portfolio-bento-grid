"use client";
import { LucideLayers } from "lucide-react";
import { Icons } from "../icons";
import { Marquee } from "../ui/marquee";

const TechStack = () => {
  return (
    /* Tech stack card */
    <div className="flex w-full flex-1 flex-col items-center overflow-hidden rounded-[2rem] border-premium card-gradient-blue px-6 py-5 lg:py-2.5 lg:px-4 2xl:py-8 hover-glow-purple transition-all duration-500 group/tech">
      <div className="flex flex-col items-center justify-center text-center mb-5 lg:mb-1.5 2xl:mb-8">
        <h4 className="text-xs mb-1.5 lg:mb-0.5 2xl:mb-3 flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-hover/tech:opacity-100 transition-opacity">
          <LucideLayers size={14} /> Tech Stack
        </h4>
        <h3 className="text-2xl font-black text-white tracking-tighter sm:text-3xl lg:text-lg 2xl:text-3xl leading-none">Tech Arsenal</h3>
      </div>

      <div className="m-auto w-full space-y-4 lg:space-y-1.5 2xl:space-y-6">
        <Marquee reverse className="[--duration:25s]">
          <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center text-[11px] text-white lg:px-2.5 lg:py-1.5 hover:bg-white/[0.08] transition-colors shadow-inner group/icon">
            <Icons.typeScript className="mx-auto size-12 lg:size-7 2xl:size-12 group-hover/icon:scale-110 transition-transform mb-1.5" /> 
            <span className="font-bold opacity-60 group-hover/icon:opacity-100 lg:text-[9px]">TypeScript</span>
          </div>

          <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center text-[11px] text-white lg:px-2.5 lg:py-1.5 hover:bg-white/[0.08] transition-colors shadow-inner group/icon">
            <Icons.react className="mx-auto size-12 lg:size-7 2xl:size-12 group-hover/icon:scale-110 transition-transform mb-1.5" /> 
            <span className="font-bold opacity-60 group-hover/icon:opacity-100 lg:text-[9px]">React</span>
          </div>

          <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center text-[11px] text-white lg:px-2.5 lg:py-1.5 hover:bg-white/[0.08] transition-colors shadow-inner group/icon">
            <Icons.nextjs className="mx-auto size-12 lg:size-7 2xl:size-12 group-hover/icon:scale-110 transition-transform mb-1.5" /> 
            <span className="font-bold opacity-60 group-hover/icon:opacity-100 lg:text-[9px]">Next.js</span>
          </div>
          <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center text-[11px] text-white lg:px-2.5 lg:py-1.5 hover:bg-white/[0.08] transition-colors shadow-inner group/icon">
            <Icons.tailwind className="mx-auto size-12 lg:size-7 2xl:size-12 group-hover/icon:scale-110 transition-transform mb-1.5" /> 
            <span className="font-bold opacity-60 group-hover/icon:opacity-100 lg:text-[9px]">Tailwind</span>
          </div>
        </Marquee>
        <Marquee className="[--duration:30s]">
          <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center text-[11px] text-white lg:px-2.5 lg:py-1.5 hover:bg-white/[0.08] transition-colors shadow-inner group/icon">
            <Icons.docker className="mx-auto size-12 lg:size-7 2xl:size-12 group-hover/icon:scale-110 transition-transform mb-1.5" /> 
            <span className="font-bold opacity-60 group-hover/icon:opacity-100 lg:text-[9px]">Docker</span>
          </div>
          <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center text-[11px] text-white lg:px-2.5 lg:py-1.5 hover:bg-white/[0.08] transition-colors shadow-inner group/icon">
            <Icons.mongodb className="mx-auto size-12 lg:size-7 2xl:size-12 group-hover/icon:scale-110 transition-transform mb-1.5" /> 
            <span className="font-bold opacity-60 group-hover/icon:opacity-100 lg:text-[9px]">MongoDB</span>
          </div>
          <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center text-[11px] text-white lg:px-2.5 lg:py-1.5 hover:bg-white/[0.08] transition-colors shadow-inner group/icon">
            <Icons.linux className="mx-auto size-12 lg:size-7 2xl:size-12 fill-white group-hover/icon:scale-110 transition-transform mb-1.5" /> 
            <span className="font-bold opacity-60 group-hover/icon:opacity-100 lg:text-[9px]">Linux</span>
          </div>
          <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center text-[11px] text-white lg:px-2.5 lg:py-1.5 hover:bg-white/[0.08] transition-colors shadow-inner group/icon">
            <Icons.express className="mx-auto size-12 lg:size-7 2xl:size-12 group-hover/icon:scale-110 transition-transform mb-1.5" /> 
            <span className="font-bold opacity-60 group-hover/icon:opacity-100 lg:text-[9px]">Express</span>
          </div>

          <div className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center text-[11px] text-white lg:px-2.5 lg:py-1.5 hover:bg-white/[0.08] transition-colors shadow-inner group/icon">
            <Icons.nodejs className="mx-auto size-12 lg:size-7 2xl:size-12 group-hover/icon:scale-110 transition-transform mb-1.5" /> 
            <span className="font-bold opacity-60 group-hover/icon:opacity-100 lg:text-[9px]">NodeJS</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
