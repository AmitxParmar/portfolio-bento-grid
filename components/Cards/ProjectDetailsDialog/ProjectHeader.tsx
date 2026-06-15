import React from "react";
import Image from "next/image";
import { Project } from "content-collections";
import { Github, ExternalLink, Calendar, BookOpen } from "lucide-react";

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <div className="relative h-[30vh] md:h-[40vh] w-full overflow-hidden border-b border-iconBg">
      {project.cover && (
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover opacity-30 blur-xs"
          priority
        />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/80 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 lg:px-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
              {project.status || "Completed"}
            </span>
            <span className="text-sm text-lightText flex items-center gap-1">
              <Calendar size={14} />
              {project.year || "2025"}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-darkText">
            {project.title}
          </h1>
          
          <p className="max-w-2xl text-lg text-lightText">
            {project.description}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-4">
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-0.5"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-cardBg border border-iconBg px-4 py-2 text-sm font-semibold text-darkText hover:bg-iconBg transition-all hover:-translate-y-0.5"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
            {project.docs && (
              <a 
                href={project.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-cardBg border border-iconBg px-4 py-2 text-sm font-semibold text-darkText hover:bg-iconBg transition-all hover:-translate-y-0.5"
              >
                <BookOpen size={16} />
                Docs
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
