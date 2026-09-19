"use client";

import Link from "next/link";
import { BookOpen, ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { allPosts } from "content-collections";

export default function LatestWritings() {
  const recentPosts = allPosts
    .filter((p) => p.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <div className="bezel-outer w-full">
      <div className="bezel-inner !p-3.5 gap-2.5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-1.5">
            <BookOpen className="size-3.5 text-primary" />
            <h3 className="text-xs font-bold text-white tracking-tight">
              Technical Essays
            </h3>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-[9px] font-mono font-medium uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-150 group/link"
          >
            <span>All</span>
            <ArrowRight size={10} className="group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Post links */}
        <div className="flex flex-col gap-1.5 py-0.5">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group/item flex flex-col gap-0.5 p-2 rounded-lg border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-150"
            >
              <div className="flex items-center justify-between gap-2 text-[8px] font-mono text-zinc-400">
                <span className="flex items-center gap-1">
                  <Clock size={9} className="text-primary/70" />
                  {post.readingTime}
                </span>
                <span className="tabular-nums">
                  {post.date}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-[11px] font-medium text-white group-hover/item:text-primary transition-colors line-clamp-1 leading-snug">
                  {post.title}
                </h4>
                <ArrowUpRight size={11} className="text-zinc-500 group-hover/item:text-primary shrink-0 opacity-0 group-hover/item:opacity-100 transition-all duration-150 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-1 border-t border-white/[0.05] flex items-center justify-between text-[8px] font-mono text-zinc-500">
          <span>Architectural writeups</span>
          <span className="text-zinc-400">Published Articles</span>
        </div>
      </div>
    </div>
  );
}
