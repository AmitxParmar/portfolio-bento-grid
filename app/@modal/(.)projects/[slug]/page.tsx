import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import ProjectDetailsDialog from "@/components/projects/ProjectDetailsDialog";

interface ProjectModalProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectModalPage({
  params,
}: Readonly<ProjectModalProps>) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsDialog project={project} />;
}
