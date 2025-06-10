"use client";

import { Crown, Mail, Phone } from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const ContactMe = () => {
  return (
    <div className="col-span-3 flex h-full flex-col rounded-lg border border-iconBg bg-cardBg p-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="rounded-full bg-iconCard p-4">
          <Crown size={40} className="fill-primary text-primary" />
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-xl tracking-wide">Let&apos;s Work Together</h3>
          <h5 className="text-sm tracking-wide text-lightText">
            Let&apos;s Make Magic Happen Together!
          </h5>
        </div>
      </div>
      <div className="mt-auto grid w-full grid-flow-row-dense gap-4 px-4 pb-4">
        <InteractiveHoverButton className="flex h-16 w-full items-center justify-center border-none bg-iconBg">
          <div className="flex items-center justify-center gap-2">
            <Mail className="text-primary" />
            <span>Email</span>
          </div>
        </InteractiveHoverButton>
        <InteractiveHoverButton className="flex h-16 w-full items-center justify-center border-none bg-iconBg">
          <div className="flex items-center justify-center gap-2">
            <Phone className="text-primary" />
            <span>Schedule a call</span>
          </div>
        </InteractiveHoverButton>
      </div>
    </div>
  );
};

export default ContactMe;
