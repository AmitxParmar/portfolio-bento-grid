"use client";
import { projects } from "@/lib/projects";
import { Briefcase } from "lucide-react";
import React, { useState } from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProjectCard from "./ProjectCard";

const ProjectsGallery = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" col-span-4 row-span-3 rounded-lg border border-iconBg bg-cardBg p-6">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-md mb-2 flex items-center gap-2 text-lightText">
          <Briefcase className="text-primary" /> Projects
        </h4>
        <h3 className="text-xl text-darkText">Work Gallery</h3>
      </div>
      <div className="relative size-full">
        <div className="relative">
          <Marquee>
            {projects?.map((project) => (
              <Image
                key={project.name}
                alt={`${project.name} project image`}
                height={150}
                width={300}
                src={project?.images[0]}
                className="rounded-xl"
              />
            ))}
          </Marquee>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cardBg to-transparent" />
        </div>
        <div className="w-full">
          <InteractiveHoverButton
            onClick={() => void setOpen((prev) => !prev)}
            className="absolute inset-x-14 bottom-14 mx-auto flex justify-center bg-primary-foreground text-darkText shadow-lg"
          >
            View Works
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="h-full max-w-screen-xl overflow-y-auto md:max-w-[80vw] border-none lg:max-w-[70vw]">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
                    <ProjectCard project={project} />
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
