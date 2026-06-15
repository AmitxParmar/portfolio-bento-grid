import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { allProjects } from "content-collections";

const FeaturedProject = () => {
  const project = allProjects.find((p) => p.featured) || allProjects[0];

  if (!project) return null;

  return (
    <Link 
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-iconBg bg-cardBg transition-all hover:border-primary/50"
    >
      <div className="relative h-2/3 w-full overflow-hidden">
        {project.cover && (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-cardBg via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-md border border-primary/20">
          <Star size={12} className="fill-primary" />
          Featured Project
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end p-6">
        <h4 className="mb-1 text-sm font-medium text-lightText uppercase tracking-tight">Case Study</h4>
        <h3 className="text-2xl font-bold text-darkText group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-lightText">
          {project.description}
        </p>
        
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
          Read Engineering Story <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
