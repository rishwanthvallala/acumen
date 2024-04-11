"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";

export function HeroHighlightDemo({ part1, part2 }: { part1: string, part2: string }) {
  return (
    <HeroHighlight >
        <Highlight className="font-extrabold text-3xl lg:text-5xl text-gray-900 dark:text-white">
            {part1 + " "} 
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"> 
            {part2}
          </span>
        </Highlight>
    </HeroHighlight>
  );
}

export default HeroHighlightDemo;