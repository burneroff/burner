"use client"
import { About } from "@/components/About";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import { Changelog } from "@/components/Changelog";
import { navItems } from "@/data";

export default function Home() {
  return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className=" w-full">
        <Header navItems={navItems} />
        <Hero />
        <About/>
        <Testimonials/>
        <Changelog/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
