import React from "react";
import {
  IconNavigationDown,
  IconNavigationUp,
  IconSignLeft,
} from "@tabler/icons-react";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextHoverEffect } from "./ui/TextHoverEffect";
import { ContainerTextFlip } from "./ui/ContainerTextFlip";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { techStackItems } from "@/data";

export function Hero() {
  return (
    <div className="relative flex justify-center items-center h-[50rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased pt-20">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="h-10/12 relative flex justify-center items-center flex-col z-10 mx-auto w-full max-w-7xl">
        <p className="mt-5 uppercase tracking-widest text-md text-center text-white max-w-80 text-2xl">
          Hi! I&apos;m
        </p>
        <TextHoverEffect text="NIKITA KARABAN" />
        <ContainerTextFlip
          words={[
            "Full Stack Developer",
            "Front-end Developer",
            "Software Engineer",
          ]}
        />
        <p className="m-5 max-w-lg text-center text-base font-normal text-neutral-300">
          The self-proclaimed code wizard who can turn caffeine into beautiful
          websites. My passion for building clean and functional designs is only
          rivaled by my passion for finding the perfect GIF to express my
          excitement.
        </p>
        <p className="m-5 text-center text-xl font-normal text-neutral-300">
          Tech Stack
        </p>
        <div className="flex gap-5">
          <AnimatedTooltip className="!border-none" items={techStackItems} />
        </div>
        <a href="#about">
          <MagicButton
            title="What's my work is it"
            icon={<IconNavigationDown />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
}
