"use client";

import React, { useEffect, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

let mermaidIdCounter = 0;

export const MermaidDiagram = ({ chart, className }: MermaidDiagramProps) => {
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
            fontSize: "13px",
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
            actorMargin: 24,
            boxMargin: 8,
            messageMargin: 16,
            wrap: true,
            width: 800,
          },
          er: {
            useMaxWidth: true,
            layoutDirection: "TB",
            minEntityWidth: 100,
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

  if (error) {
    return (
      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-mono">
        {error}
      </div>
    );
  }

  useEffect(() => {
    if (!containerRef.current) return;
    const svgEl = containerRef.current.querySelector("svg");
    if (svgEl) {
      svgEl.removeAttribute("width");
      svgEl.removeAttribute("height");
      svgEl.setAttribute("width", "100%");
      svgEl.setAttribute("height", "auto");
      svgEl.style.maxWidth = "100%";
      svgEl.style.minWidth = "0";
      svgEl.style.overflow = "hidden";
      svgEl.style.display = "block";
      svgEl.style.margin = "0 auto";
    }
  }, [svg]);

  return (
    <div
      ref={containerRef}
      className={`${className || ""}`}
      style={{ width: "100%", maxWidth: "100%", minWidth: 0, overflow: "hidden" }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
