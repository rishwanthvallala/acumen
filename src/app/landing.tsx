"use client";
import { HeroParallaxDemo } from "./parallax-hero-page";
import { InfiniteMovingCardsDemo } from "./InfiniteScroll";
import {AnimatedTooltipPreview} from "./me";
import { BackgroundGradientDemo } from "./BackgroundGradientDemo";
import { HeroHighlightDemo } from "./HeroHighlightDemo";
import  ImageGalleryDemo  from "./ImageGalleryDemo";

import "./globals.css";


export default function Landing() {
  return (
    <>
        <HeroParallaxDemo />
        <BackgroundGradientDemo />
        <HeroHighlightDemo part1="Our" part2="Mentors" />
        <InfiniteMovingCardsDemo />
        <HeroHighlightDemo part1="The" part2="coordinators" />
        <ImageGalleryDemo />
        <AnimatedTooltipPreview />

    </>
  );
}