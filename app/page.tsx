"use client";

import AboutMe from "@/components/Cards/AboutMe";
import ContactMe from "@/components/Cards/ContactMe";
import ProjectsGallery from "@/components/Cards/ProjectsGallery";
import TechStack from "@/components/Cards/TechStack";
import EngineeringHighlights from "@/components/Cards/EngineeringHighlights";
import LatestWritings from "@/components/Cards/LatestWritings";
import SystemArchitecturePreview from "@/components/Cards/SystemArchitecturePreview";
import TechnicalExpertise from "@/components/Cards/TechnicalExpertise";

export default function IndexPage() {
  return (
    <div 
      id="overview"
      className="w-full max-w-6xl mx-auto px-3 sm:px-6 pt-20 sm:pt-24 pb-12 text-foreground"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-3.5 items-start">
        {/* Left Column (4/12): Toolchain, Production Standards, Technical Notes */}
        <div className="flex flex-col gap-3 sm:gap-3.5 lg:col-span-4 order-2 lg:order-1 min-w-0">
          <TechStack />
          <EngineeringHighlights />
          <LatestWritings />
        </div>

        {/* Center Column (4/12): Personal Profile & Case Studies */}
        <div className="flex flex-col gap-3 sm:gap-3.5 lg:col-span-4 order-1 lg:order-2 min-w-0">
          <AboutMe />
          <ProjectsGallery />
        </div>

        {/* Right Column (4/12): System Architecture, Capabilities, Direct Reach */}
        <div className="flex flex-col gap-3 sm:gap-3.5 lg:col-span-4 order-3 lg:order-3 min-w-0">
          <SystemArchitecturePreview />
          <TechnicalExpertise />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
