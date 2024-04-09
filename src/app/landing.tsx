"use client";
import { HeroParallaxDemo } from "./parallax-hero-page";
import { InfiniteMovingCardsDemo } from "./InfiniteScroll";
import { HoverBorderGradientDemo } from "./viewmore";

export default function Landing() {
  return (
    <>
        <HeroParallaxDemo />
        <HoverBorderGradientDemo />
        <h1 className="mt-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Our <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Mentors</span></h1> 
        <InfiniteMovingCardsDemo />
    </>
  );
}