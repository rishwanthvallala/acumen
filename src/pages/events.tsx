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
import HomePage from "../app/components/ui/homepage";

SwiperCore.use([EffectCards]);

interface PopupProps {
  onClose: () => void; // Define the type of onClose prop
}

function Popup({ onClose }: PopupProps) {
  // Specify the type of onClose in the function parameters
  return (
    <div className="popup-overlay">
      <div className="popup">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="popup-content">
          <p>Events Description</p>
          <p>Event Coordinator : xyz</p>
          <p>Phone no: 1223456</p>
          <button className="register-button">Register Now</button>
        </div>
      </div>
    </div>
  );
}


export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  // Array of image paths
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


  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  const isPhone = useMediaQuery({ query: "(min-width: 768px)" });
  const backgroundImages = isPhone
    ? [im1, im2, im3, im4, digil, im6, im7, im8, im9, im10, im11, im12]
    : [im1, im2, im3, prompt, digi, hal, vr, mp, crc, im10, im11, im12, xo];
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImages[activeIndex]})`;
  }, [activeIndex, backgroundImages]);

  return (
    <div>
      <Navbar />
      <Swiper
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
        updateOnWindowResize={true}
        navigation={true}
        modules={[Navigation]}
        onRealIndexChange={(swiper: SwiperType) =>
          setActiveIndex(swiper.realIndex)
        }
        autoplay={{
          disableOnInteraction: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="swiper-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button onClick={openPopup}>Show More</button>
        {showPopup && <Popup onClose={closePopup} />}
      </div>
    </div>
  );
}