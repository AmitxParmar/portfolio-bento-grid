import React from "react";
import Image from "next/image";
import {
  AlertTriangle,
  ChevronsRight,
  ExternalLink,
  Github,
} from "lucide-react";
import { Project } from "@/types/general";

interface ProjectDialogProps {
  project: Project;
}

const ProjectDialog = ({ project }: ProjectDialogProps) => {
  const {
    name,
    description,
    skills,
    images,
    repositoryLink,
    liveLink,
    features,
  } = project;

  return (
    <div className="m-auto max-w-6xl overflow-y-auto px-4 sm:px-6">
      <div className="rounded-2xl border bg-cardBg p-4 sm:p-8">
        <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-gray-600 bg-gray-800">
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
            <div className="text-left">
              <p className="mb-4 text-xs leading-5 text-blue-200 lg:text-sm xl:text-base">
                {description}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="inline-flex cursor-pointer items-center rounded-full bg-iconBg px-4 py-1 text-sm text-white transition-colors hover:text-blue-200 sm:text-base">
                  {liveLink ? (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <span className="mr-2">Live Project</span>
                      <ExternalLink size="19" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-semibold text-red-300">
                      <AlertTriangle size="18" /> No live links available!!
                    </span>
                  )}
                </div>
                {repositoryLink && (
                  <a
                    href={repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center rounded-full bg-iconBg px-4 py-1 text-sm text-white transition-colors hover:text-blue-200 sm:text-base"
                  >
                    <Github size="19" />
                    <span className="ml-1 mr-2">Repository</span>
                    <ExternalLink size="19" />
                  </a>
                )}
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
              <div className="ml-3 h-64 space-y-2 overflow-y-auto sm:ml-4 sm:h-96 sm:space-y-3">
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
              <div className="flex flex-row flex-wrap gap-2">
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
  );
};

export default ProjectDialog;
