import { Grid, Server } from "lucide-react";
import Frontend from "./Front-end";
import Backend from "./Back-end";

export const ProjectStructures = {
  Frontend: () => (
    <div className="row-span-2 rounded-lg border border-iconBg bg-cardBg p-4">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-md mb-2 flex items-center gap-2 text-lightText">
          <Grid className="text-primary" /> Front-end
        </h4>
        <h3 className="text-xl text-darkText">Project Structure</h3>
      </div>
      <Frontend />
    </div>
  ),
  Backend: () => (
    <div className="row-span-2 rounded-lg border border-iconBg bg-cardBg p-4">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-md mb-2 flex items-center gap-2 text-lightText">
          <Server className="text-primary" /> Back-end
        </h4>
        <h3 className="text-xl text-darkText">Project Structure</h3>
      </div>
      <Backend />
    </div>
  ),
};

export default ProjectStructures;
