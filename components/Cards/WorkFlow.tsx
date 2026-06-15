"use client";
import React from "react";
import { Book, Globe, Hammer, Puzzle, Settings, Star } from "lucide-react";

const WorkFlow = () => {
  return (
    <div className="rounded-lg border border-iconBg bg-cardBg lg:col-span-2">
      <div className="mb-2 flex h-24 flex-col items-center justify-center border-b border-iconBg p-4 lg:h-16 lg:mb-1 2xl:h-24 2xl:mb-4">
        <h4 className="text-md mb-1 flex items-center gap-2 text-lightText lg:text-xs 2xl:text-md 2xl:mb-2">
          <Star className="fill-primary text-primary" size={16} /> Work Process
        </h4>
        <h3 className="text-xl text-darkText lg:text-base 2xl:text-xl">Workflow Highlights</h3>
      </div>

      {/* <!-- Workflow steps --> */}
      <div className="grid gap-1 px-3.5 py-4 lg:py-1 2xl:gap-2 2xl:py-0">
        {/* First */}
        <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-darkText/5 bg-iconCard px-2.5 py-2 hover:bg-iconCard/50 lg:py-1.5 2xl:py-2">
          <div className="rounded-md bg-iconBg p-1.5 group-hover:bg-iconBg/50 lg:p-1 2xl:p-2">
            <Globe size={18} />
          </div>
          <span className="text-darkText lg:text-sm 2xl:text-base">Goal & Objectives</span>
        </div>
        <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-darkText/5 bg-iconCard px-2.5 py-2 hover:bg-iconCard/50 lg:py-1.5 2xl:py-2">
          <div className="rounded-md bg-iconBg p-1.5 group-hover:bg-iconBg/50 lg:p-1 2xl:p-2">
            <Book size={18} />
          </div>
          <span className="text-darkText lg:text-sm 2xl:text-base">Research & Planning</span>
        </div>
        <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-darkText/5 bg-iconCard px-2.5 py-2 hover:bg-iconCard/50 lg:py-1.5 2xl:py-2">
          <div className="rounded-md bg-iconBg p-1.5 group-hover:bg-iconBg/50 lg:p-1 2xl:p-2">
            <Puzzle size={18} />
          </div>
          <span className="text-darkText lg:text-sm 2xl:text-base">Wireframe & Design</span>
        </div>
        <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-darkText/5 bg-iconCard px-2.5 py-2 hover:bg-iconCard/50 lg:py-1.5 2xl:py-2">
          <div className="rounded-md bg-iconBg p-1.5 group-hover:bg-iconBg/50 lg:p-1 2xl:p-2">
            <Settings size={18} />
          </div>
          <span className="text-darkText lg:text-sm 2xl:text-base">Development</span>
        </div>
        <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-darkText/5 bg-iconCard px-2.5 py-2 hover:bg-iconCard/50 lg:py-1.5 2xl:py-2">
          <div className="rounded-md bg-iconBg p-1.5 group-hover:bg-iconBg/50 lg:p-1 2xl:p-2">
            <Hammer size={18} />
          </div>
          <span className="text-darkText lg:text-sm 2xl:text-base">Testing & Maintenance</span>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
