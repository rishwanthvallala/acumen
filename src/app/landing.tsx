"use client";
import { HeroParallaxDemo } from "./parallax-hero-page";
import { InfiniteMovingCardsDemo } from "./InfiniteScroll";
import {AnimatedTooltipPreview} from "./me";
import { BackgroundGradientDemo } from "./BackgroundGradientDemo";
import { HeroHighlightDemo } from "./HeroHighlightDemo";

import "./globals.css";


export default function Landing() {
  return (
    <>
        <HeroParallaxDemo />
        <BackgroundGradientDemo />
        <HeroHighlightDemo />
        <InfiniteMovingCardsDemo />
        <AnimatedTooltipPreview />
    </>
  );
}