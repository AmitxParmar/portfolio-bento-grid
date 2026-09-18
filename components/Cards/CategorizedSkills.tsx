import React from "react";
import { Layout, Server, Database, Settings } from "lucide-react";

const CategorizedSkills = () => {
  const categories = [
    {
      name: "Frontend",
      icon: <Layout size={16} />,
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Zustand"],
    },
    {
      name: "Backend",
      icon: <Server size={16} />,
      skills: ["Node.js", "Express", "Socket.io", "Prisma", "Zod"],
    },
    {
      name: "Infrastructure",
      icon: <Settings size={16} />,
      skills: ["Docker", "Git", "Redis", "Firebase", "Linux"],
    },
  ];

  return (
    <div className="col-span-3 row-span-3 rounded-lg border border-white/5 card-gradient-gray p-6">
      <h3 className="mb-6 text-xl font-semibold text-white">Engineering Skills</h3>
      <div className="space-y-6">
        {categories.map((cat, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              {cat.icon}
              <h4 className="text-sm font-medium uppercase tracking-wider">{cat.name}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-[10px] text-lightText hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorizedSkills;
