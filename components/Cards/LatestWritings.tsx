"use client";

import Link from "next/link";
import { BookOpen, ArrowRight, Clock, Sparkles } from "lucide-react";
import { allPosts } from "content-collections";
import { motion } from "motion/react";

export default function LatestWritings() {
  const recentPosts = allPosts
    .filter((p) => p.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="flex flex-1 flex-col rounded-[2rem] border-premium card-gradient-purple p-6 lg:p-4 2xl:p-8 hover-glow-purple transition-all duration-500 group/writings relative overflow-hidden"
    >
      {/* Background Sparkle Decoration */}
      <div className="absolute -right-4 -top-4 opacity-5 group-hover/writings:scale-110 group-hover/writings:rotate-12 transition-transform duration-1000">
        <Sparkles size={140} className="text-primary" />
      </div>

      <div className="mb-4 flex items-center justify-between relative z-10">
        <div>
          <h4 className="text-[10px] mb-1 flex items-center gap-1.5 text-primary font-black uppercase tracking-[0.2em] opacity-80 group-hover/writings:opacity-100 transition-opacity">
            <BookOpen size={12} className="text-primary" /> Writings
          </h4>
          <h3 className="text-xl font-black text-white tracking-tighter lg:text-base 2xl:text-2xl leading-none">
            Technical Essays
          </h3>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-primary hover:text-white transition-colors"
        >
          <span>All Articles</span>
          <ArrowRight size={12} />
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-2.5 relative z-10">
        {recentPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group/item flex flex-col gap-1 p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-primary/30 transition-all"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[9px] font-bold text-lightText/60 flex items-center gap-1">
                <Clock size={10} className="text-primary/70" />
                {post.readingTime}
              </span>
              <span className="text-[9px] font-bold text-lightText/40">
                {post.date}
              </span>
            </div>
            <h4 className="text-xs font-black text-white group-hover/item:text-primary transition-colors line-clamp-1 leading-snug">
              {post.title}
            </h4>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
