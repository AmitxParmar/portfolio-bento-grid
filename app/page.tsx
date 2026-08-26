"use client";

import AboutMe from "@/components/Cards/AboutMe";
import ContactMe from "@/components/Cards/ContactMe";
import ProjectsGallery from "@/components/Cards/ProjectsGallery";
import TechStack from "@/components/Cards/TechStack";
import EngineeringHighlights from "@/components/Cards/EngineeringHighlights";
import CurrentFocus from "@/components/Cards/CurrentFocus";
import SystemArchitecturePreview from "@/components/Cards/SystemArchitecturePreview";
import TechnicalExpertise from "@/components/Cards/TechnicalExpertise";

export default function IndexPage() {
  return (
    <div className="flex flex-col gap-3 bg-bg px-3 py-4 text-foreground lg:grid lg:h-screen lg:overflow-hidden lg:grid-cols-12 2xl:px-6 2xl:gap-4">
      <div className="flex flex-col gap-3 lg:col-span-7 lg:grid lg:grid-cols-7 lg:gap-3 2xl:gap-4 min-h-0">
        {/* Left Column (3/12) */}
        <div className="order-2 col-span-3 min-w-0 flex flex-col gap-3 lg:order-1 lg:grid lg:grid-rows-12 lg:gap-3 2xl:gap-4 min-h-0">
          <div className="lg:row-span-4 min-w-0 min-h-0 flex">
            <TechStack />
          </div>
          <div className="lg:row-span-4 min-w-0 min-h-0 flex">
            <EngineeringHighlights />
          </div>
          <div className="lg:row-span-4 min-w-0 min-h-0 flex">
            <CurrentFocus />
          </div>
        </div>

        {/* Center Column (4/12) */}
        <div className="order-1 col-span-4 min-w-0 flex flex-col gap-3 lg:order-2 lg:grid lg:grid-rows-12 lg:gap-3 2xl:gap-4 min-h-0">
          <div className="lg:row-span-5 min-w-0 min-h-0 flex">
            <AboutMe />
          </div>
          <div className="lg:row-span-7 min-w-0 min-h-0 flex">
            <ProjectsGallery />
          </div>
        </div>
      </div>

      {/* Right Column (5/12) */}
      <div className="flex flex-col gap-3 lg:col-span-5 lg:grid lg:grid-rows-12 lg:gap-3 2xl:gap-4 min-h-0">
        <div className="lg:row-span-5 min-w-0 min-h-0 flex">
          <SystemArchitecturePreview />
        </div>
        <div className="lg:row-span-4 min-w-0 min-h-0 flex">
          <TechnicalExpertise />
        </div>
        <div className="lg:row-span-3 min-w-0 min-h-0 flex">
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
