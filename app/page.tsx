import AboutMe from "@/components/Cards/AboutMe";
import AchievementGrid from "@/components/Cards/AchievementGrid";
import ContactMe from "@/components/Cards/ContactMe";
import OnlinePresence from "@/components/Cards/OnlinePresence";
import ProjectsGallery from "@/components/Cards/ProjectsGallery";
import ProjectStructures from "@/components/Cards/ProjectStructure/ProjectStructures";
import TechStack from "@/components/Cards/TechStack";
import WorkFlow from "@/components/Cards/WorkFlow";
import { Icons } from "@/components/icons";
import { Ripple } from "@/components/magicui/ripple";
import dynamic from "next/dynamic";

const OrbitingIcons = dynamic(
  () => import("@/components/Cards/OrbitingIcons"),
  {
    loading: () => (
      <div className="flex size-full items-center justify-center text-center">
        <Icons.react className="animate-spin" />
      </div>
    ),
    ssr: false,
  }
);

export default function IndexPage() {
  return (
    <div className="grid min-h-screen grid-cols-12 gap-2 bg-bg px-6 py-3 text-darkText">
      <div className="col-span-7 grid grid-cols-7 gap-2">
        {/* First Grid */}
        <div className="col-span-3 grid grid-rows-6 gap-2">
          <div className="row-span-2">
            <TechStack />
          </div>
          <div className="row-span-2 grid grid-cols-2 gap-2">
            {/* Projects gallery */}
            <ProjectStructures.Frontend />

            <ProjectStructures.Backend />
          </div>

          <div className="relative row-span-2 flex h-full flex-col items-center justify-center overflow-hidden rounded-lg  border border-iconBg bg-cardBg">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z"
                fill="#999999"
              />
              <path d="M15 14H11V16H15V14Z" fill="#999999" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z"
                fill="#999999"
              />
            </svg>
            <Ripple className=" size-full" />
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
