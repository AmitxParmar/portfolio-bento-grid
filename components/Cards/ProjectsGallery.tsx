"use client";

import Image from "next/image";
import { allProjects, type Project } from "content-collections";
import { Briefcase } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Marquee } from "../magicui/marquee";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import ProjectCard from "./ProjectCard";
import ProjectDetailsDialog from "./ProjectDetailsDialog/ProjectDetailsDialog";
import { useState } from "react";

const ProjectsGallery = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setDetailsOpen(true);
  };

  // Group projects by year
  const groupedProjects = allProjects.reduce((acc, project) => {
    const year = project.year || "Other";
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  // Sort years descending
  const sortedYears = Object.keys(groupedProjects).sort((a, b) => {
    if (a === "Other") return 1;
    if (b === "Other") return -1;
    return Number.parseInt(b) - Number.parseInt(a);
  });

  return (
    <div className="col-span-4 row-span-3 rounded-lg border border-iconBg bg-cardBg p-2 lg:p-3 2xl:p-6">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-md mb-1 flex items-center gap-2 text-lightText lg:text-xs 2xl:text-md 2xl:mb-2">
          <Briefcase className="text-primary" size={16} /> Projects
        </h4>
        <h3 className="text-xl text-darkText lg:text-base 2xl:text-xl">Work Gallery</h3>
      </div>
      <div className="relative size-full">
        <div className="relative">
          <Marquee>
            {allProjects?.map((project) => (
              <Image
                loading="lazy"
                key={project.title}
                alt={`${project.title} project image`}
                height={150}
                width={300}
                src={project.cover ?? "/next.svg"}
                className="rounded-xl object-cover aspect-video h-auto lg:max-h-[80px] 2xl:max-h-[150px]"
                style={{ width: "auto" }}
              />
            ))}
          </Marquee>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-cardBg to-transparent" />
        </div>
        <div className="w-full">
          <InteractiveHoverButton
            onClick={() => setGalleryOpen(true)}
            className="absolute inset-x-14 bottom-14 mx-auto flex justify-center bg-primary-foreground text-darkText shadow-lg"
          >
            View Works
          </InteractiveHoverButton>

          {/* Main Gallery Dialog */}
          <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
            <DialogContent className="max-h-[95vh] max-w-(--breakpoint-xl) overflow-y-auto border-none bg-black md:max-w-[85vw] lg:max-w-[75vw] p-0 px-6 lg:px-8 rounded-2xl">
              <div className="sticky top-0 z-20 bg-black py-3 lg:py-4 border-b border-white/5">
                <DialogTitle className="text-xl font-black text-white lg:text-2xl">
                  Project Archive
                </DialogTitle>
                <DialogDescription className="text-[10px] text-lightText mt-0.5 lg:text-xs">
                  A timeline of engineering projects, experiments, and case
                  studies.
                </DialogDescription>
              </div>

              <div className="flex flex-col gap-4 py-4 lg:gap-6 lg:py-6">
                {sortedYears.map((year) => (
                  <div key={year} className="space-y-2 lg:space-y-3">
                    <div className="flex items-center gap-4">
                      <h2 className="text-xl font-black text-primary/50 lg:text-2xl">
                        {year}
                      </h2>
                      <div className="h-[1px] flex-1 bg-white/5" />
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
                      {groupedProjects[year].map(
                        (project: Project, index: number) => (
                          <div
                            key={project.title}
                            className="cursor-pointer"
                            onClick={() => handleProjectSelect(project)}
                          >
                            <ProjectCard
                              project={project}
                              priority={index < 3}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Detailed Project Dialog */}
          <ProjectDetailsDialog
            project={selectedProject}
            open={detailsOpen}
            onOpenChange={setDetailsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
