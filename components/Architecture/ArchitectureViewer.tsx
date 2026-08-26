"use client";

import React from "react";
import { MermaidDiagram } from "./MermaidDiagram";

interface ArchitectureViewerProps {
  chart: string;
  showLegend?: boolean;
}

const ViewerContent = ({ chart, showLegend }: ArchitectureViewerProps) => {
  return (
    <div className="w-full rounded-3xl border border-iconBg bg-cardBg/30 overflow-hidden relative shadow-inner group/mermaid">
      <div className="p-6 md:p-8 overflow-x-auto">
        <MermaidDiagram
          chart={chart}
          className="flex justify-center [&_svg]:max-w-full [&_svg]:h-auto"
        />
      </div>

      {showLegend && (
        <div className="absolute bottom-6 left-6 bg-bg/80 backdrop-blur-md border border-primary/20 p-4 rounded-2xl flex flex-col gap-3 z-10 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2.5px] bg-[#52525b] rounded-full" />
            <span className="text-[10px] font-black text-lightText/70 uppercase tracking-[0.15em]">HTTP / RPC</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2px] border-b-2 border-dashed border-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.15em]">Event Driven</span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none border border-primary/5 rounded-3xl" />
    </div>
  );
};

export const ArchitectureViewer = (props: ArchitectureViewerProps) => (
  <ViewerContent chart={props.chart} showLegend={props.showLegend} />
);
