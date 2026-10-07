"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import staticD2Cache from "@/lib/d2-cache.json";

interface D2DiagramProps {
  chart: string;
  className?: string;
  minWidth?: number;
  maxWidth?: number;
  mode?: "card" | "modal";
  theme?: number;
}

// Module-level client cache to prevent refetching identical diagrams
const clientSvgCache = new Map<string, string>();
const staticCache = staticD2Cache as Record<string, string>;

/**
 * Robustly extract intrinsic width and height from SVG element.
 */
function getSvgDimensions(svgEl: SVGSVGElement) {
  let width = 0;
  let height = 0;

  // 1. Try viewBox attribute
  const viewBoxAttr = svgEl.getAttribute("viewBox");
  if (viewBoxAttr) {
    const parts = viewBoxAttr.trim().split(/[\s,]+/);
    if (parts.length >= 4) {
      width = parseFloat(parts[2]) || 0;
      height = parseFloat(parts[3]) || 0;
    }
  }

  // 2. Fallback to viewBox DOM baseVal
  if (!width && svgEl.viewBox?.baseVal?.width) {
    width = svgEl.viewBox.baseVal.width;
    height = svgEl.viewBox.baseVal.height;
  }

  // 3. Fallback to style max-width
  if (!width && svgEl.style.maxWidth) {
    width = parseFloat(svgEl.style.maxWidth) || 0;
  }

  // 4. Fallback to width attribute if not percentage
  if (!width) {
    const widthAttr = svgEl.getAttribute("width");
    if (widthAttr && !widthAttr.includes("%")) {
      width = parseFloat(widthAttr) || 0;
    }
  }

  return { width, height };
}

export const D2Diagram = ({
  chart,
  className,
  minWidth,
  maxWidth,
  mode = "card",
  theme = 200,
}: D2DiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cacheKey = `${theme}:${chart.trim()}`;
  const [svg, setSvg] = useState<string>(() => clientSvgCache.get(cacheKey) || staticCache[cacheKey] || "");
  const [loading, setLoading] = useState<boolean>(() => !clientSvgCache.get(cacheKey) && !staticCache[cacheKey]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const currentKey = `${theme}:${chart.trim()}`;

    if (clientSvgCache.has(currentKey)) {
      setSvg(clientSvgCache.get(currentKey)!);
      setLoading(false);
      setError(null);
      return;
    }

    if (staticCache[currentKey]) {
      const cached = staticCache[currentKey];
      clientSvgCache.set(currentKey, cached);
      setSvg(cached);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const fetchSvg = async () => {
      try {
        const res = await fetch("/api/d2", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chart, theme }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || `D2 compilation failed with status ${res.status}`);
        }

        const data = await res.json();
        if (cancelled) return;

        if (data.svg) {
          clientSvgCache.set(currentKey, data.svg);
          setSvg(data.svg);
          setError(null);
        } else {
          throw new Error("No SVG returned from D2 endpoint");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to compile D2 diagram");
          setSvg("");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchSvg();

    return () => {
      cancelled = true;
    };
  }, [chart, theme]);

  // Adjust SVG element styles after rendering into DOM
  useEffect(() => {
    if (!containerRef.current) return;
    const svgEl = containerRef.current.querySelector<SVGSVGElement>("svg");
    if (!svgEl) return;

    svgEl.removeAttribute("width");
    svgEl.removeAttribute("height");

    const { width: intrinsicWidth } = getSvgDimensions(svgEl);

    if (!intrinsicWidth) {
      svgEl.style.width = "100%";
      svgEl.style.maxWidth = "100%";
      svgEl.style.height = "auto";
      svgEl.style.display = "block";
      svgEl.style.margin = "0 auto";
      return;
    }

    if (mode === "modal") {
      svgEl.style.width = `${intrinsicWidth}px`;
      svgEl.style.minWidth = `${intrinsicWidth}px`;
      svgEl.style.maxWidth = "none";
      svgEl.style.height = "auto";
      svgEl.style.display = "block";
      svgEl.style.margin = "0 auto";
    } else {
      const effectiveMaxWidth = maxWidth || intrinsicWidth;
      const defaultFloor = Math.round(intrinsicWidth * 0.72);
      const effectiveFloor = minWidth ? Math.min(intrinsicWidth, minWidth) : defaultFloor;
      const effectiveMinWidth = Math.min(effectiveMaxWidth, effectiveFloor);

      svgEl.style.width = "100%";
      svgEl.style.maxWidth = `${effectiveMaxWidth}px`;
      svgEl.style.minWidth = `${effectiveMinWidth}px`;
      svgEl.style.height = "auto";
      svgEl.style.overflow = "visible";
      svgEl.style.display = "block";
      svgEl.style.margin = "0 auto";
    }
  }, [svg, minWidth, maxWidth, mode]);

  if (error) {
    return (
      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono">
        {error}
      </div>
    );
  }

  if (loading && !svg) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-12 gap-3 text-lightText/60">
        <Loader2 className="size-6 animate-spin text-primary" />
        <span className="text-xs font-mono">Compiling D2 diagram...</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`d2-diagram w-full min-w-0 pb-2 ${className || ""}`}
      style={{ overflow: "visible" }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
