"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type GalleryImage = { src: string; alt: string; title: string };

const Lightbox = ({
  src,
  alt,
  title,
  onClose,
}: {
  src: string;
  alt: string;
  title: string;
  onClose: () => void;
}) => (
  <Dialog
    open
    onOpenChange={(open) => {
      if (!open) onClose();
    }}
  >
    <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-6xl bg-black/80 p-3 ring-white/10 backdrop-blur-md">
      <DialogTitle className="sr-only">{title}</DialogTitle>
      <DialogDescription className="sr-only">
        Enlarged preview of {title}
      </DialogDescription>
      <button
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute top-2 right-2 z-10 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <X size={18} />
      </button>
      <div className="relative max-h-[82vh] w-full overflow-auto rounded-lg">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          className="h-auto w-full rounded-lg object-contain"
          priority
        />
      </div>
      <p className="px-1 pb-1 text-center text-xs font-medium text-white/70">
        {title}
      </p>
    </DialogContent>
  </Dialog>
);

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
    className="group block w-full cursor-zoom-in space-y-3 text-left"
  >
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-iconBg bg-cardBg">
      <Image
        loading="lazy"
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
        <span className="flex items-center gap-2 rounded-full border border-white/25 bg-black/60 px-3.5 py-2 text-[11px] font-bold text-white backdrop-blur-sm">
          <Maximize2 size={13} />
          Expand
        </span>
      </div>
    </div>
    <p className="px-2 text-xs font-bold text-lightText">{img.title}</p>
  </button>
);

export const ImageGallery = ({ images }: { images: GalleryImage[] }) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
      {images.map((img, i) => (
        <GalleryItem key={i} img={img} onOpen={() => setActive(i)} />
      ))}
      {active !== null && images[active] && (
        <Lightbox
          src={images[active].src}
          alt={images[active].alt}
          title={images[active].title}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
};

export { Lightbox, GalleryItem, cn };
