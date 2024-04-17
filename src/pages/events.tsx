"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import SwiperCore, { Swiper as SwiperType } from "swiper";

import Navbar from "../app/components/ui/navbar";
import SwiperComponent from "../app/components/ui/swiper";
import "./globals.css";
import { BackgroundGradientDemo } from "../app/BackgroundGradientDemo";
import events from "../lib/events.json";
SwiperCore.use([EffectCards]);

export default function IndexPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Use useMediaQuery unconditionally to avoid React Hooks error
  const isPhone = useMediaQuery({ query: "(max-width: 768px)" });

  // Background images based on media query
  const backgroundImages = isPhone
    ? [
        "/1-bg-phn.jpg",
        "/2-bg-phn.jpg",
        "/3-bg-phn.jpg",
        "/4-bg-phn.png",
        "/5-bg-phn.jpg",
        "/6-bg-phn.png",
        "/7-bg-phn.jpg",
        "/8-bg-phn.jpg",
        "/9-bg-phn.jpg",
        "/10-bg-phn.jpg",
        "/11-bg-phn.jpg",
        "/12-bg-phn.jpg",
        "/13-bg-phn.png",
      ]
    : [
        "/1-bg.jpg",
        "/2-bg.jpg",
        "/3-bg.jpg",
        "/4-bg.jpg",
        "/5-bg.png",
        "/6-bg.jpg",
        "/7-bg.jpg",
        "/8-bg.jpg",
        "/9-bg.jpg",
        "/10-bg.jpg",
        "/11-bg.jpg",
        "/12-bg.jpg",
        "/13-bg.jpeg",
      ];
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImages[activeIndex]})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
  }, [activeIndex, backgroundImages]);
  const [selectedSlide, setSelectedSlide] = useState<number | null>(null);
  const handleSlideClick = (index: number) => {
    setSelectedSlide(index === selectedSlide ? null : index);
  };

  return (
    <div>
      <div className="sticky top-0 z-10000" style={{ zIndex: 10000 }}>
        <Navbar />
      </div>

      <div style={{ zIndex: 10 }}>
        <SwiperComponent
          events={events}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          selectedSlide={selectedSlide}
          setSelectedSlide={setSelectedSlide}
          handleSlideClick={handleSlideClick}
        />
      </div>

      <div onClick={() => handleSlideClick(activeIndex)}>
        <BackgroundGradientDemo text="View More" />
      </div>
    </div>
  );
}
