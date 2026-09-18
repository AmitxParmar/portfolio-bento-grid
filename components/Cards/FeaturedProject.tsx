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
      scroll={false}
      className="group relative flex flex-1 flex-col overflow-hidden rounded-xl border border-white/5 card-gradient-blue transition-all hover:border-primary/50"
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
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-md border border-white/10">
          <Star size={12} className="fill-primary" />
          Featured Project
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end p-6 2xl:p-8">
        <h4 className="mb-1 text-[10px] font-black text-primary uppercase tracking-[0.2em] opacity-80">Featured Project</h4>
        <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors tracking-tightest">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[11px] font-medium text-white/50 leading-relaxed tracking-wide">
          Cloud-Native E-Commerce Platform with 5 Microservices.
        </p>
        
        <div className="mt-4 flex flex-wrap gap-1.5">
          {["NestJS", "RabbitMQ", "Redis", "Postgres", "Kong", "OTel"].map((t) => (
            <span key={t} className="text-[9px] bg-white/5 px-2 py-0.5 rounded-md text-white/70 border border-white/5 font-black uppercase tracking-tighter">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
          View Architecture <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
