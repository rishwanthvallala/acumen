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
import vr4 from "../imgs/vr4.png";

import Navbar from "../app/components/ui/navbar";
import SwiperComponent from "../app/components/ui/swiper";


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



const IndexPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isClient = typeof window !== 'undefined'; // Check if running on client-side
  const isPhone = isClient ? useMediaQuery({ query: "(min-width: 768px)" }) : false; // Use useMediaQuery only on client-side
  const backgroundImages = isPhone
    ? [im1.src, im2.src, im3.src, im4.src, digil.src, im6.src, im7.src, im8.src, im9.src, im10.src, im11.src, im12.src]
    : [im1.src, im2.src, im3.src, prompt.src, digi.src, hal.src, vr.src, mp.src, crc.src, im10.src, im11.src, im12.src, xo.src];

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImages[activeIndex]})`;
  }, [activeIndex, backgroundImages]);

  return (
    <div>
      <Navbar />
      <SwiperComponent images={images.map(image => image.src )} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default IndexPage;