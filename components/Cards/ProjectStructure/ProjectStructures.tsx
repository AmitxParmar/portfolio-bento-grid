import { Grid, Server } from "lucide-react";
import Frontend from "./Front-end";
import Backend from "./Back-end";

export const ProjectStructures = {
  Frontend: () => (
    <div className="row-span-2 rounded-lg border border-iconBg bg-cardBg p-3 lg:p-1.5 2xl:p-4">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-md mb-1 flex items-center gap-2 text-lightText lg:text-[10px] lg:mb-0">
          <Grid className="text-primary" size={14} /> Front-end
        </h4>
        <h3 className="text-xl text-darkText lg:text-sm 2xl:text-xl">Project Structure</h3>
      </div>
      <Frontend />
    </div>
  ),
  Backend: () => (
    <div className="row-span-2 rounded-lg border border-iconBg bg-cardBg p-3 lg:p-1.5 2xl:p-4">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-md mb-1 flex items-center gap-2 text-lightText lg:text-[10px] lg:mb-0">
          <Server className="text-primary" size={14} /> Back-end
        </h4>
        <h3 className="text-xl text-darkText lg:text-sm 2xl:text-xl">Project Structure</h3>
      </div>
      <Backend />
    </div>
  ),
};

export default ProjectStructures;
