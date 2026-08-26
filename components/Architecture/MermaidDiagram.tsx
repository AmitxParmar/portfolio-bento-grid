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
            primaryColor: "#c084fc",
            primaryTextColor: "#ffffff",
            primaryBorderColor: "#c084fc",
            lineColor: "#52525b",
            secondaryColor: "#18181b",
            tertiaryColor: "#09090b",
            fontFamily: "inherit",
            fontSize: "14px",
            noteBkgColor: "#18181b",
            noteTextColor: "#a1a1aa",
            noteBorderColor: "#27272a",
            actorBkg: "#18181b",
            actorTextColor: "#ffffff",
            actorBorder: "#c084fc",
            signalColor: "#ffffff",
            signalTextColor: "#ffffff",
          },
          flowchart: {
            curve: "basis",
            padding: 20,
            htmlLabels: true,
            useMaxWidth: true,
          },
          sequence: {
            useMaxWidth: true,
          },
          gantt: {
            useMaxWidth: true,
          },
          journey: {
            useMaxWidth: true,
          },
          class: {
            useMaxWidth: true,
          },
          state: {
            useMaxWidth: true,
          },
          er: {
            useMaxWidth: true,
          },
          pie: {
            useMaxWidth: true,
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

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
