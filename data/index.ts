import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandTelegram } from "@tabler/icons-react";
import evgeniy from "@/public/evgeniy.jpg";
import anton from "@/public/anton.jpg"
import dmitry from "@/public/dmitry.jpg"
import js from "@/public/stack/js.svg";
import css from "@/public/stack/css.svg";
import nextjs from "@/public/stack/nextjs.svg";
import html from "@/public/stack/html5.svg";
import tailwind from "@/public/stack/tailwind.svg";
import react from "@/public/stack/reactjs.svg";
import ts from "@/public/stack/ts.svg";
import burner from "@/public/burner4.png";
import jobOffer from "@/public/joboffer.png";

export const people = [
  {
    id: 1,
    name: "Nikita Karaban",
    designation: "Software Engineer",
    image: burner,
  },
];

export const navItems = [
  { name: "Approach", link: "#about" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Changelog", link: "#changelog" },
  { name: "Contact", link: "#contact" },
];

export const techStackItems = [
  {
    id: 1,
    name: "HTML",
    image: html,
  },
  {
    id: 2,
    name: "CSS",
    image: css,
  },
  {
    id: 3,
    name: "JS",
    image: js,
  },
  {
    id: 4,
    name: "TYPESCRIPT",
    image: ts,
  },
  {
    id: 5,
    name: "NEXTJS",
    image: nextjs,
  },
  {
    id: 6,
    name: "REACT",
    image: react,
  },
  {
    id: 7,
    name: "TAILWIND",
    image: tailwind,
  },
  // {
  //   id: 8,
  //   name: "REDUX",
  //   image: redux,
  // },
];

export const testimonials = [
  {
    quote:
      "As Director of the Water Transport Administration, I highly recommend this Fullstack developer for their outstanding work on our River Information System (RIS). They delivered a robust, real-time solution with seamless backend integration and an intuitive admin interface – all while meeting strict regulatory requirements. Their technical expertise and professionalism resulted in a reliable system that significantly improved navigation safety and operational efficiency across our waterways.",
    name: "Dmitry Chumakevich",
    title: "Director of Administration of Water Transport ",
    img: dmitry,
  },
  {
    quote:
      "As a startup, we needed a developer who could build a blazing-fast SSR landing page without breaking the bank. This developer exceeded our expectations—delivering a pixel-perfect, mobile-optimized page with smooth animations and seamless backend functionality. Communication was excellent, deadlines were met, and the end result helped us boost conversions by 30%. Will definitely hire again!",
    name: "Anton Vegera",
    title: "Founder of YAAYA",
    img: anton,
  },
  {
    quote:
      "Working with this developer was an absolute pleasure! They delivered a high-performance SSR landing page that significantly improved our load times and SEO rankings. Their attention to detail, clean code, and ability to integrate seamlessly with our marketing tools made the project smooth from start to finish. Highly recommended for anyone needing fast, scalable, and visually appealing landing pages.",
    name: "Evgeny Kryukov",
    title: "General manager of Captain Show",
    img: evgeniy,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: IconBrandGithub,
    link: "https://github.com/burneroff",
  },
  {
    id: 2,
    icon: IconBrandLinkedin,
    link: "https://www.linkedin.com/in/burneroff/",
  },
  {
    id: 3,
    icon: IconBrandTelegram,
    link: "https://t.me/burner_off",
  },
];

export const itemsChangelog = [
    {
      title: "Job Offer",
      image: jobOffer,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Job Offer",
      image: jobOffer,
      className: "absolute top-60 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Job Offer",
      image: jobOffer,
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Job Offer",
      image: jobOffer,
      className: "absolute top-52 left-[55%] rotate-[10deg]",
    },
    {
      title: "Job Offer",
      image: jobOffer,
      className: "absolute top-30 right-[35%] rotate-[2deg]",
    },
    {
         title: "Job Offer",
      image: jobOffer,
      className: "absolute top-34 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Job Offer",
      image: jobOffer,
      className: "absolute top-18 left-[30%] rotate-[4deg]",
    },
  ];