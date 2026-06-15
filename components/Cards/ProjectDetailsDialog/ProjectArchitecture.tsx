import React from "react";
import { Box } from "lucide-react";

interface ProjectArchitectureProps {
  architecture: string;
}

const ProjectArchitecture = ({ architecture }: ProjectArchitectureProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
        <Box size={18} />
        <span>Architecture</span>
      </div>
      
      <div className="rounded-2xl border border-iconBg bg-cardBg/30 p-6 backdrop-blur-xs">
        <p className="text-darkText leading-relaxed">
          {architecture}
        </p>
      </div>
    </div>
  );
};

export default ProjectArchitecture;
