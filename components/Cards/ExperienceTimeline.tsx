import React from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance / Projects",
      period: "2023 - Present",
      description: "Building production-grade web applications using the MERN stack and Next.js.",
      icon: <Briefcase size={16} />,
    },
    {
      title: "BCA (Bachelor of Computer Applications)",
      company: "Saurashtra University",
      period: "2021 - 2024",
      description: "Focused on computer science fundamentals, data structures, and web technologies.",
      icon: <GraduationCap size={16} />,
    },
  ];

  return (
    <div className="col-span-4 row-span-3 rounded-lg border border-white/5 card-gradient-blue p-6">
      <h3 className="mb-6 text-xl font-semibold text-white">Career Journey</h3>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex gap-4">
            {index !== experiences.length - 1 && (
              <div className="absolute left-[11px] top-7 h-full w-[2px] bg-white/5" />
            )}
            <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/20">
              {exp.icon}
            </div>
            <div className="space-y-1 pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-medium text-white">{exp.title}</h4>
                <span className="inline-flex items-center gap-1 text-xs text-lightText bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                  <Calendar size={12} /> {exp.period}
                </span>
              </div>
              <p className="text-sm text-primary/80">{exp.company}</p>
              <p className="text-xs text-lightText/60 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
