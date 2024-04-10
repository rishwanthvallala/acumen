"use client";
import React from "react";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="mt-20 mb-15 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>
        <p className="text-bold">Explore Events</p>
        </span>
      </HoverBorderGradient>
    </div>
  );
}
