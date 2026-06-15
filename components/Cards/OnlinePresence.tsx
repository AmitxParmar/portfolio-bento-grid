import { Github, Instagram, Linkedin, Rocket, Send } from "lucide-react";

const OnlinePresence = () => {
  return (
    <div className="col-span-2 rounded-lg border border-iconBg bg-cardBg">
      <div className="mb-2 flex h-20 flex-col items-center justify-center border-b border-iconBg p-4 lg:h-16 2xl:h-28 2xl:mb-4">
        <h4 className="text-md mb-1 flex items-center gap-2 text-lightText lg:text-xs 2xl:text-md 2xl:mb-2">
          <Rocket className="fill-primary text-primary" size={16} /> Follow Me
        </h4>
        <h3 className="text-xl text-darkText lg:text-base 2xl:text-xl">Online Presence</h3>
      </div>
      <div className="grid grid-cols-2 gap-1 p-2 lg:grid-cols-4 lg:gap-1.5 lg:px-4 lg:py-2 2xl:grid-rows-4 2xl:grid-cols-1 2xl:p-4 2xl:gap-2 2xl:px-6 2xl:py-0">
        <a
          href="https://github.com/AmitxParmar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-iconCard px-4 py-3 hover:bg-iconCard/50 lg:p-2 2xl:justify-start 2xl:px-4 2xl:py-3"
        >
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50 lg:p-1.5 2xl:p-2">
            <Github className="size-5 lg:size-4 2xl:size-6" />
          </div>
          <span className="text-darkText lg:hidden 2xl:inline">AmitxParmar</span>
        </a>
        <a
          href="https://linkedin.com/in/AmitxParmar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-iconCard px-4 py-3 hover:bg-iconCard/50 lg:p-2 2xl:justify-start 2xl:px-4 2xl:py-3"
        >
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50 lg:p-1.5 2xl:p-2">
            <Linkedin className="size-5 lg:size-4 2xl:size-6" />
          </div>
          <span className="text-darkText lg:hidden 2xl:inline">AmitxParmar</span>
        </a>
        <a
          href="https://instagram.com/AmitxParmar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-iconCard px-4 py-3 hover:bg-iconCard/50 lg:p-2 2xl:justify-start 2xl:px-4 2xl:py-3"
        >
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50 lg:p-1.5 2xl:p-2">
            <Instagram className="size-5 lg:size-4 2xl:size-6" />
          </div>
          <span className="text-darkText lg:hidden 2xl:inline">AmitxParmar</span>
        </a>
        <a
          href="https://t.me/AmitxParmar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-iconCard px-4 py-3 hover:bg-iconCard/50 lg:p-2 2xl:justify-start 2xl:px-4 2xl:py-3"
        >
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50 lg:p-1.5 2xl:p-2">
            <Send className="size-5 lg:size-4 2xl:size-6" />
          </div>
          <span className="text-darkText lg:hidden 2xl:inline">AmitxParmar</span>
        </a>
      </div>
    </div>
  );
};

export default OnlinePresence;
