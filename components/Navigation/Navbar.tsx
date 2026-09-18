"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Layers, 
  Network, 
  BookOpen, 
  Mail, 
  Download 
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");

  const navItems = [
    { label: "Overview", href: "/", icon: Home, active: pathname === "/" },
    { label: "Projects", href: isBlog ? "/#projects" : "#projects", icon: Layers, active: false },
    { label: "Architecture", href: isBlog ? "/#architecture" : "#architecture", icon: Network, active: false },
    { label: "Blog", href: "/blog", icon: BookOpen, active: isBlog },
    { label: "Contact", href: isBlog ? "/#contact" : "#contact", icon: Mail, active: false },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav 
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/80 transition-all hover:border-white/20"
      >
        {/* Brand identity */}
        <Link 
          href="/" 
          className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-white/10 group"
        >
          <div className="size-7 rounded-full bg-linear-to-tr from-primary to-purple-400 flex items-center justify-center text-[11px] font-black text-white shadow-[0_0_12px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-transform">
            AP
          </div>
          <span className="hidden md:inline text-xs font-black text-white tracking-tight group-hover:text-primary transition-colors">
            Amit Parmar
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold transition-colors",
                  item.active
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-lightText/80 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon size={14} className={item.active ? "text-primary" : "text-lightText/70"} />
                <span className="hidden sm:inline text-[11px] uppercase tracking-wider">{item.label}</span>
                {item.active && (
                  <span className="absolute inset-0 rounded-full bg-primary/10 -z-10 animate-pulse" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-1.5 pl-1.5 sm:pl-2 border-l border-white/10">
          <a
            href="/amitxparmar@github.pdf"
            download
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/5 border border-white/10 text-white/90 hover:bg-primary hover:border-primary hover:text-white transition-all group"
            title="Download Resume"
          >
            <span className="hidden lg:inline">Resume</span>
            <Download size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Status pill */}
          <div 
            className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black uppercase tracking-wider text-emerald-400"
            title="Available for full-time & contracts"
          >
            <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Available</span>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
