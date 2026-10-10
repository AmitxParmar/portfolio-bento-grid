import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlogMDX from "@/components/Blog/BlogMDX";
import ReadingProgressBar from "@/components/Blog/ReadingProgressBar";
import Image from "next/image";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} - Amit Parmar`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Amit Parmar"],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Readonly<BlogPostPageProps>) {
  const { slug } = await params;
  const postIndex = allPosts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = allPosts[postIndex];
  const nextPost = postIndex > 0 ? allPosts[postIndex - 1] : null;
  const prevPost = postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null;

  return (
    <article className="min-h-screen bg-black text-darkText pb-32">
      <ReadingProgressBar />

      {/* Sticky Back & Context Bar */}
      <div className="sticky top-0 z-40 w-full bg-black/80 backdrop-blur-md border-b border-white/5 pt-16">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-xs font-bold text-lightText hover:text-primary transition-colors group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Writings
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs text-lightText/60 truncate max-w-sm">
            <span className="font-bold uppercase text-[9px] tracking-wider text-lightText/40">Reading:</span>
            <span className="truncate font-semibold text-white/80">{post.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* Article Header */}
        <header className="space-y-6 pb-10 border-b border-white/5 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tightest leading-[1.1]">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-lightText leading-relaxed font-medium">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative size-10 rounded-full overflow-hidden border border-white/10 bg-linear-to-br from-primary/20 to-zinc-900 flex items-center justify-center shrink-0">
                {post.author?.avatar && post.author.avatar !== "/profile-pic.jpg" ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author?.name || "Author"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-xs font-bold font-mono text-primary">AP</span>
                )}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-none">
                  {post.author?.name || "Amit Parmar"}
                </h4>
                <p className="text-xs text-lightText/50 font-medium mt-0.5">
                  {post.author?.role || "Software Engineer"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-lightText/60 font-semibold">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-primary" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-primary" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </header>

        {/* MDX Article Content */}
        <div className="prose prose-invert prose-primary max-w-none min-w-0 overflow-hidden prose-pre:bg-black/90 prose-pre:border prose-pre:border-white/10 prose-headings:scroll-mt-24">
          <BlogMDX code={post.mdx} />
        </div>

        {/* Post Footer & Next/Prev Navigation */}
        <footer className="mt-20 pt-12 border-t border-white/5 space-y-12">
          {/* Author Box */}
          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative size-16 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-linear-to-br from-primary/20 via-zinc-900 to-zinc-950 flex items-center justify-center">
              {post.author?.avatar && post.author.avatar !== "/profile-pic.jpg" ? (
                <Image
                  src={post.author.avatar}
                  alt="Amit Parmar"
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-xl font-bold font-mono text-primary">AP</span>
              )}
            </div>
            <div className="space-y-2 text-center sm:text-left flex-1">
              <h4 className="text-lg font-bold text-white">Written by Amit Parmar</h4>
              <p className="text-sm text-lightText/80 leading-relaxed">
                Full-stack developer building distributed systems, event-driven architectures, and high-performance web applications.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 justify-center sm:justify-start">
                <Button asChild size="sm" variant="outline" className="rounded-full border-white/10 text-xs">
                  <Link href="/#contact">Get In Touch</Link>
                </Button>
                <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-xs">
                  <Link href="/#projects">Explore Projects</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Adjacent Articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-primary/30 transition-all flex flex-col gap-1 group text-left"
              >
                <span className="text-[10px] font-black uppercase tracking-wider text-lightText/40">Previous Article</span>
                <span className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                  {prevPost.title}
                </span>
              </Link>
            ) : <div />}

            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-primary/30 transition-all flex flex-col gap-1 group text-right sm:ml-auto w-full"
              >
                <span className="text-[10px] font-black uppercase tracking-wider text-lightText/40">Next Article</span>
                <span className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                  {nextPost.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        </footer>
      </div>
    </article>
  );
}
