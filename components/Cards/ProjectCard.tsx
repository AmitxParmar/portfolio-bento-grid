import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Github, Globe } from "lucide-react";

const ProjectCard = ({
  project: { name, description, skills, images, repositoryLink, liveLink },
}: {
  project: Project;
}) => {
  return (
    <div>
      <div className="group cursor-pointer overflow-hidden rounded-xl border  bg-cardBg transition-all duration-300 hover:scale-105 hover:border-gray-600">
        <div className="relative h-48 overflow-hidden ">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
    </div>
  );
};

export default ProjectCard;
