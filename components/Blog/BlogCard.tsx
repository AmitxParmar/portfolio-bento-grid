"use client";

import Link from "next/link";
import { Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { type Post } from "content-collections";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import Image from "next/image";

interface BlogCardProps {
  post: Post;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: Readonly<BlogCardProps>) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group relative flex flex-col justify-between rounded-3xl border-premium bg-black/40 p-6 md:p-8 hover-glow-purple transition-all duration-500 overflow-hidden ${
        featured ? "md:col-span-2 card-gradient-purple" : "card-gradient-blue"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
        <Sparkles size={160} className="text-primary" />
      </div>

      <div className="relative z-10 space-y-4">
        {/* Metadata row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {post.tags?.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase font-bold tracking-wider py-0.5"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs text-lightText/60 font-semibold">
            <span className="flex items-center gap-1">
              <Calendar size={13} className="text-primary/70" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} className="text-primary/70" />
              {post.readingTime}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <Link href={`/blog/${post.slug}`}>
            <h3 className={`font-black text-white tracking-tight group-hover:text-primary transition-colors ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}>
              {post.title}
            </h3>
          </Link>
          <p className="text-sm text-lightText/80 leading-relaxed line-clamp-3 font-medium">
            {post.description}
          </p>
        </div>
      </div>

      {/* Footer Author & CTA */}
      <div className="relative z-10 mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative size-8 rounded-full overflow-hidden border border-white/10">
            <Image
              src={post.author?.avatar || "/profile-pic.jpg"}
              alt={post.author?.name || "Author"}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white leading-none">
              {post.author?.name || "Amit Parmar"}
            </span>
            <span className="text-[10px] text-lightText/50 font-medium">
              {post.author?.role || "Software Engineer"}
            </span>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-primary group-hover:translate-x-1 transition-transform"
        >
          <span>Read</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}
