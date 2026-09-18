"use client";

import { Project } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import * as MdxComponents from "@/components/mdx-components";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className="prose prose-invert prose-primary max-w-none w-full max-w-full min-w-0 overflow-hidden prose-pre:bg-cardBg prose-pre:border prose-pre:border-iconBg prose-img:rounded-3xl prose-headings:scroll-mt-24 prose-p:my-3 prose-ul:my-2 prose-li:my-0.5 prose-hr:my-8">
      <MDXContent 
        code={project.mdx} 
        components={{
          ...MdxComponents,
        }}
      />
    </div>
  );
};

export default ProjectContent;
