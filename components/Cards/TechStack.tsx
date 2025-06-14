"use client";
import { LucideLayers } from "lucide-react";
import { Icons } from "../icons";
import { Badge } from "../ui/badge";
import { Marquee } from "../magicui/marquee";

const TechStack = () => {
  return (
    /* Tech stack card */
    <div className="row-span-2 flex h-full flex-col items-center overflow-hidden rounded-lg border border-iconBg bg-cardBg p-4">
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-md mb-2 flex items-center gap-2 text-lightText">
          <LucideLayers className="text-primary" /> Tech Stack
        </h4>
        <h3 className="text-xl text-darkText">Tech Arsenal</h3>
      </div>

      <div className="m-auto grid grid-flow-col gap-2 p-2">
        <Marquee>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-sm text-white ">
            <Icons.mongodb className="size-20" /> MongoDB
          </div>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-sm text-white ">
            <Icons.express className="size-20" /> ExpressJS
          </div>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-sm text-white ">
            <Icons.react className="size-20" /> React
          </div>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-sm text-white ">
            <Icons.nodejs className="size-20" /> NodeJS
          </div>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-sm text-white ">
            <Icons.nextjs className="size-20" /> NextJS
          </div>
          <div className="flex flex-col rounded-lg border border-iconBg px-2  py-1 text-center text-sm text-white ">
            <Icons.tailwind className="size-20" /> Tailwind
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
