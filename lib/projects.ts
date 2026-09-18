import { allProjects, type Project } from "content-collections";

export function getAllProjects(): Project[] {
  return allProjects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return [
    allProjects.find((p) => p.slug === "enterprise-knowledgebase" || p.title.toLowerCase().includes("agentic")),
    allProjects.find((p) => p.slug === "modular-mart" || p.title.toLowerCase().includes("modular mart")),
  ].filter(Boolean) as Project[];
}
