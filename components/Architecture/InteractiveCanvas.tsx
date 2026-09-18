"use client";

import React, { useState, useRef } from "react";
import { Maximize2, ExternalLink, MousePointerClick, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface InteractiveCanvasProps {
  src: string;
  title: string;
  description?: string;
  badge?: string;
  height?: string;
  children?: React.ReactNode;
}

export const InteractiveCanvas = ({
  src,
  title,
  description,
  badge = "Interactive Canvas",
  height = "640px",
  children,
}: InteractiveCanvasProps) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const resetIframe = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIframeKey((prev) => prev + 1);
    setIsInteracting(false);
  };

  return (
    <div className="my-16 space-y-6 w-full max-w-full min-w-0">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20 text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5"
            >
              {badge}
            </Badge>
          </div>
          <h3 className="text-2xl lg:text-3xl font-black text-darkText tracking-tight m-0!">
            {title}
          </h3>
          {description && (
            <p className="text-sm lg:text-base text-lightText max-w-3xl leading-relaxed m-0!">
              {description}
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 px-3 text-xs font-semibold rounded-xl border-iconBg bg-cardBg hover:bg-iconBg text-darkText gap-1.5 cursor-pointer"
              >
                <Maximize2 size={14} className="text-primary" />
                Fullscreen
              </Button>
            </DialogTrigger>
            <DialogContent className="fixed inset-0 top-0 left-0 translate-x-0 translate-y-0 w-screen h-[100dvh] max-w-none sm:max-w-none m-0 p-0 rounded-none border-0 bg-black flex flex-col gap-0 z-50 ring-0 outline-none">
              <DialogHeader className="h-16 px-6 pr-14 border-b border-iconBg flex flex-row items-center justify-between shrink-0 bg-cardBg/90 backdrop-blur-md">
                <div className="space-y-0.5 text-left">
                  <DialogTitle className="text-base sm:text-lg font-bold text-darkText">
                    {title}
                  </DialogTitle>
                  <p className="text-xs text-lightText m-0!">
                    Macro Architecture Explorer · Fullscreen View
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="h-8 px-3 text-xs rounded-lg border-iconBg bg-cardBg hover:bg-iconBg gap-1.5 text-lightText hover:text-darkText"
                  >
                    <a href={src} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={13} />
                      <span className="hidden sm:inline">Open Standalone</span>
                    </a>
                  </Button>
                </div>
              </DialogHeader>
              <div className="flex-1 w-full h-full min-h-0 relative bg-black">
                <iframe
                  src={src}
                  title={title}
                  className="w-full h-full border-0"
                  allow="fullscreen"
                />
              </div>
            </DialogContent>
          </Dialog>

          <Button
            variant="outline"
            size="sm"
            asChild
            className="h-9 px-3 text-xs font-semibold rounded-xl border-iconBg bg-cardBg hover:bg-iconBg text-lightText hover:text-darkText gap-1.5 cursor-pointer"
          >
            <a href={src} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              <span className="hidden sm:inline">New Tab</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Frame Container with Scroll-Guard */}
      <div
        ref={containerRef}
        onClick={() => setIsInteracting(true)}
        className="relative group w-full rounded-3xl border border-iconBg bg-cardBg/40 overflow-hidden shadow-2xl transition-all duration-300"
        style={{ height }}
      >
        <iframe
          key={iframeKey}
          src={src}
          title={title}
          className={`w-full h-full border-0 transition-opacity duration-300 ${
            isInteracting ? "pointer-events-auto" : "pointer-events-none"
          }`}
          allow="fullscreen"
        />

        {/* Scroll Guard Overlay (prevents accidental wheel interception) */}
        {!isInteracting && (
          <div className="absolute inset-0 bg-black/40 hover:bg-black/20 backdrop-blur-[1px] hover:backdrop-blur-none transition-all flex items-center justify-center cursor-pointer group-hover:border-primary/40">
            <div className="px-5 py-2.5 rounded-full bg-black/90 border border-white/10 text-xs font-bold text-darkText shadow-2xl flex items-center gap-2.5 transform group-hover:scale-105 transition-transform">
              <MousePointerClick size={15} className="text-primary animate-pulse" />
              <span>Click to interact & explore topology</span>
            </div>
          </div>
        )}

        {/* Active Interaction Bar */}
        {isInteracting && (
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={resetIframe}
              title="Reset view"
              className="px-3 py-1.5 rounded-xl bg-black/80 hover:bg-black border border-white/10 text-[11px] font-semibold text-lightText hover:text-darkText shadow-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw size={12} />
              Reset View
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsInteracting(false);
              }}
              title="Lock interaction for smooth page scrolling"
              className="px-3 py-1.5 rounded-xl bg-black/80 hover:bg-black border border-white/10 text-[11px] font-semibold text-primary shadow-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Check size={12} />
              Done Interacting
            </button>
          </div>
        )}
      </div>

      {/* Optional Breakdown / Notes */}
      {children && (
        <div className="p-6 rounded-2xl border border-iconBg bg-cardBg/40 text-sm text-lightText leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};
