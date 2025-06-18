import React, { useState } from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { ChevronsRight, Github, Globe } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Project } from "@/types/general";

const ProjectCard = ({
  project: {
    name,
    description,
    skills,
    images,
    repositoryLink,
    liveLink,
    features,
  },
}: {
  project: Project;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <div
          className="group h-auto min-h-[430px] cursor-pointer overflow-hidden rounded-xl border bg-cardBg transition-all duration-300 hover:scale-105 hover:border-gray-600 sm:h-[430px]"
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
            <h3 className="mb-2 text-base font-semibold capitalize text-white sm:text-lg">
              {name}
            </h3>
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
      <DrawerContent className="h-[90vh] bg-iconCard">
        <div className="m-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border bg-cardBg p-4 sm:p-8">
            <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="text-left">
                  <p className="mb-4 text-base leading-relaxed text-blue-200 sm:text-lg">
                    {description}
                  </p>
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex cursor-pointer items-center text-sm text-white transition-colors hover:text-blue-200 sm:text-base"
                    >
                      <span className="mr-2">View Project</span>
                      <svg
                        className="size-3 sm:size-4"
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
                    </a>
                  )}
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-600 bg-gray-800">
                  <div className="flex items-center space-x-2 bg-gray-900 px-3 py-1.5 sm:px-4 sm:py-2">
                    <div className="flex space-x-1">
                      <div className="size-2 rounded-full bg-red-500 sm:size-3"></div>
                      <div className="size-2 rounded-full bg-yellow-500 sm:size-3"></div>
                      <div className="size-2 rounded-full bg-green-500 sm:size-3"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-gray-400 sm:text-sm">
                        {name}
                      </span>
                    </div>
                  </div>

                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={images[0]}
                      alt={`${name} project preview`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="border-l-4 border-blue-400 pl-3 sm:pl-4">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {name}
                  </h3>
                </div>

                {features && (
                  <div className="ml-3 h-64 space-y-2 overflow-y-scroll sm:ml-4 sm:h-96 sm:space-y-3">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-2 text-xs sm:space-x-3 sm:text-sm"
                      >
                        <ChevronsRight
                          size={14}
                          className="shrink-0 text-blue-600 sm:size-4"
                        />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-base font-semibold text-white sm:text-lg">
                    Technologies Used
                  </h4>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-1.5 rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 sm:space-x-2 sm:px-3 sm:py-2"
                      >
                        <Image
                          src={`https://cdn.simpleicons.org/${skill}/white`}
                          alt={skill}
                          height={20}
                          width={20}
                          className="size-4 shrink-0 sm:size-5"
                        />
                        <span className="text-xs font-medium capitalize text-gray-300 sm:text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectCard;
