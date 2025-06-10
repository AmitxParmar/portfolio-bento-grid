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
      <div className="col-span-4 row-span-3 rounded-lg border border-iconBg bg-cardBg p-6">
        <div className="flex flex-row ">
          <Image
            src={"/profile-pic.jpg"}
            className="relative mr-4 aspect-square size-28 rounded-lg"
            height={112}
            width={112}
            alt={"Avatar"}
          />
          <div className="flex w-full flex-col">
            <div className="mb-4 flex flex-row items-center justify-between">
              <Badge className="border border-iconBg bg-[#141414] px-3 py-1.5">
                <ShieldCheck className="mr-2 text-green-400" size={16} />
                <span className="text-base text-lightText">
                  Available To Work
                </span>
              </Badge>
              <a
                href="/amitxparmar@github.pdf"
                download
                className="flex items-center gap-2 rounded-lg px-4 py-1.5"
              >
                <span className="text-base">Resume</span>
                <Download className="size-8 rounded-sm bg-iconBg p-1.5  hover:bg-iconBg/50" />
              </a>
            </div>
            <h3 className="mb-3 text-2xl font-semibold">Amit Parmar</h3>
            <p className="mb-6 text-base">
              I&apos;m a{" "}
              <span className="font-medium text-primary">
                Front-end focused Full-stack JavaScript Developer
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 rounded-[10px] border border-iconCard bg-[#141414] p-5 text-base text-lightText">
          <div className="grid grid-flow-col gap-2 rounded-full border border-iconBg bg-iconCard px-3 py-1.5 text-darkText">
            <TerminalSquare className="text-primary" />
            Full-stack Developer
          </div>
          <div className="grid grid-flow-col gap-2 rounded-full border border-iconBg bg-iconCard px-3 py-1.5 text-darkText">
            <Clock5 className="text-primary" /> IST
          </div>
          <div className="grid grid-flow-col gap-2 rounded-full border border-iconBg bg-iconCard px-3 py-1.5 text-darkText">
            <MapPin className="text-primary" /> Amreli, Gujarat
          </div>
          <div className="grid grid-flow-col gap-2 rounded-full border border-iconBg bg-iconCard px-3 py-1.5 text-darkText">
            <Languages className="text-primary" /> Gujarati, Hindi & English
          </div>
          <div className="grid grid-flow-col gap-2 rounded-full border border-iconBg bg-iconCard px-3 py-1.5 text-darkText">
            <LucideGraduationCap className="text-primary" /> Saurashtra
            University (BCA)
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <InteractiveHoverButton className="group">
            <a
              href="https://github.com/amitxparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg  p-4 font-medium "
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
