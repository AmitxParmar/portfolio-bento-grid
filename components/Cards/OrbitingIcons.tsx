"use client";
import { Icons } from "../icons";
import { OrbitingCircles } from "../magicui/orbiting-circles";

export default function OrbitingIcons() {
  return (
    <div className="relative flex size-full min-h-[300px] min-w-[300px] flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex size-full items-center justify-center">
        <OrbitingCircles iconSize={40}>
          <Icons.typescript />
          <Icons.notion />
          <Icons.javaScript />
          <Icons.cursorAI />
          <Icons.html />
          <Icons.tailwind />
          <Icons.react />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
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
