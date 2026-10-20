"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type GalleryImage = { src: string; alt: string; title: string };

interface LightboxProps {
  src?: string;
  alt?: string;
  title?: string;
  images?: GalleryImage[];
  initialIndex?: number;
  onClose: () => void;
}

const Lightbox = ({
  src,
  alt,
  title,
  images,
  initialIndex = 0,
  onClose,
}: LightboxProps) => {
  const activeImages: GalleryImage[] =
    images && images.length > 0
      ? images
      : src
      ? [{ src, alt: alt ?? "", title: title ?? "" }]
      : [];

  const [currentIndex, setCurrentIndex] = useState(
    Math.min(Math.max(0, initialIndex), Math.max(0, activeImages.length - 1))
  );

  const current = activeImages[currentIndex];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : activeImages.length - 1));
  }, [activeImages.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < activeImages.length - 1 ? prev + 1 : 0));
  }, [activeImages.length]);

  useEffect(() => {
    if (activeImages.length <= 1) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImages.length, handlePrev, handleNext]);

  if (!current) return null;

  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-6xl bg-black/90 p-3 sm:p-4 ring-1 ring-white/10 backdrop-blur-md">
        <DialogTitle className="sr-only">{current.title}</DialogTitle>
        <DialogDescription className="sr-only">
          Enlarged preview of {current.title}
        </DialogDescription>

        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-2 right-2 z-20 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <X size={18} />
        </button>

        {activeImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 flex size-9 sm:size-10 items-center justify-center rounded-full bg-black/60 text-white border border-white/15 transition-all hover:bg-black/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 flex size-9 sm:size-10 items-center justify-center rounded-full bg-black/60 text-white border border-white/15 transition-all hover:bg-black/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <div className="relative max-h-[80vh] w-full overflow-auto rounded-lg flex items-center justify-center">
          <Image
            src={current.src}
            alt={current.alt}
            width={1600}
            height={1000}
            className="h-auto max-h-[80vh] w-full rounded-lg object-contain"
            priority
          />
        </div>

        <div className="flex items-center justify-between px-2 pt-2 text-xs font-medium text-white/70">
          <p className="truncate max-w-[85%]">{current.title}</p>
          {activeImages.length > 1 && (
            <span className="shrink-0 text-[11px] font-mono text-white/40">
              {currentIndex + 1} / {activeImages.length}
            </span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const GalleryItem = ({
  img,
  onOpen,
}: {
  img: GalleryImage;
  onOpen: () => void;
}) => (
  <button
    type="button"
    onClick={onOpen}
    className="group block w-full cursor-zoom-in space-y-1.5 text-left transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-xl"
  >
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-iconBg bg-cardBg transition-colors group-hover:border-primary/40">
      <Image
        loading="lazy"
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
        <span className="flex items-center gap-1.5 rounded-full border border-white/25 bg-black/60 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
          <Maximize2 size={11} />
          Expand
        </span>
      </div>
    </div>
    <p
      className="px-1 text-[11px] font-semibold text-lightText truncate group-hover:text-darkText transition-colors"
      title={img.title}
    >
      {img.title}
    </p>
  </button>
);

export const ImageGallery = ({
  images,
  columns,
  className,
}: {
  images: GalleryImage[];
  columns?: number;
  className?: string;
}) => {
  const [active, setActive] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const count = images.length;
  let gridCols = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
  if (columns === 1 || count === 1) {
    gridCols = "grid-cols-1 max-w-md";
  } else if (columns === 2 || count === 2) {
    gridCols = "grid-cols-2 max-w-2xl";
  } else if (columns === 3 || count === 3) {
    gridCols = "grid-cols-2 sm:grid-cols-3 max-w-4xl";
  }

  return (
    <div className={cn("mb-10 grid gap-3 sm:gap-4", gridCols, className)}>
      {images.map((img, i) => (
        <GalleryItem key={i} img={img} onOpen={() => setActive(i)} />
      ))}
      {active !== null && (
        <Lightbox
          images={images}
          initialIndex={active}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
};

export { Lightbox, GalleryItem, cn };
