"use client";

import Image from "next/image";
import { allProjects, type Project } from "content-collections";
import { Briefcase, Layers, ArrowRight } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Marquee } from "../ui/marquee";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import ProjectCard from "./ProjectCard";
import ProjectDetailsDialog from "./ProjectDetailsDialog/ProjectDetailsDialog";
import { useState } from "react";
import { motion } from "motion/react";

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-1 flex-col rounded-[2.5rem] border-premium card-gradient-blue p-6 lg:p-4 2xl:p-8 hover-glow-purple transition-all duration-500 group/gallery relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute -right-6 -bottom-6 opacity-5 group-hover/gallery:scale-110 group-hover/gallery:rotate-12 transition-transform duration-1000">
        <Layers size={180} className="text-primary" />
      </div>

      <div className="flex flex-col items-center justify-center text-center mb-2 lg:mb-1 relative z-10">
        <h4 className="text-[10px] mb-1.5 flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-hover/gallery:opacity-100 transition-opacity">
          <Briefcase size={12} className="fill-primary/20" /> Portfolio
        </h4>
        <h3 className="text-2xl font-black text-white tracking-tightest lg:text-lg 2xl:text-3xl leading-none">Work Gallery</h3>
      </div>
      
      <div className="relative flex-1 min-h-0 overflow-hidden rounded-2xl border border-white/5 bg-black/40 mb-2 lg:mb-1.5 group/marquee transition-colors hover:border-white/10 p-4 lg:p-2.5 flex flex-col justify-between">
        {/* Top Marquee */}
        <div className="relative pt-2 lg:pt-1">
          <Marquee className="[--duration:40s]">
            {allProjects?.map((project) => (
              <div key={project.title} className="px-2 cursor-pointer" onClick={() => handleProjectSelect(project)}>
                <Image
                  loading="lazy"
                  alt={`${project.title} project image`}
                  height={120}
                  width={240}
                  src={project.cover ?? "/next.svg"}
                  className="rounded-xl object-cover aspect-video h-auto max-h-[70px] lg:max-h-[50px] 2xl:max-h-[100px] border border-white/10 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/50"
                  style={{ width: "auto" }}
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Recent Projects List */}
        <div className="mt-4 lg:mt-2 flex-1 flex flex-col justify-center gap-2.5 lg:gap-1.5 overflow-hidden">
          <h5 className="text-[9px] font-black text-primary/60 uppercase tracking-widest border-b border-white/5 pb-1 mb-1 lg:mb-0.5 flex justify-between items-center">
            <span>Featured Highlights</span>
            <span>{allProjects?.length || 0} Total</span>
          </h5>
          <div className="flex flex-col gap-2 lg:gap-1 overflow-y-auto pr-1">
            {allProjects?.slice(2, 3).map((project) => (
              <div
                key={project.title}
                onClick={() => handleProjectSelect(project)}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/2 p-2.5 lg:p-1.5 hover:bg-white/6 hover:border-primary/20 transition-all cursor-pointer group/row"
              >
                <div className="flex items-center gap-3 lg:gap-2 min-w-0">
                  <div className="relative size-10 lg:size-7 2xl:size-12 rounded-lg overflow-hidden border border-white/10 shrink-0">
                    <Image
                      src={project.cover ?? "/next.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover/row:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-[11px] lg:text-[9px] font-black text-white truncate leading-snug group-hover/row:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-[9px] lg:text-[7px] text-white/40 font-bold truncate">
                      {project.role?.[0]}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[9px] lg:text-[7px] text-white/50 bg-white/5 px-2 py-0.5 rounded font-black">
                    {project.year}
                  </span>
                  <ArrowRight className="size-3 lg:size-2.5 text-white/25 group-hover/row:text-primary group-hover/row:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-0 relative z-10">
        <InteractiveHoverButton
          onClick={() => setGalleryOpen(true)}
          className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary transition-all duration-300 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] px-8 h-12 lg:h-10 rounded-xl font-black uppercase tracking-widest text-[10px] lg:text-[8px]"
        >
          Explore Archive
        </InteractiveHoverButton>
      </div>

      {/* Main Gallery Dialog */}
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-h-[95vh] max-w-(--breakpoint-xl) overflow-y-auto border-none bg-black md:max-w-[85vw] lg:max-w-[75vw] p-0 px-6 lg:px-8 rounded-2xl">
          <div className="sticky top-0 z-20 bg-black py-4 lg:py-6 border-b border-white/5">
            <DialogTitle className="text-2xl font-black text-white lg:text-3xl tracking-tightest">
              Project Archive
            </DialogTitle>
            <DialogDescription className="text-[11px] text-lightText/60 mt-1 uppercase tracking-widest font-bold">
              A curated timeline of engineering projects and digital experiments.
            </DialogDescription>
          </div>

          <div className="flex flex-col gap-6 py-6 lg:gap-8 lg:py-8">
            {sortedYears.map((year) => (
              <div key={year} className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-black text-primary/40 lg:text-3xl tracking-tighter">
                    {year}
                  </h2>
                  <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                  {groupedProjects[year].map(
                    (project: Project, index: number) => (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        key={project.title}
                        className="cursor-pointer group/item"
                        onClick={() => handleProjectSelect(project)}
                      >
                        <ProjectCard
                          project={project}
                          priority={index < 3}
                        />
                      </motion.div>
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
    </motion.div>
  );
};

export default ProjectsGallery;
