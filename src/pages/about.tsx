"use client";
import "./globals.css";

import { ParallaxScrollDemo } from "../app/ParallaxScroll";
import { Navbar } from "../app/components/ui/navbar";

export default function About() {
  return (
    <>
      <div className="z-1000 top-0 sticky" style={{ zIndex: 1000 }}>
        <Navbar />
      </div>
      <h1 className="mt-16 text-5xl  font-extrabold leading-none tracking-tight text-gray-300 md:text-5xl lg:text-6xl dark:text-white text-center">
        Meet the{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Crew
        </span>
      </h1>

      <div className="z-10" style={{ zIndex: 10 }}>
        <ParallaxScrollDemo />
      </div>
    </>
  );
}
