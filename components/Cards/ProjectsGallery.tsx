"use client";

import Image from "next/image";
import Link from "next/link";
import { type Project } from "content-collections";
import { Briefcase, ArrowRight, ArrowUpRight, FolderGit2 } from "lucide-react";
import { Marquee } from "../ui/marquee";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import ProjectCard from "./ProjectCard";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";
import { useState } from "react";
import { motion } from "motion/react";

const PROJECT_COVER_FALLBACK = "/next.svg";
const getProjectCover = (cover?: string) => cover?.trim() || PROJECT_COVER_FALLBACK;

const ProjectsGallery = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const allProjects = getAllProjects();
  const featuredCaseStudies = getFeaturedProjects();

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
    <div id="projects" className="bezel-outer w-full">
      <div className="bezel-inner !p-3.5 gap-2.5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Briefcase className="size-3.5 text-primary" />
            </div>
            <div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Portfolio Showcase
              </span>
              <h3 className="text-xs font-bold text-white tracking-tight leading-none mt-0.5">
                Featured Case Studies
              </h3>
            </div>
          </div>
          <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider">
            {allProjects.length} Projects
          </span>
        </div>
        
        {/* Marquee Visual Scroller */}
        <div className="relative rounded-xl border border-white/[0.05] bg-white/[0.015] p-2 overflow-hidden">
          <Marquee className="[--duration:35s]">
            {allProjects?.map((project) => (
              <Link
                key={project.title}
                href={`/projects/${project.slug}`}
                scroll={false}
                className="px-1.5 block group/thumb"
              >
                <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-video h-12 transition-all duration-300 group-hover/thumb:border-primary/50 group-hover/thumb:scale-[1.03]">
                  <Image
                    loading="lazy"
                    alt={`${project.title} cover`}
                    fill
                    src={getProjectCover(project.cover)}
                    className="object-cover opacity-75 group-hover/thumb:opacity-100 transition-opacity"
                    sizes="180px"
                  />
                </div>
              </Link>
            ))}
          </Marquee>

          {/* Featured Case Studies List */}
          <div className="mt-2 flex flex-col gap-1.5">
            {featuredCaseStudies.slice(0, 3).map((project) => (
              <Link
                key={project.title}
                href={`/projects/${project.slug}`}
                scroll={false}
                className="flex items-center justify-between gap-2.5 rounded-lg border border-white/[0.04] bg-white/[0.02] p-1.5 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-150 group/row"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="relative size-7 rounded-md overflow-hidden border border-white/10 shrink-0">
                    <Image
                      src={getProjectCover(project.cover)}
                      alt={project.title}
                      fill
                      className="object-cover group-hover/row:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-[11px] font-semibold text-white truncate leading-tight group-hover/row:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-[9px] text-zinc-400 font-normal truncate mt-0.5">
                      {project.slug === "modular-mart"
                        ? "Microservices Architecture & Outbox"
                        : project.slug === "enterprise-knowledgebase"
                          ? "Agentic RAG Distributed Workspace"
                          : project.slug === "quick-chat"
                            ? "Realtime Messaging & WebSockets"
                            : (project.role?.[0] || "Full-stack System")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0 text-zinc-400 group-hover/row:text-white">
                  <span className="text-[8px] font-mono bg-white/[0.04] px-1 py-0.5 rounded border border-white/5">
                    {project.year}
                  </span>
                  <ArrowUpRight size={11} className="text-zinc-500 group-hover/row:text-primary transition-all duration-150 group-hover/row:translate-x-0.5 group-hover/row:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer with Explore Archive Button */}
        <div className="pt-1 border-t border-white/[0.05] flex items-center justify-between">
          <span className="text-[8px] font-mono text-zinc-400">
            Click to open case study
          </span>
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-zinc-200 hover:text-white transition-all duration-150 active:scale-[0.97] cursor-pointer"
          >
            <FolderGit2 size={12} className="text-primary" />
            <span>Archive ({allProjects.length})</span>
          </button>
        </div>

        {/* Main Gallery Dialog (Untouched markdown dialog functionality) */}
        <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
          <DialogContent className="max-h-[95vh] max-w-(--breakpoint-xl) overflow-y-auto border border-white/10 bg-[#090a0f] md:max-w-[85vw] lg:max-w-[75vw] p-0 px-6 lg:px-8 rounded-2xl shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#090a0f]/90 backdrop-blur-xl py-4 lg:py-6 border-b border-white/[0.08]">
              <DialogTitle className="text-2xl font-bold text-white tracking-tight">
                Project Archive
              </DialogTitle>
              <DialogDescription className="text-xs text-zinc-400 mt-1 font-mono uppercase tracking-wider">
                Curated index of distributed systems, production web apps, and engineering prototypes.
              </DialogDescription>
            </div>

            <div className="flex flex-col gap-6 py-6 lg:gap-8 lg:py-8">
              {sortedYears.map((year) => (
                <div key={year} className="space-y-4 lg:space-y-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-mono font-bold text-primary/60 tracking-wider">
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
                        >
                          <Link
                            href={`/projects/${project.slug}`}
                            scroll={false}
                            onClick={() => setGalleryOpen(false)}
                            className="block"
                          >
                            <ProjectCard
                              project={project}
                              priority={index < 3}
                            />
                          </Link>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProjectsGallery;
