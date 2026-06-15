// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import rehypePrettyCode from "rehype-pretty-code";
var projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.coerce.string()
      })
    ).optional(),
    featuredMetrics: z.record(z.string(), z.any()).optional(),
    featured: z.boolean().optional(),
    year: z.coerce.string().optional(),
    role: z.array(z.string()).optional(),
    github: z.string().optional(),
    live: z.string().optional(),
    demo: z.string().optional(),
    docs: z.string().optional(),
    cover: z.string().optional(),
    architecture: z.string().optional(),
    apiEndpoints: z.array(
      z.object({
        method: z.string(),
        path: z.string(),
        description: z.string()
      })
    ).optional(),
    status: z.string().optional(),
    content: z.string()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "github-dark"
          }
        ]
      ]
    });
    return {
      ...document,
      slug: document._meta.path,
      mdx
    };
  }
});
var content_collections_default = defineConfig({
  content: [projects]
});
export {
  content_collections_default as default
};
