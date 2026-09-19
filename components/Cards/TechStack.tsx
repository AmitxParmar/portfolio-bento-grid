"use client";

import { LucideLayers, Terminal } from "lucide-react";
import { Icons } from "../icons";
import { Marquee } from "../ui/marquee";

const STACK_ROW_1 = [
  { name: "TypeScript", icon: Icons.typeScript },
  { name: "React 19", icon: Icons.react },
  { name: "Next.js", icon: Icons.nextjs },
  { name: "Tailwind v4", icon: Icons.tailwind },
];

const STACK_ROW_2 = [
  { name: "Docker", icon: Icons.docker },
  { name: "Node.js", icon: Icons.nodejs },
  { name: "Express", icon: Icons.express },
  { name: "Linux", icon: Icons.linux, fill: true },
  { name: "MongoDB", icon: Icons.mongodb },
];

const TechStack = () => {
  return (
    <div className="bezel-outer w-full">
      <div className="bezel-inner !p-3.5 gap-2.5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-1.5">
            <LucideLayers className="size-3.5 text-primary" />
            <h3 className="text-xs font-bold text-white tracking-tight">
              Tech Stack
            </h3>
          </div>
          <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider">
            Active Stack
          </span>
        </div>

        {/* Marquee rows */}
        <div className="py-0.5 space-y-1.5 w-full overflow-hidden">
          <Marquee reverse className="[--duration:28s] py-0.5">
            {STACK_ROW_1.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-150 group/pill cursor-default shadow-xs"
                >
                  <Icon className="size-3.5 shrink-0 group-hover/pill:scale-110 transition-transform duration-200" />
                  <span className="text-[11px] font-mono font-medium text-zinc-300 group-hover/pill:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </Marquee>

          <Marquee className="[--duration:32s] py-0.5">
            {STACK_ROW_2.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-150 group/pill cursor-default shadow-xs"
                >
                  <Icon className={`size-3.5 shrink-0 group-hover/pill:scale-110 transition-transform duration-200 ${tech.fill ? "fill-white" : ""}`} />
                  <span className="text-[11px] font-mono font-medium text-zinc-300 group-hover/pill:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </Marquee>
        </div>

        {/* Footer */}
        <div className="pt-1 border-t border-white/[0.05] flex items-center justify-between text-[8px] font-mono text-zinc-500">
          <span>Modern Web & Runtime Ecosystem</span>
          <span className="text-primary font-bold">2026 Ready</span>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
