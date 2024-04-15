"use client";
import React from "react";
import { HeroParallax } from "./components/ui/hero-parallax";
import { title } from "process";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Webathon",
    link: "https://unstop.com/o/JkWTCbG?lb=fqZDoJ0",
    thumbnail:
      "/1.webp",
  },
  {
    title: "Paper Presentation",
    link: "https://forms.gle/7L4WohPaR1MKVwJ97",
    thumbnail:
      "/2.webp",
  },
  {
    title: "Project Expo",
    link: "https://forms.gle/DzuYzVgkCgSFwvbK6",
    thumbnail:
      "/3.webp",
  },

  {
    title: "Beyond the Prompt",
    link: "https://forms.gle/nrxeRcGxUHTa33ey6",
    thumbnail:
      "/4.webp",
  },
  {
    title: "IPL Auction",
    link: "https://forms.gle/dk6tVkRhroHVunFa6",
    thumbnail:"/5.webp",
  },
  {

      title: "BGMI Tournament",
      link: "https://forms.gle/noDS377jFVUWpLgL9",
      thumbnail:
        "/6.webp",
  },

  {

      title: "Scary House",
      link: "",
      thumbnail:
        "/7.webp",
  },

  {
    title: "Digital Art",
    link: "",
    thumbnail:
      "/8.webp",
  },
  {
    title: "VR Zone",
    link: "https://forms.gle/Q5299tDmrde1vTqN9",
    thumbnail:
      "/9.webp",

  },
  {
    title: "Geo Guesser",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfotkcbV9pFURpDlBhPjJbOaBZl4mN0BrtTzU-uLH2PWE-SYQ/viewform",
    thumbnail:
      "/10.webp",
  },
  {
    title: "Tech Tac Toe",
    link: "",
    thumbnail:
      "/11.webp",
  },
  {
    title: "Console Convergence",
    link: "",
    thumbnail:
      "/12.webp",
  },

  {
    title: "Tug wars",
    link: "",
    thumbnail:
      "/13.webp",
  },
  {
    title: "Face Painting",
    link:"",
    thumbnail:"/14.webp"
  }
];
