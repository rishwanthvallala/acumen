"use client";
import React, {  useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import SwiperCore, { Swiper as SwiperType } from "swiper";

import im1 from "../posters/1.png";
import im2 from "../posters/2.png";
import im3 from "../posters/3.png";
import im4 from "../posters/4.png";
import im5 from "../posters/5.png";
import im6 from "../posters/6.png";
import im7 from "../posters/7.png";
import im8 from "../posters/8.png";
import im9 from "../posters/9.png";
import im10 from "../posters/10.png";
import im11 from "../posters/11.png";
import im12 from "../posters/12.png";
import im13 from "../posters/13.png";
/*
import im1bg from "../posters/1-bg.jpg";
import im2bg from "../posters/2-bg.jpg";
import im3bg from "../posters/3-bg.jpg";
import im4bg from "../posters/4-bg.png";
import im5bg from "../posters/5-bg.png";
import im6bg from "../posters/6-bg.png";
import im7bg from "../posters/7-bg.png";
import im8bg from "../posters/8-bg.png";  
import im9bg from "../posters/9-bg.jpg";
import im10bg from "../posters/10-bg.jpg";
import im11bg from "../posters/11-bg.jpg";
import im12bg from "../posters/12-bg.jpg";
import im13bg from "../posters/13-bg.png";
*/

import Navbar from "../app/components/ui/navbar";
import SwiperComponent from "../app/components/ui/swiper";
import "./globals.css";

SwiperCore.use([EffectCards]);
const events = [
  {
    event_name: "Webathon",
    event_description: "Description 1",
    event_timings: "Timings 1",
    event_venue: "Venue 1",
    event_image: im1.src,
    event_link: "https://unstop.com/o/JkWTCbG?lb=fqZDoJ0"
  },
  {
    event_name: "Paper Presentation",
    event_description: "Description 2",
    event_timings: "Timings 2",
    event_venue: "Venue 2",
    event_image: im2.src,
    event_link: "https://forms.gle/7L4WohPaR1MKVwJ97"
  },
  {
    event_name: "Project Expo",
    event_description: "Description 3",
    event_timings: "Timings 3",
    event_venue: "Venue 3",
    event_image: im3.src,
    event_link: "https://forms.gle/DzuYzVgkCgSFwvbK6"
  },
  {
    event_name: "Beyond the Prompt",
    event_description: "Description 4",
    event_timings: "Timings 4",
    event_venue: "Venue 4",
    event_image: im4.src,
    event_link:"https://forms.gle/nrxeRcGxUHTa33ey6"
  },
  {
    event_name: "Digital Link",
    event_description: "Description 5",
    event_timings: "Timings 5",
    event_venue: "Venue 5",
    event_image: im5.src,
    event_link: ""
  },
  {
    event_name: "Scary House",
    event_description: "Description 6",
    event_timings: "Timings 6",
    event_venue: "Venue 6",
    event_image: im6.src,
  },
  {
    event_name: "VR Zone",
    event_description: "Description 7",
    event_timings: "Timings 7",
    event_venue: "Venue 7",
    event_image: im7.src,
    event_link: "https://forms.gle/Q5299tDmrde1vTqN9"
  },
  {
    event_name: "Geo Guesser",
    event_description: "Description 8",
    event_timings: "Timings 8",
    event_venue: "Venue 8",
    event_image: im8.src,
    event_link:"https://docs.google.com/forms/d/e/1FAIpQLSfotkcbV9pFURpDlBhPjJbOaBZl4mN0BrtTzU-uLH2PWE-SYQ/viewform"
  },
  {
    event_name: "IPL Auction",
    event_description: "Description 9",
    event_timings: "Timings 9",
    event_venue: "Venue 9",
    event_image: im9.src,
    event_link:"https://forms.gle/dk6tVkRhroHVunFa6"
  },
  {
    event_name: "BGMI Tournament",
    event_description: "Description 10",
    event_timings: "Timings 10",
    event_venue: "Venue 10",
    event_image: im10.src,
    event_link:"https://forms.gle/noDS377jFVUWpLgL9"
  },
  {
    event_name: "Infinite Words",
    event_description: "Description 11",
    event_timings: "Timings 11",
    event_venue: "Venue 11",
    event_image: im11.src,
  },
  {
    event_name: "Play Station",
    event_description: "Description 12",
    event_timings: "Timings 12",
    event_venue: "Venue 12",
    event_image: im12.src,
  },
  {
    event_name: "Tech Tac Toe",
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


  /*/ Background images based on media query
  const backgroundImages = isPhone
    ? [im1.src, im2.src, im3.src, im4.src, im5.src, im6.src, im7.src, im8.src, im9.src, im10.src, im11.src, im12.src, im13.src]
    : [im1bg.src, im2bg.src, im3bg.src, im4bg.src, im5bg.src, im6bg.src, im7bg.src, im8bg.src, im9bg.src, im10bg.src, im11bg.src, im12bg.src, im13bg.src];
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImages[activeIndex]})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center';
  }, [activeIndex, backgroundImages]);*/

  return (
    <div>
      <Navbar />
      <SwiperComponent events={events} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};