import AboutMe from "@/components/Cards/AboutMe";
import AchievementGrid from "@/components/Cards/AchievementGrid";
import ContactMe from "@/components/Cards/ContactMe";
import OnlinePresence from "@/components/Cards/OnlinePresence";
import ProjectsGallery from "@/components/Cards/ProjectsGallery";
import ProjectStructures from "@/components/Cards/ProjectStructure/ProjectStructures";
import TechStack from "@/components/Cards/TechStack";
import WorkFlow from "@/components/Cards/WorkFlow";
import { Server } from "lucide-react";
import dynamic from "next/dynamic";
const OrbitingIcons = dynamic(
  () => import("@/components/Cards/OrbitingIcons"),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
);

export default function IndexPage() {
  return (
    <div className="grid min-h-screen grid-cols-12 gap-2 bg-bg px-6 py-3 text-darkText">
      <div className="col-span-7 grid grid-cols-7 gap-2">
        {/* First Grid */}
        <div className="col-span-3 grid grid-rows-6 gap-2">
          <TechStack />

          {/* Projects gallery */}
          <ProjectStructures.Frontend />
          {/* Solutions Suite */}
          <ProjectStructures.Backend />
        </div>

        {/* Second */}
        <div className="col-span-4 grid grid-cols-4 grid-rows-6 gap-2">
          <AchievementGrid />

          {/* About me */}
          <AboutMe />

          {/* Projects Showcase */}
          <ProjectsGallery />
        </div>
      </div>

      {/* Third */}
      <div className="col-span-5 grid grid-rows-6 gap-2">
        <div className="row-span-3 grid grid-cols-5 gap-2">
          {/* Orbiting Icons */}
          {/* Testemonials */}
          <div className="col-span-3 rounded-lg border border-iconBg bg-cardBg">
            <OrbitingIcons />
          </div>

          {/* Work Flow */}
          <WorkFlow />
        </div>

        <div className="row-span-3 grid grid-cols-5 gap-2">
          <OnlinePresence />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
