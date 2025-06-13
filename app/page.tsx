import AboutMe from "@/components/Cards/AboutMe";
import AchievementGrid from "@/components/Cards/AchievementGrid";
import ContactMe from "@/components/Cards/ContactMe";
import OnlinePresence from "@/components/Cards/OnlinePresence";
import ProjectsGallery from "@/components/Cards/ProjectsGallery";
import TechStack from "@/components/Cards/TechStack";
import WorkFlow from "@/components/Cards/WorkFlow";
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
          <div className="row-span-2 rounded-lg border border-iconBg bg-cardBg p-4">
            <h3 className="mb-2 text-xl font-semibold">Projects Gallery</h3>
            <div className="h-24 rounded bg-iconBg"></div>
            <button className="mt-4 rounded bg-primary px-4 py-2 text-black">
              View Works
            </button>
          </div>
          {/* Solutions Suite */}
          <div className="row-span-2 rounded-lg border border-iconBg bg-cardBg p-4">
            <h3 className="mb-2 text-xl font-semibold">Solutions Suite</h3>
            <p className="text-sm text-lightText">
              Web Apps, APIs, Full-stack Development
            </p>
            <button className="mt-4 rounded bg-primary px-4 py-2 text-black">
              View All Services
            </button>
          </div>
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
