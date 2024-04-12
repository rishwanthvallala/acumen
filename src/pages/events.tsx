"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation } from "swiper/modules";
import SwiperCore, { Swiper as SwiperType } from "swiper";

import im1 from "../imgs/1.png";
import im2 from "../imgs/2.png";
import im3 from "../imgs/3.png";
import im4 from "../imgs/4.png";
import im5 from "../imgs/5.png";
import im6 from "../imgs/6.png";
import im7 from "../imgs/7.png";
import im8 from "../imgs/8.png";
import im9 from "../imgs/9.png";
import im10 from "../imgs/10.png";
import im11 from "../imgs/11.png";
import im12 from "../imgs/12.png";
import im13 from "../imgs/13.png";


import digi from "../imgs/splash.jpg";
import digil from "../imgs/lapsplah.png";
import hal from "../imgs/hal2.png";
import prompt from "../imgs/prompt2.png";
import vr from "../imgs/vr3.png";
import mp from "../imgs/map5.jpg";
import crc from "../imgs/crc3.jpg";
import xo from "../imgs/xo1.png";

import Navbar from "../app/components/ui/navbar";
import SwiperComponent from "../app/components/ui/swiper";
import "./globals.css";

SwiperCore.use([EffectCards]);
const events = [
  {
    event_name: "Event 1",
    event_description: "Description 1",
    event_timings: "Timings 1",
    event_venue: "Venue 1",
    event_image: im1.src,
  },
  {
    event_name: "Event 2",
    event_description: "Description 2",
    event_timings: "Timings 2",
    event_venue: "Venue 2",
    event_image: im2.src,
  },
  {
    event_name: "Event 3",
    event_description: "Description 3",
    event_timings: "Timings 3",
    event_venue: "Venue 3",
    event_image: im3.src,
  },
  {
    event_name: "Event 4",
    event_description: "Description 4",
    event_timings: "Timings 4",
    event_venue: "Venue 4",
    event_image: im4.src,
  },
  {
    event_name: "Event 5",
    event_description: "Description 5",
    event_timings: "Timings 5",
    event_venue: "Venue 5",
    event_image: im5.src,
  },
  {
    event_name: "Event 6",
    event_description: "Description 6",
    event_timings: "Timings 6",
    event_venue: "Venue 6",
    event_image: im6.src,
  },
  {
    event_name: "Event 7",
    event_description: "Description 7",
    event_timings: "Timings 7",
    event_venue: "Venue 7",
    event_image: im7.src,
  },
  {
    event_name: "Event 8",
    event_description: "Description 8",
    event_timings: "Timings 8",
    event_venue: "Venue 8",
    event_image: im8.src,
  },
  {
    event_name: "Event 9",
    event_description: "Description 9",
    event_timings: "Timings 9",
    event_venue: "Venue 9",
    event_image: im9.src,
  },
  {
    event_name: "Event 10",
    event_description: "Description 10",
    event_timings: "Timings 10",
    event_venue: "Venue 10",
    event_image: im10.src,
  },
  {
    event_name: "Event 11",
    event_description: "Description 11",
    event_timings: "Timings 11",
    event_venue: "Venue 11",
    event_image: im11.src,
  },
  {
    event_name: "Event 12",
    event_description: "Description 12",
    event_timings: "Timings 12",
    event_venue: "Venue 12",
    event_image: im12.src,
  },
  {
    event_name: "Event 13",
    event_description: "Description 13",
    event_timings: "Timings 13",
    event_venue: "Venue 13",
    event_image: im13.src,
  }
];

export default function IndexPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use useMediaQuery unconditionally to avoid React Hooks error
   const isPhone = useMediaQuery({ query: "(max-width: 768px)" });


  // Background images based on media query
  const backgroundImages = isPhone
    ? [im1.src, im2.src, im3.src, im4.src, digil.src, im6.src, im7.src, im8.src, im9.src, im10.src, im11.src, im12.src]
    : [im1.src, im2.src, im3.src, prompt.src, digi.src, hal.src, vr.src, mp.src, crc.src, im10.src, im11.src, im12.src, xo.src];

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImages[activeIndex]})`;
  }, [activeIndex, backgroundImages]);

  return (
    <div>
      <Navbar />
      <SwiperComponent events={events} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};