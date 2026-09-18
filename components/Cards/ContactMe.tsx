"use client";

import { Crown, Mail, Phone, Sparkles, Github, Linkedin, Instagram, Send, Check } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { motion } from "motion/react";
import { useState } from "react";

const ContactMe = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "amitxparmar.dev@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    window.location.href = `mailto:${emailAddress}?subject=Engineering%20Opportunity`;
  };

  return (
    <motion.div 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="col-span-5 flex flex-col min-h-[340px] lg:min-h-0 flex-1 rounded-[2.5rem] border-premium card-gradient-green p-6 lg:p-4 2xl:p-8 hover-glow-purple transition-all duration-500 group/contact overflow-hidden relative"
    >
      {/* Background Sparkle Decoration */}
      <div className="absolute -left-4 -bottom-4 opacity-5 group-hover/contact:scale-110 group-hover/contact:-rotate-12 transition-transform duration-1000">
        <Sparkles size={140} className="text-primary" />
      </div>

      <div className="flex flex-col items-center justify-center gap-5 lg:gap-2 2xl:gap-6 relative z-10 mt-auto">
        <div className="relative group/crown">
          {/* Pulsing Aura */}
          <div className="absolute -inset-6 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover/crown:opacity-100 transition-opacity duration-700 animate-pulse" />
          <div className="relative rounded-full bg-white/3 p-4 lg:p-3 2xl:p-5 border-premium shadow-2xl transition-transform duration-500 group-hover/crown:scale-110 group-hover/crown:rotate-6">
            <Crown size={36} className="fill-primary text-primary lg:size-6 2xl:size-12" />
            
            {/* Status indicator on crown */}
            <div className="absolute top-0 right-0 flex items-center justify-center translate-x-1 -translate-y-1">
              <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-primary/40 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary border border-bg" />
            </div>
          </div>
        </div>

        <div className="space-y-1.5 text-center lg:space-y-1 2xl:space-y-3">
          <h3 className="text-2xl font-black text-white tracking-tightest lg:text-base 2xl:text-3xl leading-none">
            Let&apos;s Work Together
          </h3>
          <p className="text-[11px] font-black text-lightText/60 uppercase tracking-[0.2em] lg:text-[9px] 2xl:text-xs group-hover/contact:text-primary/70 transition-colors">
            Available for new opportunities
          </p>
        </div>
      </div>

      <div className="mt-8 grid w-full gap-3 sm:mt-auto lg:mt-auto lg:gap-2 2xl:mt-auto 2xl:gap-4 relative z-10">
        
        {/* Social Icons integrated */}
        <div className="flex items-center justify-center gap-2 mb-1 lg:mb-0">
          {[
            { icon: Github, href: "https://github.com/AmitxParmar", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/AmitxParmar", label: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com/AmitxParmar", label: "Instagram" },
            { icon: Send, href: "https://t.me/AmitxParmar", label: "Telegram" },
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.label}
              className="p-2.5 lg:p-2 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all text-white/70 hover:text-white"
            >
              <social.icon className="size-4 lg:size-3.5 2xl:size-5" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 w-full">
          <InteractiveHoverButton 
            onClick={handleCopyEmail}
            className="flex h-12 lg:h-10 w-full items-center justify-center rounded-xl border border-white/5 bg-white/3 hover:bg-primary transition-all duration-300 shadow-inner group/btn"
          >
            <div className="flex items-center justify-center gap-2">
              {copied ? (
                <>
                  <Check className="text-emerald-400 size-4" />
                  <span className="text-[11px] lg:text-[9px] font-black uppercase tracking-widest text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="text-primary group-hover/btn:text-white transition-colors" size={14} />
                  <span className="text-[11px] lg:text-[9px] font-black uppercase tracking-widest group-hover/btn:text-white transition-colors">Email</span>
                </>
              )}
            </div>
          </InteractiveHoverButton>
          <InteractiveHoverButton 
            href={`mailto:${emailAddress}?subject=Engineering%20Discussion`}
            className="flex h-12 lg:h-10 w-full items-center justify-center rounded-xl border border-white/10 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)] group/btn"
          >
            <div className="flex items-center justify-center gap-2">
              <Phone className="text-white" size={14} />
              <span className="text-[11px] lg:text-[9px] font-black uppercase tracking-widest text-white">Inquire</span>
            </div>
          </InteractiveHoverButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
