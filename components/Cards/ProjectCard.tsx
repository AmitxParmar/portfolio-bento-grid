import React, { useState } from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { ChevronsRight, Github, Globe } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

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
          className="group h-[430px] cursor-pointer overflow-hidden rounded-xl border bg-cardBg transition-all duration-300 hover:scale-105 hover:border-gray-600"
          onClick={handleDrawerOpen}
        >
          <div className="relative h-48 overflow-hidden">
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

          <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold capitalize text-white">
              {name}
            </h3>
            <p className="mb-3 line-clamp-2 text-sm capitalize text-gray-400">
              {description}
            </p>

            <div className="mb-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="rounded-md bg-iconBg px-2 py-1 text-xs capitalize text-blue-300"
                >
                  <Image
                    src={`https://cdn.simpleicons.org/${skill}/white`}
                    alt={skill}
                    height={16}
                    width={16}
                    className="mr-2 size-4"
                  />{" "}
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-blue-400 transition-colors group-hover:text-blue-300">
                <span>View Project</span>
                <svg
                  className="ml-1 size-4 transition-transform group-hover:translate-x-1"
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
              <div className="flex space-x-2">
                {repositoryLink && (
                  <a
                    href={repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-gray-400 transition-colors hover:text-white"
                  >
                    <Github />
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-gray-400 transition-colors hover:text-white"
                  >
                    <Globe />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-[90vh] bg-iconCard">
        <div className="m-auto max-w-6xl">
          <div className="rounded-2xl border bg-cardBg p-8">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="text-left">
                  <p className="mb-4 text-lg leading-relaxed text-blue-200">
                    {description}
                  </p>
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex cursor-pointer items-center text-white transition-colors hover:text-blue-200"
                    >
                      <span className="mr-2">View Project</span>
                      <svg
                        className="size-4"
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
                  <div className="flex items-center space-x-2 bg-gray-900 px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="size-3 rounded-full bg-red-500"></div>
                      <div className="size-3 rounded-full bg-yellow-500"></div>
                      <div className="size-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-sm text-gray-400">{name}</span>
                    </div>
                  </div>

                  <div className="relative h-[400px]">
                    <Image
                      src={images[0]}
                      alt={`${name} project preview`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="text-2xl font-bold text-white">{name}</h3>
                </div>

                <div className="space-y-3 text-gray-300">
                  <p>{description}</p>
                </div>

                {features && (
                  <div className="ml-4 space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <ChevronsRight className="text-blue-600" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">
                    Technologies Used
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center space-x-2 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2"
                      >
                        <Image
                          src={`https://cdn.simpleicons.org/${skill}/white`}
                          alt={skill}
                          height={20}
                          width={20}
                          className="shrink-0"
                        />
                        <span className="text-sm font-medium capitalize text-gray-300">
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
