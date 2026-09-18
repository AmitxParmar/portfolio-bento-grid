import React from "react";
import { Project } from "content-collections";
import { User, Cpu } from "lucide-react";

interface ProjectSidebarProps {
  project: Project;
}

const ProjectSidebar = ({ project }: ProjectSidebarProps) => {
  return (
    <div className="flex flex-col gap-8 sticky top-0 h-fit">
      {/* Featured Metrics */}
      {project.featuredMetrics && Object.keys(project.featuredMetrics).length > 0 && (
        <div className="rounded-2xl border border-iconBg bg-cardBg/50 p-6 backdrop-blur-xs">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-lightText flex items-center gap-2">
            Engineering Impact
          </h3>
          <div className="space-y-6">
            {Object.entries(project.featuredMetrics).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-3xl font-black text-primary">{String(value)}</span>
                <span className="text-xs font-semibold text-lightText uppercase tracking-wider mt-1">
                  {key.replaceAll('_', ' ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack */}
      {project.tags && project.tags.length > 0 && (
        <div className="rounded-2xl border border-iconBg bg-cardBg/50 p-6 backdrop-blur-xs">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-lightText flex items-center gap-2">
            <Cpu size={16} /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t: string) => (
              <span 
                key={t} 
                className="rounded-md bg-iconBg/50 px-3 py-1.5 text-xs font-semibold text-darkText border border-iconBg transition-colors hover:bg-iconBg"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Role */}
      {project.role && project.role.length > 0 && (
        <div className="rounded-2xl border border-iconBg bg-cardBg/50 p-6 backdrop-blur-xs">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-lightText">Role</h3>
          <ul className="space-y-3">
            {project.role.map((r: string) => (
              <li key={r} className="flex items-center gap-3 text-sm font-medium text-darkText">
                <div className="p-2 rounded-lg bg-iconBg/50 text-primary">
                  <User size={16} />
                </div>
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectSidebar;
