"use client";

import { Gauge, CheckCircle2 } from "lucide-react";

const STANDARDS = [
  { name: "Zero-Loss Outbox", sub: "Transactional CDC" },
  { name: "Circuit Breakers", sub: "Fallback isolation" },
  { name: "p99 Latency SLA", sub: "Redis cache-aside" },
  { name: "Strict Schemas", sub: "End-to-end types" },
  { name: "OpenTelemetry", sub: "Distributed tracing" },
  { name: "Local-First Sync", sub: "IndexedDB client state" },
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
          <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
            99.98% SLA
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
          <span className="text-zinc-400 flex items-center gap-1">
            <CheckCircle2 size={9} className="text-emerald-400" />
            Enforced
          </span>
        </div>
      </div>
    </div>
  );
};

export default EngineeringHighlights;
