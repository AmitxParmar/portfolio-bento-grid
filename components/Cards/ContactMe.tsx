"use client";
import { Crown, Mail, Phone } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const ContactMe = () => {
  return (
    <div className="col-span-3 flex h-full flex-col rounded-lg border border-iconBg bg-cardBg p-4 sm:p-6">
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
        <div className="rounded-full bg-iconCard p-3 sm:p-4">
          <Crown size={36} className="fill-primary text-primary sm:size-10" />
        </div>
        <div className="space-y-1 text-center sm:space-y-2">
          <h3 className="text-lg tracking-wide sm:text-xl">
            Let&apos;s Work Together
          </h3>
          <h5 className="text-xs tracking-wide text-lightText sm:text-sm">
            Let&apos;s Make Magic Happen Together!
          </h5>
        </div>
      </div>
      <div className="mt-6 grid w-full grid-flow-row-dense gap-3 px-0 pb-2 sm:mt-auto sm:gap-4 sm:px-4 sm:pb-4">
        <InteractiveHoverButton className="flex h-12 w-full items-center justify-center border-none bg-iconBg sm:h-16">
          <div className="flex items-center justify-center gap-2">
            <Mail className="text-primary" />
            <span className="text-sm sm:text-base">Email</span>
          </div>
        </InteractiveHoverButton>
        <InteractiveHoverButton className="flex h-12 w-full items-center justify-center border-none bg-iconBg sm:h-16">
          <div className="flex items-center justify-center gap-2">
            <Phone className="text-primary" />
            <span className="text-sm sm:text-base">Schedule a call</span>
          </div>
        </InteractiveHoverButton>
      </div>
    </div>
  );
};

export default ContactMe;
