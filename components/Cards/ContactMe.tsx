"use client";

import { useState } from "react";
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Clock, 
  MessageSquare,
  ArrowUpRight 
} from "lucide-react";
import { motion } from "motion/react";

const ContactMe = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "amitxparmar.dev@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" className="bezel-outer w-full">
      <div className="bezel-inner !p-3.5 gap-2.5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
          <div className="flex items-center gap-1.5">
            <MessageSquare className="size-3.5 text-primary" />
            <h3 className="text-xs font-bold text-white tracking-tight">
              Direct Channel
            </h3>
          </div>
          
          <div className="flex items-center gap-1.5 text-[8px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            <span className="size-1 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for roles</span>
          </div>
        </div>

        {/* Center Content */}
        <div className="py-0.5 text-center sm:text-left flex flex-col justify-center">
          <p className="text-[11px] text-zinc-300 font-medium leading-snug">
            Seeking senior challenges in distributed systems, backend resilience, or high-craft web.
          </p>
          <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-400 mt-1">
            <Clock size={10} className="text-primary/80" />
            <span>IST (UTC+5:30) • Rapid async turnaround</span>
          </div>
        </div>

        {/* Actions & Socials */}
        <div className="pt-1 flex flex-col gap-1.5 border-t border-white/[0.05]">
          <div className="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-150 active:scale-[0.97] cursor-pointer"
            >
              <div className="flex items-center gap-1.5 truncate">
                {copied ? (
                  <Check className="size-3 text-emerald-400 shrink-0" />
                ) : (
                  <Copy className="size-3 text-zinc-400 group-hover:text-white transition-colors shrink-0" />
                )}
                <span className={`text-[11px] font-medium truncate ${copied ? "text-emerald-400 font-mono" : "text-zinc-300 group-hover:text-white"}`}>
                  {copied ? "Copied!" : "Copy Email"}
                </span>
              </div>
            </button>

            <a
              href={`mailto:${emailAddress}?subject=Engineering%20Opportunity`}
              className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg border border-primary/30 bg-primary/10 hover:bg-primary/20 hover:border-primary/50 transition-all duration-150 active:scale-[0.97]"
            >
              <div className="flex items-center gap-1.5">
                <Mail className="size-3 text-primary shrink-0" />
                <span className="text-[11px] font-medium text-white">Send Email</span>
              </div>
              <ArrowUpRight size={10} className="text-primary/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Social Row */}
          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 px-0.5 pt-0.5">
            <span className="truncate">{emailAddress}</span>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://github.com/AmitxParmar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={12} />
              </a>
              <a
                href="https://linkedin.com/in/AmitxParmar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={12} />
              </a>
              <a
                href="https://t.me/AmitxParmar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <Send size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
