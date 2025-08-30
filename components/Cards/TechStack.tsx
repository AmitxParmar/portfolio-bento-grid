"use client";
import { LucideLayers } from "lucide-react";
import { Icons } from "../icons";
import { Marquee } from "../magicui/marquee";

const TechStack = () => {
  return (
    /* Tech stack card */
    <div className="row-span-2 flex h-full flex-col items-center overflow-hidden rounded-lg border border-iconBg bg-cardBg px-4 pt-4">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-md mb-2 flex items-center gap-2 text-lightText">
          <LucideLayers className="text-primary" /> Tech Stack
        </h4>
        <h3 className="text-xl text-darkText">Tech Arsenal</h3>
      </div>

      <div className="m-auto grid">
        <Marquee reverse>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-xs text-white ">
            <Icons.typescript className="mx-auto size-14" /> TypeScript
          </div>

          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-xs text-white ">
            <Icons.react className="mx-auto size-14" /> React
          </div>

          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-xs text-white ">
            <Icons.nextjs className="mx-auto size-14" /> NextJS
          </div>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-xs text-white ">
            <Icons.tailwind className="mx-auto size-14" /> Tailwind
          </div>
        </Marquee>
        <Marquee>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-xs text-white ">
            <Icons.docker className="mx-auto size-14" /> Docker
          </div>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-xs text-white ">
            <Icons.mongodb className="mx-auto size-14" /> MongoDB
          </div>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-xs text-white ">
            <Icons.linux className="mx-auto size-14  fill-white" /> Linux
          </div>
          <div className="flex flex-col rounded-lg border border-iconBg  px-2 py-1 text-center text-xs text-white">
            <Icons.express className="mx-auto size-14" /> ExpressJS
          </div>

          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-xs text-white ">
            <Icons.nodejs className="mx-auto size-14" /> NodeJS
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
