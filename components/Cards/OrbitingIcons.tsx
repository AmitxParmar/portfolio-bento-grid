"use client";
import { Icons } from "../icons";
import { OrbitingCircles } from "../magicui/orbiting-circles";

export default function OrbitingIcons() {
  return (
    <div className="relative flex size-full flex-col items-center justify-center overflow-hidden">
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
  );
}
