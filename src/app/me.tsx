"use client";
import React from "react";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Rishwanth Vallala",
    designation: "Dev Head",
    image:
      "/rishi.jpg",
  },
  {
    id: 2,
    name: "Bhanu teja",
    designation: "Dev Head  ",
    image:
      "/bhanu.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full mt-16">
        <div >
            <p className="mr-8 text-gray-500 dark:text-gray-400 text-xl">
              Designed by    :
            </p>      
        </div>
        <AnimatedTooltip items={people} />
    </div>
  );
}
