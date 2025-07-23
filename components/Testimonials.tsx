"use client";

import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { ShuffleText } from "./ui/ColourfulText";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 mt-15 md:mt-30">
      <p className=" text-white text-3xl text-center p-3">
        Kind words from {" "}
        <ShuffleText text="satisfied clients"/>
      </p>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[70vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
