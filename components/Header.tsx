import React, { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { people } from "@/data";

export function Header({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
}) {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className=// remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent // change rounded-full to rounded-lg
        // change  pr-2 pl-8 py-2 to px-10 py-5
        "flex !bg-transparent max-w-fit md:min-w-[70vw] lg: w-screen fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg items-center justify-center space-x-5"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <AnimatedTooltip items={people}/>
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="relativeitems-center flex space-x-1 text-neutral-100 hover:text-neutral-100"
          >
            <span className=" text-sm !cursor-pointer">
              {navItem.name}
            </span>
          </Link>
        ))}
         <button className="rounded-lg !cursor-pointer border  border-white border-1 rounded-md px-4 py-1 text-neutral-100">
            Download CV
          </button>
      </motion.div>
    </AnimatePresence>
  );
}
