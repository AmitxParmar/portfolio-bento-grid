import React from "react";
import { Badge } from "../../ui/badge";
import Image from "next/image";
import { Github, Globe } from "lucide-react";
import { Project } from "content-collections";

const ProjectCard = ({
  project: {
    title,
    description,
    tech,
    tags,
    cover,
    github,
    demo,
    year,
    role,
  },
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) => {
  return (
    <div
      className="group h-auto min-h-fit cursor-pointer overflow-hidden rounded-[1.5rem] border-premium bg-black/40 pb-3 transition-all duration-500 hover:scale-[1.03] hover-glow-purple"
    >
      <div className="relative h-28 overflow-hidden sm:h-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={cover ?? "/next.svg"}
            alt={`${title} project cover image`}
            fill
            className="object-cover opacity-60 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
            priority={priority}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
      </div>

      <div className="p-4 text-left relative z-10">
        <div className="mb-1.5 flex items-center justify-between">
          <h3 className="text-base font-black capitalize text-white line-clamp-1 tracking-tightest">
            {title}
          </h3>
          {year && (
            <span className="text-[9px] text-primary font-black uppercase tracking-widest bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">
              {year}
            </span>
          )}
        </div>

        {role && role.length > 0 && (
          <p className="mb-2 text-[9px] font-black uppercase tracking-[0.15em] text-primary/70">
            {role[0]}
          </p>
        )}
        
        <p className="mb-4 line-clamp-2 text-[11px] text-white/50 leading-relaxed font-medium tracking-wide">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {(tech ?? tags)?.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded bg-white/5 border border-white/5 px-2 py-0.5 text-[9px] font-black uppercase tracking-tighter text-white/70"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-3">
          <div className="flex items-center text-[10px] text-primary transition-all group-hover:gap-1.5 sm:text-xs font-black uppercase tracking-tighter">
            <span>Details</span>
            <svg
              className="ml-1 size-3 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
          <div className="flex space-x-2">
            {github && (
              <div className="text-lightText/40 transition-colors hover:text-white">
                <Github className="size-3.5 sm:size-4" />
              </div>
            )}
            {demo && (
              <div className="text-lightText/40 transition-colors hover:text-white">
                <Globe className="size-3.5 sm:size-4" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
