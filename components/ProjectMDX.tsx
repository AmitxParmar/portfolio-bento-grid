"use client";

import React from "react";
import { MDXContent } from "@content-collections/mdx/react";
import * as MdxComponents from "@/components/mdx-components";

interface ProjectMDXProps {
  code: string;
}

export function ProjectMDX({ code }: Readonly<ProjectMDXProps>) {
  return (
    <MDXContent
      code={code}
      components={MdxComponents as any}
    />
  );
}
