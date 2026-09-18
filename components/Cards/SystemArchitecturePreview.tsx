import { Server, ShieldCheck, Database, Zap, ArrowRight, Share2, Activity, Network, RefreshCw } from "lucide-react";

const SystemArchitecturePreview = () => {
  return (
    <div 
      id="architecture"
      className="flex flex-1 w-full flex-col rounded-[2rem] border-premium card-gradient-purple p-6 lg:p-4 2xl:p-8 hover-glow-purple transition-all duration-500 group/arch relative overflow-hidden"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center justify-center text-center">
        <h4 className="text-[11px] mb-1 flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-hover/arch:opacity-100 transition-opacity">
          <Network className="text-primary animate-pulse" size={13} /> System Design
        </h4>
        <h3 className="text-xl font-black text-white tracking-tighter lg:text-base 2xl:text-2xl leading-none">
          Microservices Topology
        </h3>
      </div>

      {/* Schematic Diagram - Horizontal Layout */}
      <div className="flex-1 flex flex-col justify-center relative z-10 w-full overflow-hidden">
        
        <div className="flex items-center justify-between w-full relative z-10 px-2 lg:px-0">
          
          {/* Node 1: Gateway */}
          <div className="flex flex-col items-center gap-1.5 lg:gap-1 2xl:gap-2 w-[60px] lg:w-[48px] 2xl:w-[70px] text-center group/node relative shrink-0">
            <div className="h-10 w-10 lg:h-8 lg:w-8 2xl:h-12 2xl:w-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-emerald-500/50 hover:bg-white/[0.05] transition-all relative shadow-lg">
              <ShieldCheck className="text-emerald-400 size-4 lg:size-3.5 2xl:size-5" />
            </div>
            <span className="text-[10px] lg:text-[9px] 2xl:text-[11px] font-black uppercase text-white/80 tracking-wider">Kong</span>
          </div>

          <div className="flex-1 border-t border-dashed border-white/20 mx-1 lg:mx-0.5 2xl:mx-2 min-w-[10px]" />

          {/* Node 2: Message Broker */}
          <div className="flex flex-col items-center gap-1.5 lg:gap-1 2xl:gap-2 w-[60px] lg:w-[48px] 2xl:w-[70px] text-center group/node relative shrink-0">
            <div className="h-10 w-10 lg:h-8 lg:w-8 2xl:h-12 2xl:w-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-amber-500/50 hover:bg-white/[0.05] transition-all relative shadow-lg">
              <span className="absolute top-0 right-0 flex h-1.5 w-1.5 lg:h-1 lg:w-1 2xl:h-2 2xl:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 lg:h-1 lg:w-1 2xl:h-2 2xl:w-2 bg-amber-500"></span>
              </span>
              <Zap className="text-amber-400 size-4 lg:size-3.5 2xl:size-5" />
            </div>
            <span className="text-[10px] lg:text-[9px] 2xl:text-[11px] font-black uppercase text-white/80 tracking-wider">Broker</span>
          </div>

          <div className="flex-1 border-t border-dashed border-white/20 mx-1 lg:mx-0.5 2xl:mx-2 min-w-[10px]" />

          {/* Node 3: Services (Stacked group) */}
          <div className="flex flex-col items-center gap-1.5 lg:gap-1 2xl:gap-2 text-center group/node shrink-0">
            <div className="grid grid-cols-2 gap-1 lg:gap-0.5 2xl:gap-1.5 bg-white/[0.02] border border-white/10 p-1.5 lg:p-1 2xl:p-2 rounded-lg hover:border-blue-500/50 hover:bg-white/[0.04] transition-all shadow-lg">
              <div className="bg-white/5 rounded px-1.5 py-0.5 text-[8px] lg:text-[7px] 2xl:text-[9px] font-black uppercase text-blue-400 text-center">Auth</div>
              <div className="bg-white/5 rounded px-1.5 py-0.5 text-[8px] lg:text-[7px] 2xl:text-[9px] font-black uppercase text-indigo-400 text-center">User</div>
              <div className="bg-white/5 rounded px-1.5 py-0.5 text-[8px] lg:text-[7px] 2xl:text-[9px] font-black uppercase text-purple-400 col-span-2 text-center">Notify</div>
            </div>
            <span className="text-[10px] lg:text-[9px] 2xl:text-[11px] font-black uppercase text-white/80 tracking-wider">Services</span>
          </div>

          <div className="flex-1 border-t border-dashed border-white/20 mx-1 lg:mx-0.5 2xl:mx-2 min-w-[10px]" />

          {/* Node 4: DB */}
          <div className="flex flex-col items-center gap-1.5 lg:gap-1 2xl:gap-2 w-[60px] lg:w-[48px] 2xl:w-[70px] text-center group/node relative shrink-0">
            <div className="h-10 w-10 lg:h-8 lg:w-8 2xl:h-12 2xl:w-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-primary/50 hover:bg-white/[0.05] transition-all relative shadow-lg">
              <Database className="text-primary size-4 lg:size-3.5 2xl:size-5" />
            </div>
            <span className="text-[10px] lg:text-[9px] 2xl:text-[11px] font-black uppercase text-white/80 tracking-wider">Neon DB</span>
          </div>

        </div>

      </div>

      {/* Specifications / Features Footer */}
      <div className="mt-6 pt-4 border-t border-white/5 relative z-10 flex flex-wrap justify-between items-center text-[8px] font-black text-lightText/40 uppercase tracking-widest gap-2">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Broker Status: Online
        </div>
        <div className="flex items-center gap-1 hover:text-white transition-colors cursor-default group/refresh">
          <RefreshCw className="size-2 transition-transform duration-1000 group-hover/refresh:rotate-180" />
          Event Sync Active
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover/arch:opacity-[0.05] transition-opacity rotate-12 pointer-events-none">
        <Share2 size={160} className="text-primary" />
      </div>
    </div>
  );
};

export default SystemArchitecturePreview;
