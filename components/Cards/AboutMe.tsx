import {
  ShieldCheck,
  Download,
  TerminalSquare,
  Clock5,
  MapPin,
  Languages,
  LucideGraduationCap,
  Github,
  Linkedin,
} from "lucide-react";
import React from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Badge } from "../ui/badge";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className="relative col-span-4 row-span-3 rounded-lg border border-iconBg bg-iconBg/40 p-4 sm:p-6">
        <div className="flex flex-col-reverse sm:flex-row ">
          <Image
            src={"/profile-pic.jpg"}
            className="relative mx-auto mb-4 aspect-square size-28 rounded-lg border-4 border-gray-400/50 sm:mx-0 sm:mb-0 sm:mr-4"
            height={112}
            width={112}
            alt={"Avatar"}
          />
          <div className="flex w-full flex-col">
            {/* Buttons row: flex-row on mobile, flex-row on sm+ (unchanged) */}
            <div className="mb-4 flex flex-row-reverse justify-around gap-2 sm:flex-row sm:items-center sm:justify-around">
              <Badge className="w-fit border border-iconBg bg-[#141414] px-3 py-1.5">
                <ShieldCheck className="mr-2 text-green-400" size={16} />
                <span className="text-xs text-lightText lg:text-base">
                  Available To Work
                </span>
              </Badge>
              <a
                href="/amitxparmar@github.pdf"
                download
                className="flex w-fit items-center gap-2 rounded-lg px-4 py-1.5"
              >
                <span className="text-base">Resume</span>
                <Download className="size-8 rounded-sm bg-iconBg p-1.5  hover:bg-iconBg/50" />
              </a>
            </div>
            <h3 className="mb-3 text-center text-2xl font-semibold sm:text-left">
              Amit Parmar
            </h3>
            <p className="mb-6 text-center text-base sm:text-left">
              I&apos;m a{" "}
              <span className="font-medium text-primary">
                Front-end focused Full-stack JavaScript Developer
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 rounded-[10px] border border-iconCard bg-iconBg/50 p-3 text-base text-lightText sm:p-5">
          <div className="grid grid-flow-col gap-2 rounded-full border border-iconBg bg-iconBg px-3 py-1.5 text-darkText">
            <TerminalSquare className="text-primary" />
            Full-stack Developer
          </div>
          <div className="grid grid-flow-col gap-2 rounded-full border border-iconBg bg-iconBg px-3 py-1.5 text-darkText">
            <Clock5 className="text-primary" /> IST
          </div>
          <div className="grid grid-flow-col gap-2 rounded-full border border-iconBg bg-iconBg px-3 py-1.5 text-darkText">
            <MapPin className="text-primary" /> Amreli, Gujarat
          </div>
          <div className="grid grid-flow-col gap-2 rounded-full border border-iconBg bg-iconBg px-3 py-1.5 text-darkText">
            <Languages className="text-primary" /> Gujarati, Hindi & English
          </div>
          <div className="grid grid-flow-col gap-2 rounded-full border border-iconBg bg-iconBg px-3 py-1.5 text-darkText">
            <LucideGraduationCap className="text-primary" /> Saurashtra
            University (BCA)
          </div>
        </div>

        {/* Responsive: Use static position on mobile, absolute on sm+ */}
        <div
          className="static mt-6 grid grid-cols-2
          gap-4
          sm:absolute sm:inset-x-8 sm:bottom-6
        "
        >
          <InteractiveHoverButton className="group h-16 ">
            <a
              href="https://github.com/amitxparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg"
            >
              <Github className="text-primary group-hover:text-black" /> GitHub
            </a>
          </InteractiveHoverButton>
          <InteractiveHoverButton className="group">
            <a
              href="https://linkedin.com/in/amitxparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg "
            >
              <Linkedin className="text-primary group-hover:text-black" />
              LinkedIn
            </a>
          </InteractiveHoverButton>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
