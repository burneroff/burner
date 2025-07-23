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
import { IconMenu2 } from "@tabler/icons-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setIsMenuOpen(false); // Закрываем меню при скролле вниз
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
        className="flex !bg-transparent max-w-fit md:min-w-[70vw] lg: w-screen fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg items-center justify-center space-x-5"
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <AnimatedTooltip items={people} />

        {navItems.map(
          (
            navItem: {
              name: string;
              link: string;
            },
            idx: number
          ) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className="hidden md:!flex relativeitems-center flex space-x-1 text-neutral-100 hover:text-neutral-100"
            >
              <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          )
        )}
        <a
          href="/Nikita Karaban, Fullstack Developer.pdf"
          download="Nikita Karaban, Fullstack Developer.pdf"
          className="rounded-lg cursor-pointer border border-white border-1 rounded-md px-4 py-1 text-neutral-100 inline-block"
        >
          Download CV
        </a>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-neutral-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              <IconMenu2 />
            </motion.div>
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[4999] top-37 inset-x-0 mx-auto px-4 py-4 rounded-lg  !bg-transparent"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
              width: "calc(100% - 2rem)",
              margin: "0 1rem",
            }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`mobile-link=${idx}`}
                  href={navItem.link}
                  className="text-neutral-100 hover:text-neutral-100 py-2 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
