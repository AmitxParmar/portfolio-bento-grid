"use client";

import { Gauge } from "lucide-react";

const STANDARDS = [
  { name: "Exactly-Once Consumers", sub: "processed_messages guard" },
  { name: "Compensating Saga", sub: "auto stock rollback" },
  { name: "Circuit Breakers", sub: "exponential backoff" },
  { name: "50ms Batched Frames", sub: "server coalescing" },
  { name: "Local-First Sync", sub: "Dexie.js / IndexedDB" },
  { name: "Distributed Tracing", sub: "Jaeger + LGTM stack" },
];

const EngineeringHighlights = () => {
  return (
    <div className="bezel-outer w-full">
      <div className="bezel-inner !p-3.5 gap-2.5">
        {/* Compact Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-1.5">
            <Gauge className="size-3 text-primary" />
            <h3 className="text-xs font-bold text-white tracking-tight">
              Production Standards
            </h3>
          </div>
          <span className="text-[8px] font-mono text-zinc-500 uppercase">
            Across 3 projects
          </span>
        </div>

        {/* Compact 2-Column Tenets Grid */}
        <div className="grid grid-cols-2 gap-1.5 py-0.5">
          {STANDARDS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-150 group/chip cursor-default"
            >
              <span className="size-1 rounded-full bg-primary/80 group-hover/chip:bg-emerald-400 group-hover/chip:scale-125 transition-all shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-semibold text-white truncate leading-tight group-hover/chip:text-primary transition-colors">
                  {item.name}
                </span>
                <span className="text-[8px] font-mono text-zinc-400 truncate leading-none mt-0.5">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Footer */}
        <div className="pt-1 border-t border-white/[0.05] flex items-center justify-between text-[8px] font-mono text-zinc-500">
          <span>High-resilience architecture</span>
          <span className="text-zinc-400">No runtime telemetry</span>
        </div>
      </div>
    </div>
  );
};

export default EngineeringHighlights;
