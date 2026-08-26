import { Grid, Server } from "lucide-react";
import Frontend from "./Front-end";
import Backend from "./Back-end";

export const ProjectStructures = {
  Frontend: () => (
    <div className="w-full h-full rounded-[2rem] border-premium card-gradient-purple p-6 lg:p-4 2xl:p-6 hover-glow-purple transition-all duration-500 group/struct">
      <div className="flex flex-col items-center justify-center text-center mb-6">
        <h4 className="text-[10px] mb-1 flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-hover/struct:opacity-100 transition-opacity">
          <Grid size={12} /> Front-end
        </h4>
        <h3 className="text-xl font-black text-white tracking-tighter lg:text-sm 2xl:text-xl">Engineering Architecture</h3>
      </div>
      <Frontend />
    </div>
  ),
  Backend: () => (
    <div className="w-full h-full rounded-[2rem] border-premium card-gradient-orange p-6 lg:p-4 2xl:p-6 hover-glow-purple transition-all duration-500 group/struct">
      <div className="flex flex-col items-center justify-center text-center mb-6">
        <h4 className="text-[10px] mb-1 flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-hover/struct:opacity-100 transition-opacity">
          <Server size={12} /> Back-end
        </h4>
        <h3 className="text-xl font-black text-white tracking-tighter lg:text-sm 2xl:text-xl">System Infrastructure</h3>
      </div>
      <Backend />
    </div>
  ),
};

export default ProjectStructures;
