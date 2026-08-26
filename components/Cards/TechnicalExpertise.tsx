import { Code2, Terminal, Cloud, Layers, Cpu } from "lucide-react";

const TechnicalExpertise = () => {
  const skills = [
    {
      title: "Frontend",
      icon: Code2,
      items: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Expert" },
        { name: "Tailwind", level: "Expert" }
      ],
      color: "text-blue-400"
    },
    {
      title: "Backend",
      icon: Terminal,
      items: [
        { name: "Node.js", level: "Advanced" },
        { name: "NestJS", level: "Advanced" },
        { name: "Express", level: "Advanced" },
        { name: "Postgres", level: "Expert" }
      ],
      color: "text-green-400"
    },
    {
      title: "DevOps",
      icon: Cloud,
      items: [
        { name: "Docker", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "Nginx", level: "Intermediate" },
        { name: "CI/CD", level: "Advanced" }
      ],
      color: "text-orange-400"
    },
    {
      title: "Architecture",
      icon: Layers,
      items: [
        { name: "Microservices", level: "Expert" },
        { name: "CQRS", level: "Advanced" },
        { name: "Outbox", level: "Advanced" },
        { name: "Caching", level: "Advanced" }
      ],
      color: "text-purple-400"
    }
  ];

  return (
    <div className="flex flex-1 flex-col rounded-[2rem] border-premium card-gradient-gray p-6 lg:p-4 2xl:p-8 hover-glow-purple transition-all duration-500 group/skills overflow-hidden">
      <div className="mb-6 lg:mb-4 2xl:mb-8 flex flex-col items-center justify-center text-center">
        <h4 className="text-[10px] mb-1.5 flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-hover/skills:opacity-100 transition-opacity">
          <Cpu className="fill-primary/20 text-primary" size={12} /> Specialization
        </h4>
        <h3 className="text-xl font-black text-white tracking-tighter lg:text-base 2xl:text-2xl leading-none">
          Technical Expertise
        </h3>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-3.5 lg:gap-2.5 2xl:gap-6">
          {skills.map((skill) => (
            <div key={skill.title} className="bg-white/[0.01] border border-white/5 rounded-xl p-3 lg:p-2 2xl:p-4 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2 lg:mb-1.5 pb-1 border-b border-white/5">
                <skill.icon size={13} className={skill.color} />
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-white/95 leading-none">{skill.title}</span>
              </div>
              <div className="flex flex-col gap-1">
                {skill.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-[10px] text-white/50 font-bold tracking-tight py-0.5 group/item">
                    <span className="group-hover/item:text-white transition-colors">{item.name}</span>
                    <span className="text-[7px] text-lightText/40 font-black tracking-wider uppercase opacity-80 group-hover/item:text-primary transition-colors">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalExpertise;
