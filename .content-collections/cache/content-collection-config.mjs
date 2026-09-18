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
var posts = defineCollection({
  name: "posts",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional().default([]),
    cover: z.string().optional(),
    published: z.boolean().optional().default(true),
    featured: z.boolean().optional().default(false),
    author: z.object({
      name: z.string().default("Amit Parmar"),
      role: z.string().default("Full-stack Engineer"),
      avatar: z.string().default("/profile-pic.jpg")
    }).optional().default({
      name: "Amit Parmar",
      role: "Full-stack Engineer",
      avatar: "/profile-pic.jpg"
    }),
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
    const words = document.content.split(/\s+/g).filter(Boolean).length;
    const readingMinutes = Math.max(1, Math.ceil(words / 200));
    return {
      ...document,
      slug: document._meta.path,
      readingTime: `${readingMinutes} min read`,
      mdx
    };
  }
});
var content_collections_default = defineConfig({
  content: [projects, posts]
});
export {
  content_collections_default as default
};
