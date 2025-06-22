"use client";
import React from "react";
import { Book, Globe, Hammer, Puzzle, Settings, Star } from "lucide-react";

const WorkFlow = () => {
  return (
    <div className="rounded-lg border border-iconBg bg-cardBg lg:col-span-2">
      <div className="mb-4 flex h-24 flex-col items-center justify-center border-b border-iconBg p-4">
        <h4 className="text-md mb-2 flex items-center gap-2 text-lightText">
          <Star className="fill-primary text-primary" /> Work Process
        </h4>
        <h3 className="text-xl text-darkText">Workflow Highlights</h3>
      </div>

      {/* <!-- Workflow steps --> */}
      <div className="grid gap-2 px-3.5 py-4 lg:py-0">
        {/* First */}
        <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-darkText/5 bg-iconCard px-2.5 py-2 hover:bg-iconCard/50">
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50">
            <Globe className="" />
          </div>
          <span className="text-darkText">Goal & Objectives</span>
        </div>
        <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-darkText/5 bg-iconCard px-2.5 py-2 hover:bg-iconCard/50">
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50">
            <Book />
          </div>
          <span className="text-darkText">Research & Planning</span>
        </div>
        <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-darkText/5 bg-iconCard px-2.5 py-2 hover:bg-iconCard/50">
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50">
            <Puzzle />
          </div>
          <span className="text-darkText">Wireframe & Design</span>
        </div>
        <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-darkText/5 bg-iconCard px-2.5 py-2 hover:bg-iconCard/50">
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50">
            <Settings />
          </div>
          <span className="text-darkText">Development</span>
        </div>
        <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-darkText/5 bg-iconCard px-2.5 py-2 hover:bg-iconCard/50">
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50">
            <Hammer />
          </div>
          <span className="text-darkText">Testing & Maintenance</span>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
