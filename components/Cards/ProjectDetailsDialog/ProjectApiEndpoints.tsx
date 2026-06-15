import React from "react";
import { Terminal } from "lucide-react";

interface ApiEndpoint {
  method: string;
  path: string;
  description: string;
}

interface ProjectApiEndpointsProps {
  endpoints: ApiEndpoint[];
}

const ProjectApiEndpoints = ({ endpoints }: ProjectApiEndpointsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
        <Terminal size={18} />
        <span>API Endpoints</span>
      </div>
      
      <div className="grid gap-4">
        {endpoints.map((endpoint, index) => (
          <div 
            key={index} 
            className="group rounded-xl border border-iconBg bg-cardBg/30 p-4 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                endpoint.method === 'GET' ? 'bg-blue-500/10 text-blue-500' :
                endpoint.method === 'POST' ? 'bg-green-500/10 text-green-500' :
                endpoint.method === 'PUT' ? 'bg-yellow-500/10 text-yellow-500' :
                'bg-red-500/10 text-red-500'
              }`}>
                {endpoint.method}
              </span>
              <code className="text-sm font-mono text-darkText group-hover:text-primary transition-colors">
                {endpoint.path}
              </code>
            </div>
            <p className="text-sm text-lightText leading-relaxed">
              {endpoint.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectApiEndpoints;
