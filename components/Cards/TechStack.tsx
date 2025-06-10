"use client";
import { LucideLayers } from "lucide-react";

const TechStack = () => {
  return (
    /* Tech stack card */
    <div className="row-span-2 flex flex-col items-center rounded-lg border border-iconBg bg-cardBg p-4">
      <div className="mb-4 flex items-center gap-2">
        <LucideLayers className="text-primary" size={24} />
        <h3 className="text-xl font-semibold text-lightText">My Stack</h3>
      </div>
      <h3 className="mb-2 text-xl font-semibold">Tech Arsenal</h3>
      <div className="flex flex-wrap gap-2">
        <span className="rounded bg-iconBg px-3 py-1 text-sm">React</span>
        <span className="rounded bg-iconBg px-3 py-1 text-sm">Next.js</span>
        <span className="rounded bg-iconBg px-3 py-1 text-sm">TypeScript</span>
        <span className="rounded bg-iconBg px-3 py-1 text-sm">Node.js</span>
        <span className="rounded bg-iconBg px-3 py-1 text-sm">MongoDB</span>
      </div>
    </div>
  );
};

export default TechStack;
