import { Github, Instagram, Linkedin, Rocket, Send } from "lucide-react";

const OnlinePresence = () => {
  return (
    <div className="col-span-2 rounded-lg border border-iconBg bg-cardBg">
      <div className="mb-4 flex h-28 flex-col items-center justify-center border-b border-iconBg p-4">
        <h4 className="text-md mb-2 flex items-center gap-2 text-lightText">
          <Rocket className="fill-primary text-primary" /> Follow Me
        </h4>
        <h3 className="text-xl text-darkText">Online Presence</h3>
      </div>
      <div className="grid grid-rows-4 gap-2 px-6">
        <a
          href="https://github.com/AmitxParmar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center gap-3 rounded-lg bg-iconCard px-4 py-3 hover:bg-iconCard/50"
        >
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50">
            <Github className="" />
          </div>
          <span className="text-darkText">AmitxParmar</span>
        </a>
        <a
          href="https://linkedin.com/in/AmitxParmar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center gap-3 rounded-lg bg-iconCard px-4 py-3 hover:bg-iconCard/50"
        >
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50">
            <Linkedin className="" />
          </div>
          <span className="text-darkText">AmitxParmar</span>
        </a>
        <a
          href="https://instagram.com/AmitxParmar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center gap-3 rounded-lg bg-iconCard px-4 py-3 hover:bg-iconCard/50"
        >
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50">
            <Instagram className="" />
          </div>
          <span className="text-darkText">AmitxParmar</span>
        </a>
        <a
          href="https://t.me/AmitxParmar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex cursor-pointer items-center gap-3 rounded-lg bg-iconCard px-4 py-3 hover:bg-iconCard/50"
        >
          <div className="rounded-md bg-iconBg p-2 group-hover:bg-iconBg/50">
            <Send className="" />
          </div>
          <span className="text-darkText">AmitxParmar</span>
        </a>
      </div>
    </div>
  );
};

export default OnlinePresence;
