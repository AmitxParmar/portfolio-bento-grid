import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { ProjectDetails } from "@/components/projects/ProjectDetails";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Readonly<ProjectPageProps>) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-black text-darkText pb-32 overflow-x-hidden">
      {/* Sticky Progress/Back Bar */}
      <div className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm font-bold text-lightText hover:text-primary transition-colors group"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-lightText/40">Reading:</span>
            <span className="text-sm font-bold text-darkText truncate max-w-[200px]">{project.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-16 w-full min-w-0 overflow-hidden">
        <ProjectDetails
          project={project}
          className="prose-pre:bg-black prose-pre:border-white/5"
        />

        {/* Footer Navigation */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-darkText">Liked this project?</h4>
            <p className="text-sm text-lightText">Check out more of my work or get in touch.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" className="rounded-full border-white/5 px-6">
              <Link href="/">Browse All Projects</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-6">
              <Link href="/#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}