"use client";
import "./globals.css";

import { cn } from "../app/utils/cn";
import { ParallaxScrollDemo } from "../app/ParallaxScroll";
import { Navbar } from "../app/components/ui/navbar";

export default function About() {
  return (
    <>
        <Navbar />
        <h1 className="mt-16 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Meet the <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Crew</span></h1>
        <ParallaxScrollDemo />
    </>
  );
}
