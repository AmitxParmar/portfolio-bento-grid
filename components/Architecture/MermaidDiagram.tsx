"use client";

import React, { useEffect, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
  minWidth?: number;
  maxWidth?: number;
  mode?: "card" | "modal";
}

let mermaidIdCounter = 0;

/**
 * Robustly extract intrinsic width and height from Mermaid SVG.
 */
function getSvgDimensions(svgEl: SVGSVGElement) {
  let width = 0;
  let height = 0;

  // 1. Try viewBox attribute (most accurate across SVG engines)
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

  // 3. Fallback to style max-width if present (Mermaid sets this by default)
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

export const MermaidDiagram = ({
  chart,
  className,
  minWidth,
  maxWidth,
  mode = "card",
}: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const idRef = useRef(`mermaid-${++mermaidIdCounter}`);

  useEffect(() => {
    let cancelled = false;

    const render = async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            // Minimalism & Swiss: high contrast on dark cardBg (#18181b), grid clarity
            primaryColor: "#1f1f23",
            primaryTextColor: "#fafafa",
            primaryBorderColor: "#3f3f46",
            secondaryColor: "#27272a",
            tertiaryColor: "#18181b",
            lineColor: "#a1a1aa",
            textColor: "#fafafa",
            mainBkg: "#1f1f23",
            nodeBorder: "#3f3f46",
            clusterBkg: "#18181b",
            clusterBorder: "#27272a",
            titleColor: "#fafafa",
            fontFamily: "ui-sans-system, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
            fontSize: "15px",
            noteBkgColor: "#27272a",
            noteTextColor: "#d4d4d8",
            noteBorderColor: "#3f3f46",
            actorBkg: "#27272a",
            actorTextColor: "#fafafa",
            actorBorder: "#3f3f46",
            actorLineColor: "#71717a",
            signalColor: "#e4e4e7",
            signalTextColor: "#e4e4e7",
            labelBoxBkgColor: "#18181b",
            labelBoxBorderColor: "#3f3f46",
            labelTextColor: "#d4d4d8",
            edgeLabelBackground: "#18181b",
          },
          flowchart: {
            curve: "linear",
            padding: 10,
            htmlLabels: true,
            useMaxWidth: true,
            nodeSpacing: 14,
            rankSpacing: 22,
            diagramPadding: 8,
            wrappingWidth: 800,
          },
          sequence: {
            useMaxWidth: true,
            mirrorActors: false,
            showSequenceNumbers: false,
            width: 200,
            actorMargin: 36,
            boxMargin: 12,
            messageMargin: 22,
            actorFontSize: "15px",
            messageFontSize: "14px",
            noteFontSize: "13px",
            wrap: true,
          },
          er: {
            useMaxWidth: true,
            layoutDirection: "TB",
            minEntityWidth: 150,
            minEntityHeight: 75,
          },
        });

        const { svg: renderedSvg } = await mermaid.render(
          idRef.current,
          chart
        );

        if (!cancelled) {
          setSvg(renderedSvg);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to render diagram");
          setSvg("");
        }
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [chart]);

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
      // In modal viewer: render at 1:1 intrinsic scale for maximum crispness and readability
      svgEl.style.width = `${intrinsicWidth}px`;
      svgEl.style.minWidth = `${intrinsicWidth}px`;
      svgEl.style.maxWidth = "none";
      svgEl.style.height = "auto";
      svgEl.style.display = "block";
      svgEl.style.margin = "0 auto";
    } else {
      // In card viewer:
      // 1. Max width is capped at intrinsic width to prevent small diagrams (e.g. 250px)
      //    from blowing up into cartoonish, oversized diagrams.
      const effectiveMaxWidth = maxWidth || intrinsicWidth;

      // 2. Readability floor: allows gentle scaling down to ~72% of intrinsic width (text >= 11px).
      //    Below this floor, horizontal scrolling preserves readability instead of crushing text.
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

  // NOTE: this early return sits after every hook — returning before the
  // useEffect above used to crash the page with "rendered fewer hooks"
  // whenever a chart had a syntax error.
  if (error) {
    return (
      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono">
        {error}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`mermaid-diagram w-full min-w-0 pb-2 ${className || ""}`}
      style={{ overflow: "visible" }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
