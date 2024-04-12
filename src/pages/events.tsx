"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";
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
import ModalComponent from "../app/modal";
import { BackgroundGradientDemo } from "../app/BackgroundGradientDemo";
import "./globals.css";

SwiperCore.use([EffectCards]);
const images = [
  im1,
  im2,
  im3,
  im4,
  im5,
  im6,
  im7,
  im8,
  im9,
  im10,
  im11,
  im12,
];


export default function IndexPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use useMediaQuery unconditionally to avoid React Hooks error
  const isClient = typeof window !== 'undefined';
  const isPhone = isClient ? useMediaQuery({ query: "(min-width: 768px)" }) : false;

  // Background images based on media query
  const backgroundImages = isPhone
    //? [im1.src, im2.src, im3.src, im4.src, digil.src, im6.src, im7.src, im8.src, im9.src, im10.src, im11.src, im12.src]
    //: [im1.src, im2.src, im3.src, prompt.src, digi.src, hal.src, vr.src, mp.src, crc.src, im10.src, im11.src, im12.src, xo.src];
    ?[im1, im2, im3, im4, digil, im6, im7, im8, im9, im10, im11, im12, im13]
    : [im1, im2, im3, prompt, digi, hal, vr, mp, crc, im10, im11, im12, xo];

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImages[activeIndex]})`;
  }, [activeIndex, backgroundImages]);

  return (
    <div>
      <Navbar />
      <div className="z-1">
        <SwiperComponent images={images.map(image => image.src )} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <div className="absolute z-9999">
        <ModalComponent isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} selectedIndex={activeIndex} />
      </div>
      <div className="text-center z-9999" onClick={() => setIsModalOpen(true)}> 
        <BackgroundGradientDemo text="View More" />
      </div>
    </div>
  );
};