import React from "react";
import { Badge } from "../ui/badge";
import { Laptop, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Laptop size={16} className="text-blue-400" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Query"]
  },
  {
    title: "Backend",
    icon: <Server size={16} className="text-green-400" />,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Socket.io", "Redis"]
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench size={16} className="text-purple-400" />,
    skills: ["Docker", "Git", "AWS", "Linux", "CI/CD", "Postman"]
  }
];

const CoreSkills = () => {
  return (
    <div className="flex h-full flex-col rounded-lg border border-white/5 bg-cardBg/50 p-6 backdrop-blur-xs">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white">Engineering Skills</h3>
      </div>
      
      <div className="space-y-6">
        {skillGroups.map((group, i) => (
          <div key={i} className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
              {group.icon}
              <span>{group.title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, j) => (
                <Badge key={j} className="rounded-md border-white/5 bg-white/5 px-2 py-1 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition-all">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreSkills;
