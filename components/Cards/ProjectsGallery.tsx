import { projects } from "@/lib/projects";
import { Briefcase } from "lucide-react";
import React from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";

type Props = {};

const ProjectsGallery = (props: Props) => {
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
          <InteractiveHoverButton className="absolute inset-x-14 bottom-14 mx-auto flex justify-center">
            View Works
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
