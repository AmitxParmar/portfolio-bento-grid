"use client";

import React, { useState } from "react";
import { Maximize2, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MermaidDiagram } from "./MermaidDiagram";
import { D2Diagram } from "./D2Diagram";

export interface ArchitectureViewerProps {
  chart?: string;
  d2?: string;
  engine?: "mermaid" | "d2";
  showLegend?: boolean;
}

const ViewerContent = ({ chart, d2, engine, showLegend }: ArchitectureViewerProps) => {
  const [expanded, setExpanded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const hasBoth = Boolean(chart && d2);
  const [currentEngine, setCurrentEngine] = useState<"mermaid" | "d2">(
    engine || (d2 ? "d2" : "mermaid")
  );

  const handleOpenChange = (open: boolean) => {
    setExpanded(open);
    if (!open) {
      setZoom(1);
    }
  };

  const activeChart = currentEngine === "d2" ? (d2 || chart) : (chart || d2);

  return (
    <div className="w-full max-w-full min-w-0 rounded-3xl border border-iconBg bg-cardBg/30 overflow-hidden relative shadow-inner group/mermaid flex flex-col">
      {/* Top action controls (Toggle + Expand) */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        {hasBoth && (
          <div className="inline-flex items-center p-0.5 rounded-full bg-bg/85 border border-iconBg backdrop-blur-md shadow-md">
            <button
              type="button"
              onClick={() => setCurrentEngine("d2")}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium transition-all cursor-pointer ${
                currentEngine === "d2"
                  ? "bg-primary text-black font-semibold shadow-xs"
                  : "text-lightText/70 hover:text-lightText"
              }`}
            >
              D2
            </button>
            <button
              type="button"
              onClick={() => setCurrentEngine("mermaid")}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium transition-all cursor-pointer ${
                currentEngine === "mermaid"
                  ? "bg-primary text-black font-semibold shadow-xs"
                  : "text-lightText/70 hover:text-lightText"
              }`}
            >
              Mermaid
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-label="Expand diagram"
          className="flex size-9 items-center justify-center rounded-full border border-iconBg bg-bg/80 text-lightText/70 backdrop-blur-md transition-all hover:bg-primary/20 hover:text-lightText focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:opacity-0 md:group-hover/mermaid:opacity-100 cursor-pointer shadow-md"
        >
          <Maximize2 size={16} />
        </button>
      </div>

      <div className="w-full max-w-full min-w-0 overflow-x-auto p-4 md:p-6 pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-iconBg">
        {currentEngine === "d2" && activeChart ? (
          <D2Diagram chart={activeChart} mode="card" />
        ) : activeChart ? (
          <MermaidDiagram chart={activeChart} mode="card" />
        ) : null}
      </div>

      {showLegend && (
        <div className="px-6 py-3 border-t border-iconBg/40 bg-bg/60 backdrop-blur-md flex flex-wrap items-center gap-6 z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2.5px] bg-[#71717a] rounded-full" />
            <span className="text-[10px] font-black text-lightText/70 uppercase tracking-[0.15em]">HTTP / RPC</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] border-b-2 border-dashed border-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.15em]">Event Driven</span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none border border-primary/5 rounded-3xl" />

      <Dialog open={expanded} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-[95vw] lg:max-w-[92vw] w-[95vw] h-[88vh] max-h-[92vh] flex flex-col p-0 overflow-hidden bg-bg border border-iconBg rounded-3xl shadow-2xl"
        >
          {/* Header Bar with Zoom and Close Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-iconBg/50 bg-cardBg/50 backdrop-blur-md shrink-0">
            <div>
              <DialogTitle className="text-sm font-bold text-darkText tracking-wide">
                Architecture Diagram
              </DialogTitle>
              <DialogDescription className="text-xs text-lightText/60">
                Inspect components, zoom or pan across the diagram
              </DialogDescription>
            </div>
            <div className="flex items-center gap-2">
              {hasBoth && (
                <div className="inline-flex items-center p-0.5 rounded-full bg-bg/85 border border-iconBg mr-2">
                  <button
                    type="button"
                    onClick={() => setCurrentEngine("d2")}
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium transition-all cursor-pointer ${
                      currentEngine === "d2"
                        ? "bg-primary text-black font-semibold shadow-xs"
                        : "text-lightText/70 hover:text-lightText"
                    }`}
                  >
                    D2
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentEngine("mermaid")}
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium transition-all cursor-pointer ${
                      currentEngine === "mermaid"
                        ? "bg-primary text-black font-semibold shadow-xs"
                        : "text-lightText/70 hover:text-lightText"
                    }`}
                  >
                    Mermaid
                  </button>
                </div>
              )}
              <Button
                variant="outline"
                size="icon-xs"
                onClick={() => setZoom((z) => Math.max(0.5, +(z - 0.15).toFixed(2)))}
                aria-label="Zoom out"
                className="size-8 rounded-full border-iconBg text-lightText hover:text-white cursor-pointer"
              >
                <ZoomOut size={14} />
              </Button>
              <span className="text-[11px] font-mono font-medium text-lightText/80 min-w-[42px] text-center select-none">
                {Math.round(zoom * 100)}%
              </span>
              <Button
                variant="outline"
                size="icon-xs"
                onClick={() => setZoom((z) => Math.min(2.5, +(z + 0.15).toFixed(2)))}
                aria-label="Zoom in"
                className="size-8 rounded-full border-iconBg text-lightText hover:text-white cursor-pointer"
              >
                <ZoomIn size={14} />
              </Button>
              <Button
                variant="ghost"
                size="xs"
                onClick={() => setZoom(1)}
                aria-label="Reset zoom"
                className="h-8 px-2.5 text-xs text-lightText hover:text-white rounded-full cursor-pointer"
              >
                <RotateCcw size={12} className="mr-1" /> Reset
              </Button>
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={() => handleOpenChange(false)}
                aria-label="Close dialog"
                className="size-8 rounded-full text-lightText hover:text-white hover:bg-white/10 ml-2 cursor-pointer"
              >
                <X size={16} />
              </Button>
            </div>
          </div>

          {/* Interactive Scroll Canvas */}
          <div className="flex-1 w-full h-full overflow-auto p-6 md:p-12 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-iconBg">
            <div
              className="m-auto w-fit min-h-full flex items-center justify-center transition-transform duration-150"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "top center",
              }}
            >
              {currentEngine === "d2" && activeChart ? (
                <D2Diagram chart={activeChart} mode="modal" />
              ) : activeChart ? (
                <MermaidDiagram chart={activeChart} mode="modal" />
              ) : null}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const ArchitectureViewer = (props: ArchitectureViewerProps) => (
  <ViewerContent
    chart={props.chart}
    d2={props.d2}
    engine={props.engine}
    showLegend={props.showLegend}
  />
);

