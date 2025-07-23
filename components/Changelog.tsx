import Image from "next/image";
import main from "@/public/main_rias.png"
import ports from "@/public/ports_rias.png"
import admin from "@/public/admin_rias.png"
import osmotr from "@/public/osmotr_rias.png"
import captainshow from "@/public/captain_show.png"
import palmreader from "@/public/palmreader.png"
import { Timeline } from "./ui/Timeline";

export function Changelog() {
  const data = [
    {
      title: "Fullstack developer",
      content: (
        <div>
          <p className="mb-5 text-2xl md:text-3xl text-white font-bold dark:text-neutral-200">
            Administration of Water Transport |{" "}
            <span className="font-normal">August 2023 — Present</span>
          </p>
          <div className="mb-8 flex gap-5 flex-col">
                <div className="flex items-center gap-2 text-md text-neutral-200  md:text-base">
              &ndash; Developed a data collection and visualization system with PDF/Excel report generation
            </div>
            <div className="text-md text-neutral-200  md:text-md">
              &ndash; Created a module for tracking port operations across 7 ports
            </div>
            <div className="text-md text-neutral-200  md:text-md">
              &ndash; Implemented statistical data distribution
            </div>
            <div className="text-md text-neutral-200  md:text-md">
              &ndash; Established data restrictions between different user types
            </div>
               <div className="text-md text-neutral-200  md:text-md">
              &ndash; Added user action logging
            </div>
          </div>
          <p className="mb-5 text-xl font-bold text-neutral-200 md:text-xl">
            Stack:{" "}
              <span className="font-normal">
              HTML, CSS, JavaScript, TypeScript, React, Redux, Express,
              PostgreSQL
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={main}
              alt="main rias"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={admin}
              alt="admin panel rias"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
             <Image
              src={ports}
              alt="ports rias"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
           <Image
              src={osmotr}
              alt="ports rias"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Frontend developer",
      content: (
        <div>
          <p className="mb-5 text-2xl md:text-3xl font-bold text-white">
            Captain Show |{" "}
            <span className="font-normal">September 2022 — July 2023</span>
          </p>
          <div className="mb-5 flex gap-5 flex-col">
            <div className="flex items-center gap-2 text-md text-neutral-200  md:text-base">
              &ndash; Developed 5 high-performance SSR landing pages for mobile
              applications, ensuring fast load times and SEO optimization.
            </div>
            <div className="text-md text-neutral-200  md:text-md">
              &ndash; Collaborated with designers to
              implement pixel-perfect UIs with interactive elements.
            </div>
          </div>
          <p className="mb-5 text-xl font-bold text-neutral-200 md:text-xl">
            Stack:{" "}
             <span className="font-normal">
              HTML, CSS, JavaScript, TypeScript, React, Next.js, Mantine
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={captainshow}
              alt="captain show"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={palmreader}
              alt="docly"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Software Engineer",
      content: (
        <div>
          <p className="mb-5 text-2xl md:text-3xl font-bold text-white">
            Self-employed | <span className="font-normal">November 2021</span>
          </p>
          <div className="mb-5 flex gap-5 flex-col">
            <div className="flex items-center gap-2 text-md text-neutral-200  md:text-md dark:text-neutral-300">
              &ndash; Developed automation tools for the crypto space:
            </div>
            <div className="ml-7 flex items-center gap-2 text-md text-neutral-200  md:text-md dark:text-neutral-300">
              Form parsing and autofill (Puppeteer).
            </div>
            <div className="ml-7 flex items-center gap-2 text-md text-neutral-200  md:text-md dark:text-neutral-300">
              Solana Blockchain integration (transactions via web3.js).
            </div>
          </div>
          <p className="mb-2 text-xl font-bold text-neutral-200 md:text-xl">
            Stack:{" "}
            <span className="font-normal">
              {" "}
              HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind, Mantine,
              Puppeteer, Solana/web3.js
            </span>
          </p>
        </div>
      ),
    },
    {
      title: "Student",
      content: (
        <div>
          <p className="mb-5 text-xl md:text-3xl font-bold text-white">
            BSUIR |{" "}
            <span className="font-normal">September 2019</span>
          </p>
          <div className="flex items-center gap-2 text-md text-neutral-200  md:text-md dark:text-neutral-300">
            &ndash; I've learned algorithms, data structures, object-oriented
            programming, database systems (SQL\NoSQL), and web
            development fundamentals. I've also gained proficiency in Python and
            Java while understanding core software engineering principles.
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip mb-40" id="changelog">
      <Timeline data={data} />
    </div>
  );
}

