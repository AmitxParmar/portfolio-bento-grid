"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Database, 
  Zap, 
  Layers,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceNode {
  id: string;
  name: string;
  protocol: string;
  resilience: string;
  icon: typeof ShieldCheck;
  accent: string;
  badge: string;
  description: string;
}

const NODES: ServiceNode[] = [
  {
    id: "gateway",
    name: "Kong Gateway",
    protocol: "HTTP/2",
    resilience: "Edge Shield & Rate Limit",
    icon: ShieldCheck,
    accent: "text-emerald-400",
    badge: "Edge",
    description: "TLS termination, token bucket throttling & JWT auth",
  },
  {
    id: "broker",
    name: "RabbitMQ",
    protocol: "AMQP 0-9",
    resilience: "Transactional Outbox",
    icon: Zap,
    accent: "text-amber-400",
    badge: "Event",
    description: "Zero-loss CDC pipeline, dead-letter exchanges & idempotent ACK",
  },
  {
    id: "services",
    name: "Microservices",
    protocol: "HTTP/2 REST",
    resilience: "Circuit Breakers",
    icon: Layers,
    accent: "text-purple-400",
    badge: "Mesh",
    description: "Strict OpenAPI contracts, exponential backoff & fail-safe fallbacks",
  },
  {
    id: "database",
    name: "PostgreSQL",
    protocol: "Wire",
    resilience: "Read Replicas & Pool",
    icon: Database,
    accent: "text-indigo-400",
    badge: "Data",
    description: "Connection pooling, Read replicas & ACID transactions",
  },
];

const SystemArchitecturePreview = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>("broker");
  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[1];

  return (
    <div id="architecture" className="bezel-outer w-full">
      <div className="bezel-inner !p-3.5 gap-2.5">
        {/* Compact Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-zinc-600" />
            <h3 className="text-xs font-bold text-white tracking-tight">
              System Architecture
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-400">
            <span className="text-zinc-500 uppercase">As implemented</span>
          </div>
        </div>

        {/* 4-Node Pipeline Flow */}
        <div className="relative flex items-center justify-between gap-1 py-0.5">
          {NODES.map((node, index) => {
            const Icon = node.icon;
            const isSelected = node.id === activeNodeId;

            return (
              <div key={node.id} className="flex-1 flex items-center min-w-0">
                <button
                  type="button"
                  onClick={() => setActiveNodeId(node.id)}
                  className={`group relative flex-1 flex flex-col items-center text-center p-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.09] border-white/30 shadow-xs"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-node-indicator"
                      className="absolute inset-0 rounded-lg border border-primary/40 bg-primary/[0.03] pointer-events-none"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}

                  <span className="text-[7px] font-mono uppercase tracking-wider text-zinc-400 mb-0.5 relative z-10">
                    {node.badge}
                  </span>

                  <div
                    className={`size-6 rounded-md border flex items-center justify-center transition-transform relative z-10 ${
                      isSelected
                        ? "bg-white/[0.08] border-white/30 scale-105"
                        : "bg-white/[0.02] border-white/5 group-hover:scale-105"
                    }`}
                  >
                    <Icon className={`size-3 ${node.accent}`} />
                  </div>

                  <span className="text-[9px] font-medium text-white mt-1 truncate max-w-full relative z-10">
                    {node.name.split(" ")[0]}
                  </span>
                </button>

                {index < NODES.length - 1 && (
                  <div className="px-0.5 shrink-0 flex items-center justify-center text-zinc-600">
                    <ArrowRight size={9} className="opacity-40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Telemetry & Strategy Console */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.15 }}
            className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2 flex flex-col gap-1 text-[9px] font-mono"
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-zinc-500" />
                {activeNode.name}
                <span className="text-[8px] text-zinc-400 font-normal">
                  [{activeNode.protocol}]
                </span>
              </span>
            </div>

            <div className="text-[8px] text-zinc-400 flex items-center justify-between border-t border-white/[0.04] pt-1">
              <span className="text-primary/90 font-medium truncate">
                {activeNode.resilience}
              </span>
              <span className="text-zinc-500 truncate ml-2 hidden sm:inline">
                {activeNode.description}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Compact Footer */}
        <div className="pt-1 border-t border-white/[0.05] flex items-center justify-between text-[8px] font-mono text-zinc-500">
          <span>Event-driven distributed mesh</span>
          <span className="text-zinc-400 flex items-center gap-1">
            <Layers size={9} className="text-zinc-600" />
            5 bounded contexts
          </span>
        </div>
      </div>
    </div>
  );
};

export default SystemArchitecturePreview;
