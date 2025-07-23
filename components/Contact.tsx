import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/DraggableCard";

import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { IconMail } from "@tabler/icons-react";
import { itemsChangelog } from "@/data";

export function Contact() {

  return (
    <div id="contact" >
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-200 md:text-4xl ">
       Open to work &#128522;
      </p>
      <a href="mailto:burneroff@outlook.com" className="mt-16">
         <MagicButton
          title={"Get in touch"}
          icon={<IconMail />}
          position="right"
        />
        </a>
      {itemsChangelog.map((item, index) => (
        <DraggableCardBody className={item.className} key={index}>
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={300}
            className="pointer-events-none relative z-10 h-85 w-80 object-cover !border-none"
          />
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
    </div>
  );
}
