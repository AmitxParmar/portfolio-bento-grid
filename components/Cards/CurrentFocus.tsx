import { Rocket, Target, Sparkles, Briefcase } from "lucide-react";

const CurrentFocus = () => {
  return (
    <div className="flex flex-1 flex-col rounded-[2rem] border-premium card-gradient-purple p-6 lg:p-4 2xl:p-8 hover-glow-purple transition-all duration-500 group/focus">
      <div className="mb-6 flex flex-col items-center justify-center text-center">
        <h4 className="text-[10px] mb-1 flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-focus:opacity-100 transition-opacity">
          <Target className="fill-primary/20" size={12} /> Roadmap
        </h4>
        <h3 className="text-xl font-black text-white tracking-tighter lg:text-base 2xl:text-2xl leading-none">
          Current Focus
        </h3>
      </div>

      <div className="flex flex-col gap-5 lg:gap-2 2xl:gap-6 mt-auto mb-auto">
        <div className="space-y-2 lg:space-y-1">
          <div className="flex items-center gap-2 text-primary">
            <Rocket size={12} />
            <span className="text-[10px] lg:text-[8px] font-black uppercase tracking-[0.15em]">Building</span>
          </div>
          <p className="text-sm lg:text-xs font-bold text-white pl-6 lg:pl-5">Modular Mart</p>
          <p className="text-[10px] lg:text-[8px] text-white/50 pl-6 lg:pl-5 leading-tight">Cloud-Native E-Commerce Platform</p>
        </div>

        <div className="space-y-2 lg:space-y-1">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles size={12} />
            <span className="text-[10px] lg:text-[8px] font-black uppercase tracking-[0.15em]">Exploring</span>
          </div>
          <p className="text-sm lg:text-xs font-bold text-white pl-6 lg:pl-5">AI Agents & Distributed Systems</p>
        </div>

        <div className="space-y-2 lg:space-y-1">
          <div className="flex items-center gap-2 text-primary">
            <Briefcase size={12} />
            <span className="text-[10px] lg:text-[8px] font-black uppercase tracking-[0.15em]">Seeking</span>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-1 pl-6 lg:pl-5">
            {["Backend", "Full Stack", "Platform Engineering"].map((role) => (
              <span key={role} className="text-[9px] lg:text-[7px] bg-white/5 px-2 py-0.5 rounded-full text-white/70 border border-white/5 font-black uppercase tracking-tighter">
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentFocus;
