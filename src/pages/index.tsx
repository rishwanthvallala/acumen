"use client";
import { HeroParallaxDemo } from "../app/parallax-hero-page";
import { InfiniteMovingCardsDemo } from "../app/InfiniteScroll";
import {AnimatedTooltipPreview} from "../app/me";
import { BackgroundGradientDemo } from "../app/BackgroundGradientDemo";
import { HeroHighlightDemo } from "../app/HeroHighlightDemo";
import  ImageGalleryDemo  from "../app/ImageGalleryDemo";
import Navbar from "@/app/components/ui/navbar";
import Link from "next/link";
import "./globals.css";


export default function Landing() {
  return (
    <>
        <Navbar />
        <HeroParallaxDemo />

        <Link href="/events">
          <BackgroundGradientDemo text="Explore Events" />
        </Link>
        <HeroHighlightDemo part1="Our" part2="Mentors" />
        <InfiniteMovingCardsDemo />
        <HeroHighlightDemo part1="The" part2="coordinators" />
        <ImageGalleryDemo />
        <AnimatedTooltipPreview />

    </>
  );
}