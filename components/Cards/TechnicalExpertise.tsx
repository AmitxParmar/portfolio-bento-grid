"use client";

import { Cpu, Server, Database, Terminal, Code2 } from "lucide-react";

const CAPABILITIES = [
  {
    title: "Distributed Systems",
    icon: Server,
    accent: "text-emerald-400",
    tags: ["Outbox", "RabbitMQ", "WebSockets", "Circuit Breaker"],
  },
  {
    title: "Data & Storage",
    icon: Database,
    accent: "text-amber-400",
    tags: ["PostgreSQL", "Neon Pool", "Redis Cache", "pgvector"],
  },
  {
    title: "Cloud & Reliability",
    icon: Terminal,
    accent: "text-purple-400",
    tags: ["Docker", "OpenTelemetry", "CI/CD", "Linux"],
  },
  {
    title: "Client Systems",
    icon: Code2,
    accent: "text-indigo-400",
    tags: ["Next.js RSC", "TypeScript", "Tailwind v4", "Motion / UI"],
  },
];

const TechnicalExpertise = () => {
  return (
    <div className="bezel-outer w-full">
      <div className="bezel-inner !p-3.5 gap-2.5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-1.5">
            <Cpu className="size-3 text-primary" />
            <h3 className="text-xs font-bold text-white tracking-tight">
              Technical Capabilities
            </h3>
          </div>
          <span className="text-[8px] font-mono text-zinc-500 uppercase">
            Core Stack
          </span>
        </div>

        {/* 2x2 Compact Domain Matrix */}
        <div className="grid grid-cols-2 gap-1.5 py-0.5">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-1.5 rounded-lg border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className={`size-3 ${cap.accent}`} />
                  <span className="text-[10px] font-semibold text-white truncate leading-tight">
                    {cap.title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-mono px-1 py-0.2 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.04] leading-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-1 border-t border-white/[0.05] flex items-center justify-between text-[8px] font-mono text-zinc-500">
          <span>Backend & Full-stack Architecture</span>
          <span className="text-zinc-400">Strict Type-Safe</span>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExpertise;
