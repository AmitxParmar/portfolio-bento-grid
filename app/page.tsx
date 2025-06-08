import { Badge } from "@/components/ui/badge";
import {
  CircleDot,
  Clock5,
  Github,
  Languages,
  Linkedin,
  LocateIcon,
  LucideGraduationCap,
  LucideLayers,
  MapPin,
  TerminalSquare,
} from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

export default function IndexPage() {
  return (
    <div className="grid min-h-screen grid-cols-12 gap-2 bg-bg p-2 text-darkText">
      <div className="col-span-7 grid grid-cols-7 gap-2">
        {/* First Grid */}
        <div className="col-span-3 grid grid-rows-6 gap-2">
          {/* Tech stack card */}
          <div className="row-span-2 flex flex-col items-center rounded-lg border border-iconBg bg-cardBg p-4">
            <div className="mb-4 flex items-center gap-2">
              <LucideLayers className="text-primary" size={24} />
              <h3 className="text-xl font-semibold text-lightText">
                My Skills
              </h3>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Tech Arsenal</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-iconBg px-3 py-1 text-sm">React</span>
              <span className="rounded bg-iconBg px-3 py-1 text-sm">
                Next.js
              </span>
              <span className="rounded bg-iconBg px-3 py-1 text-sm">
                TypeScript
              </span>
              <span className="rounded bg-iconBg px-3 py-1 text-sm">
                Node.js
              </span>
              <span className="rounded bg-iconBg px-3 py-1 text-sm">
                MongoDB
              </span>
            </div>
          </div>

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
          {/* Achievements */}
          <div className="col-span-4 row-span-1 grid grid-cols-3 items-stretch gap-2">
            {/* Projects */}
            <div className="flex-1 rounded-lg border border-iconBg bg-cardBg p-6">
              <h3 className="mb-4 text-xl font-semibold">Projects</h3>
              <p className="text-5xl font-bold text-primary">04+</p>
            </div>

            {/* Happy Clients */}
            <div className="flex-1 rounded-lg border border-iconBg bg-cardBg p-6">
              <h3 className="mb-4 text-xl font-semibold">Happy Clients</h3>
              <p className="text-5xl font-bold text-primary">10+</p>
            </div>
            {/* Years of expertise */}
            <div className="flex-1 rounded-lg border border-iconBg bg-cardBg p-6">
              <h3 className="mb-4 text-xl font-semibold">Year Expertise</h3>
              <p className="text-5xl font-bold text-primary">02+</p>
            </div>
          </div>

          {/* About me */}
          <div className="col-span-4 row-span-3 rounded-lg border border-iconBg bg-cardBg p-6">
            <div className="flex flex-row gap-4">
              <Image
                src={"/profile-pic.jpg"}
                className="relative aspect-square size-28 rounded-lg"
                height={112}
                width={112}
                alt={"Avatar"}
              />
              <div className="flex flex-col">
                <div className="mb-4">
                  <Badge className="px-4 py-2">
                    <CircleDot className="mr-2 text-green-400" size={16} />
                    <span>Available To Work</span>
                  </Badge>
                </div>
                <h3 className="mb-3 text-2xl font-semibold">Amit Parmar</h3>
                <p className="mb-6 text-base">
                  I&apos;m a{" "}
                  <span className="font-medium text-primary">
                    Front-end focused Full-stack JavaScript/TypeScript Developer
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
                University
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-iconBg p-6 font-medium">
                <Github /> GitHub
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-iconBg p-6 font-medium">
                <Linkedin /> LinkedIn
              </button>
            </div>
          </div>
          <div className="col-span-4 row-span-3 rounded-lg border border-iconBg bg-cardBg p-6"></div>
        </div>
      </div>

      {/* Third */}
      <div className="col-span-5 grid grid-rows-6 gap-2">
        <div className="row-span-3 grid grid-cols-5 gap-2">
          {/* Testemonials */}
          <div className="col-span-3 rounded-lg border border-iconBg bg-cardBg">
            Testimonials
          </div>
          {/* Work Flow */}
          <div className="col-span-2 rounded-lg border border-iconBg bg-cardBg p-4">
            <h3 className="mb-2 text-xl font-semibold">Workflow</h3>
            <ul className="space-y-1 text-sm text-lightText">
              <li>🎯 Planning & Architecture</li>
              <li>🔍 Development</li>
              <li>🧩 Testing</li>
              <li>🎨 Deployment</li>
              <li>✅ Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="row-span-3 grid grid-cols-5 gap-2">
          <div className="row-span- col-span-2 rounded-lg border border-iconBg bg-cardBg"></div>
          <div className="row-span- col-span-3 rounded-lg border border-iconBg bg-cardBg"></div>
        </div>
      </div>
    </div>
  );
}
