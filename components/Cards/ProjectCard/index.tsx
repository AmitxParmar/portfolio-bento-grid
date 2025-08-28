import React, { useState } from "react";
import { Badge } from "../../ui/badge";
import Image from "next/image";
import { Github, Globe } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Project } from "@/types/general";
import { formatDateAndTimeAgo } from "@/lib/utils";
import ProjectDialog from "./ProjectDialog";

const ProjectCard = ({
  project: {
    name,
    description,
    skills,
    images,
    repositoryLink,
    liveLink,
    features,
    completionDate,
  },
}: {
  project: Project;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use formatDateAndTimeAgo if completionDate is present
  const dateInfo = completionDate ? formatDateAndTimeAgo(completionDate) : null;

  const handleDrawerOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <div
          className="group h-auto max-h-[40px] min-h-fit cursor-pointer overflow-hidden rounded-xl border bg-cardBg pb-2 transition-all duration-300 hover:scale-105 hover:border-gray-600 sm:h-[430px]"
          onClick={handleDrawerOpen}
        >
          <div className="relative h-40 overflow-hidden sm:h-48">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={images[0]}
                alt={`${name} project cover image`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>

          <div className="p-3 sm:p-4">
            <h3 className="mb-1 text-base font-semibold capitalize text-white sm:text-lg">
              {name}
            </h3>
            {dateInfo && (
              <div className="mb-2 flex items-center gap-2 text-[11px] text-blue-300 sm:text-xs">
                <span>{dateInfo.formattedDate}</span>
                <span className="text-gray-400">•</span>
                <span>{dateInfo.timeAgo}</span>
              </div>
            )}
            <p className="mb-3 line-clamp-2 text-xs capitalize text-gray-400 sm:text-sm">
              {description}
            </p>

            <div className="mb-3 flex flex-wrap gap-1.5 sm:gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="rounded-md bg-iconBg px-1.5 py-0.5 text-[10px] capitalize text-blue-300 sm:px-2 sm:py-1 sm:text-xs"
                >
                  <Image
                    src={`https://cdn.simpleicons.org/${skill}/white`}
                    alt={skill}
                    height={16}
                    width={16}
                    className="mr-1 size-3 sm:mr-2 sm:size-4"
                  />{" "}
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs text-blue-400 transition-colors group-hover:text-blue-300 sm:text-sm">
                <span>View Project</span>
                <svg
                  className="ml-1 size-3 transition-transform group-hover:translate-x-1 sm:size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <div className="flex space-x-1 sm:space-x-2">
                {repositoryLink && (
                  <a
                    href={repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-0.5 text-gray-400 transition-colors hover:text-white sm:p-1"
                  >
                    <Github className="size-4 sm:size-5" />
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-0.5 text-gray-400 transition-colors hover:text-white sm:p-1"
                  >
                    <Globe className="size-4 sm:size-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-[95vh] bg-iconCard font-sans">
        <ProjectDialog
          project={{
            name,
            description,
            skills,
            images,
            repositoryLink,
            liveLink,
            features,
            completionDate,
          }}
        />
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectCard;
