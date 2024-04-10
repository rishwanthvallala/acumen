"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
        <Highlight className="font-extrabold text-5xl text-gray-900 dark:text-white">
          Our 
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">     Mentors</span>
        </Highlight>
    </HeroHighlight>
  );    
}
