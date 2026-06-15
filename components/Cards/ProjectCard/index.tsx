import React from "react";
import { Badge } from "../../ui/badge";
import Image from "next/image";
import { Github, Globe } from "lucide-react";
import { Project } from "content-collections";

const ProjectCard = ({
  project: {
    title,
    description,
    tags,
    cover,
    github,
    demo,
    year,
  },
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) => {
  return (
    <div
      className="group h-auto min-h-fit cursor-pointer overflow-hidden rounded-xl border bg-cardBg pb-2 transition-all duration-300 hover:scale-[1.02] hover:border-gray-600"
    >
      <div className="relative h-24 overflow-hidden sm:h-28">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={cover ?? "/next.svg"}
            alt={`${title} project cover image`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
            priority={priority}
          />
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      <div className="p-2 text-left">
        <h3 className="mb-0.5 text-sm font-bold capitalize text-white sm:text-base line-clamp-1">
          {title}
        </h3>
        {year && (
          <div className="mb-1 flex items-center gap-2 text-[10px] text-blue-300/80">
            <span>{year}</span>
          </div>
        )}
        <p className="mb-1.5 line-clamp-1 text-[10px] text-gray-400 sm:text-xs leading-relaxed">
          {description}
        </p>

        <div className="mb-2 flex flex-wrap gap-1 sm:gap-1.5">
          {tags?.slice(0, 3).map((skill) => (
            <Badge
              key={skill}
              className="rounded bg-iconBg px-1 py-0 text-[9px] capitalize text-blue-300 sm:px-1.5 sm:py-0.5 sm:text-[10px]"
            >
              {skill}
            </Badge>
          ))}
          {tags && tags.length > 3 && (
            <span className="text-[9px] text-gray-500 font-medium">+{tags.length - 3}</span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-1.5">
          <div className="flex items-center text-[10px] text-blue-400 transition-colors group-hover:text-blue-300 sm:text-xs font-semibold">
            <span>Details</span>
            <svg
              className="ml-0.5 size-2.5 transition-transform group-hover:translate-x-0.5 sm:size-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
          <div className="flex space-x-1 sm:space-x-1.5">
            {github && (
              <div className="text-gray-400 transition-colors hover:text-white">
                <Github className="size-3 sm:size-3.5" />
              </div>
            )}
            {demo && (
              <div className="text-gray-400 transition-colors hover:text-white">
                <Globe className="size-3 sm:size-3.5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
