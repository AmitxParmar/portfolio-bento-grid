"use client";

import React from "react";
import { MDXContent } from "@content-collections/mdx/react";
import * as MdxComponents from "@/components/mdx-components";

interface BlogMDXProps {
  code: string;
}

export default function BlogMDX({ code }: Readonly<BlogMDXProps>) {
  return (
    <MDXContent
      code={code}
      components={MdxComponents as any}
    />
  );
}
