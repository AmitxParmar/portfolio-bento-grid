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
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Badge } from "../ui/badge";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="relative flex h-full flex-col rounded-lg border border-iconBg bg-iconBg/40 p-3 sm:p-5 2xl:p-5 overflow-hidden lg:p-3">
      <div className="flex flex-col sm:flex-row gap-4 mb-4 lg:mb-2 2xl:mb-4">
        <Image
          src={"/profile-pic.jpg"}
          className="mx-auto sm:mx-0 aspect-square size-24 rounded-xl border-4 border-gray-400/50 object-cover lg:size-16 2xl:size-24"
          height={96}
          width={96}
          alt={"Avatar"}
          priority
        />
        <div className="flex flex-col justify-center text-center sm:text-left flex-1 lg:justify-start">
          <div className="mb-2 flex flex-row flex-wrap justify-center sm:justify-start items-center gap-2 lg:mb-1">
            <Badge className="w-fit border border-iconBg bg-[#141414] px-2 py-0.5">
              <ShieldCheck className="mr-1.5 text-green-400" size={12} />
              <span className="text-[10px] text-lightText sm:text-xs">
                Available To Work
              </span>
            </Badge>
            <a
              href="/amitxparmar@github.pdf"
              download
              className="flex items-center gap-1.5 text-[10px] font-medium hover:text-primary transition-colors group sm:text-xs"
            >
              <span className="text-lightText group-hover:text-primary">Resume</span>
              <Download className="size-3 text-lightText group-hover:text-primary" />
            </a>
          </div>
          <h3 className="text-lg font-bold text-darkText leading-tight 2xl:text-xl lg:text-base">
            Amit Parmar
          </h3>
          <p className="text-[10px] sm:text-sm text-lightText lg:text-[11px] 2xl:text-sm">
            I&apos;m a{" "}
            <span className="font-medium text-primary">
              Front-end focused Full-stack Developer
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 rounded-[10px] border border-iconCard bg-iconBg/50 p-2 text-[10px] text-lightText mb-4 lg:mb-2 lg:p-1.5 2xl:mb-4 2xl:p-2 2xl:text-xs">
        <div className="flex items-center gap-1 rounded-full border border-iconBg bg-iconBg px-2 py-0.5 text-darkText">
          <TerminalSquare className="text-primary size-3" />
          <span>Full-stack Developer</span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-iconBg bg-iconBg px-2 py-0.5 text-darkText">
          <Clock5 className="text-primary size-3" />
          <span>IST</span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-iconBg bg-iconBg px-2 py-0.5 text-darkText">
          <MapPin className="text-primary size-3" />
          <span>Amreli, Gujarat</span>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-2 2xl:gap-3">
        <InteractiveHoverButton className="group h-8 sm:h-12 lg:h-8 2xl:h-12">
          <a
            href="https://github.com/amitxparmar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Github className="text-primary group-hover:text-black size-5" />
            <span className="text-sm">GitHub</span>
          </a>
        </InteractiveHoverButton>
        <InteractiveHoverButton className="group h-8 sm:h-12">
          <a
            href="https://linkedin.com/in/amitxparmar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Linkedin className="text-primary group-hover:text-black size-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </InteractiveHoverButton>
      </div>
    </div>
  );
};

export default AboutMe;
