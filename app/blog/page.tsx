"use client";

import { useState, useMemo } from "react";
import { allPosts, type Post } from "content-collections";
import BlogCard from "@/components/Blog/BlogCard";
import { Search, Sparkles, BookOpen } from "lucide-react";
import { motion } from "motion/react";

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allPosts.forEach((post) => {
      post.tags?.forEach((tag) => tags.add(tag));
    });
    return ["All", ...Array.from(tags)];
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return allPosts
      .filter((post) => post.published !== false)
      .filter((post) => {
        const matchesTag =
          selectedTag === "All" || (post.tags && post.tags.includes(selectedTag));
        const matchesQuery =
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesTag && matchesQuery;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchQuery, selectedTag]);

  return (
    <div className="min-h-screen bg-black text-darkText pt-24 sm:pt-28 pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-4 mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
          <BookOpen size={14} />
          <span>Technical Essays & Field Notes</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tightest leading-tight">
          Writings & Architecture<span className="text-primary">.</span>
        </h1>
        <p className="text-base sm:text-lg text-lightText/80 leading-relaxed font-medium">
          Deep dives into event-driven microservices, distributed data patterns, resilient backend topologies, and modern UI engineering.
        </p>
      </motion.div>

      {/* Controls: Search + Tag Filters */}
      <div className="space-y-6 mb-12">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-lightText/50" />
          <input
            type="text"
            placeholder="Search articles by title, topic, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-lightText/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all backdrop-blur-md"
          />
        </div>

        {/* Tag Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {allTags.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-primary text-white shadow-[0_0_15px_-3px_rgba(168,85,247,0.4)]"
                    : "bg-white/5 border border-white/5 text-lightText/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, idx) => (
            <BlogCard
              key={post.slug}
              post={post}
              featured={idx === 0 && selectedTag === "All" && searchQuery === ""}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-white/5 rounded-3xl bg-white/[0.01]">
          <Sparkles className="size-8 text-primary/40 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No articles found</h3>
          <p className="text-sm text-lightText/60">
            Try adjusting your search query or switching to another category.
          </p>
        </div>
      )}
    </div>
  );
}
