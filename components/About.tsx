import { cn } from "@/lib/utils";
import React, { useCallback, useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconCopy,
  IconTableColumn,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { Meteors } from "./ui/Meteors";
import MagicButton from "./ui/MagicButton";

export function About() {
  return (
    <section id="about" className="pt-20">
      <p className="m-5 text-center text-4xl font-normal text-neutral-300 mb-10">
        My Approach
      </p>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const SkeletonOne = ({
  cardTitle,
  phase,
  des,
}: {
  cardTitle: string;
  phase: string;
  des?: string;
}) => {
  return (
    <Card title={cardTitle} des={des} icon={<AceternityIcon text={phase} />}>
      <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
      />
    </Card>
  );
};

const SkeletonTwo = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    const text = "burneroff@outlook.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  }, []);

  return (
    <div className="relative w-full h-full max-w-xl">
      <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl shadow-xl p-6">
        <h1 className="relative z-50 text-xl font-bold text-white">
          Do you want to start a project together?
        </h1>
        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<IconCopy />}
          position="left"
          handleClick={handleCopy}
        />
        <Meteors number={60} />
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="w-full h-full">
      <div
        className={cn(
          "group w-full h-full cursor-pointer overflow-hidden relative card rounded-md shadow-xl flex flex-col justify-end border border-transparent",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      ></div>
    </div>
  );
};

//components
const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3  text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3  text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
            className="text-center text-3xl 
    opacity-100 md:opacity-0 
    relative z-10 text-white mt-4 font-bold 
    md:group-hover/canvas-card:opacity-100 
    md:group-hover/canvas-card:text-white 
    md:group-hover/canvas-card:-translate-y-2 
    transition duration-200"
        >
          {title}
        </h2>
   <p
  className="text-sm 
    opacity-100 md:opacity-0 
    relative z-10 mt-4 text-center text-white 
    md:group-hover/canvas-card:opacity-100 
    md:group-hover/canvas-card:text-white 
    md:group-hover/canvas-card:-translate-y-2 
    transition duration-200"
>
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ text }: { text: string }) => {
  return (
    <div>
      <span
        className="hidden md:inline-flex  h-10 w-30 cursor-pointer items-center 
        justify-center rounded-full bg-black text-white backdrop-blur-3xl font-bold"
      >
        {text}
      </span>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const items = [
  {
    header: (
      <SkeletonOne
        cardTitle="Planning"
        phase="Phase 1"
        des=" We'll collaborate to map out your website's goals, target audience, 
          and key functionalities."
      />
    ),
    className: "md:col-span-1 p-0 m-5 md:m-0",
  },
  {
    header: (
      <SkeletonOne
        cardTitle="Development"
        phase="Phase 2"
        des=" I'll translate everything into functional code, building your website
          from the ground up"
      />
    ),
    className: "md:col-span-1 p-0 m-5 md:m-0",
  },
  {
    header: (
      <SkeletonOne
        cardTitle="Launch"
        phase="Phase 3"
        des="This is where the magic happens! Now you can make your customers happy :)"
      />
    ),
    className: "md:col-span-1 p-0 m-5 md:m-0",
  },
  {
    header: <SkeletonTwo />,
    className: "md:col-span-2 p-0 m-5 md:m-0",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    header: <SkeletonThree />,
    className: "hidden md:block md:col-span-1 p-0",
  },
];
