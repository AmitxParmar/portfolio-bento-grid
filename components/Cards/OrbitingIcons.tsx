"use client";
import { Icons } from "../icons";
import { OrbitingCircles } from "../magicui/orbiting-circles";

export default function OrbitingIcons() {
  return (
    <div className="relative flex size-full min-h-[220px] min-w-[220px] flex-col items-center justify-center overflow-hidden lg:min-h-[200px] lg:min-w-[200px] 2xl:min-h-[300px] 2xl:min-w-[300px]">
      <div className="absolute inset-0 flex size-full items-center justify-center scale-75 2xl:scale-100">
        <OrbitingCircles iconSize={30} radius={80} className="2xl:radius-[160px] 2xl:iconSize-[40px]">
          <Icons.typeScript />
          <Icons.notion />
          <Icons.javaScript />
          <Icons.cursorAI />
          <Icons.html />
          <Icons.tailwind />
          <Icons.react />
        </OrbitingCircles>
        <OrbitingCircles iconSize={20} radius={50} reverse speed={2}>
          <Icons.typeScript />
          <Icons.javaScript />
          <Icons.openai />
          <Icons.nodejs />
          <Icons.express />
        </OrbitingCircles>
      </div>
    </div>
  );
}
