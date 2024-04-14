"use client";
import React, {  useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import SwiperCore, { Swiper as SwiperType } from "swiper";



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
    event_image: "/1.png",
    event_link: "https://unstop.com/o/JkWTCbG?lb=fqZDoJ0"
  },
  {
    event_name: "Paper Presentation",
    event_description: "Description 2",
    event_timings: "Timings 2",
    event_venue: "Venue 2",
    event_image: "/2.png",
    event_link: "https://forms.gle/7L4WohPaR1MKVwJ97"
  },
  {
    event_name: "Project Expo",
    event_description: "Description 3",
    event_timings: "Timings 3",
    event_venue: "Venue 3",
    event_image: "/3.png",
    event_link: "https://forms.gle/DzuYzVgkCgSFwvbK6"
  },
  {
    event_name: "Beyond the Prompt",
    event_description: "Description 4",
    event_timings: "Timings 4",
    event_venue: "Venue 4",
    event_image: "/4.png",
    event_link:"https://forms.gle/nrxeRcGxUHTa33ey6"
  },
  {
    event_name: "Digital Art",
    event_description: "Description 5",
    event_timings: "Timings 5",
    event_venue: "Venue 5",
    event_image: "/5.png",

  },
  {
    event_name: "Scary House",
    event_description: "Description 6",
    event_timings: "Timings 6",
    event_venue: "Venue 6",
    event_image: "/6.png",
  },
  {
    event_name: "VR Zone",
    event_description: "Description 7",
    event_timings: "Timings 7",
    event_venue: "Venue 7",
    event_image: "/7.png",
    event_link: "https://forms.gle/Q5299tDmrde1vTqN9"
  },
  {
    event_name: "Geo Guesser",
    event_description: "Description 8",
    event_timings: "Timings 8",
    event_venue: "Venue 8",
    event_image: "/8.png",
    event_link:"https://docs.google.com/forms/d/e/1FAIpQLSfotkcbV9pFURpDlBhPjJbOaBZl4mN0BrtTzU-uLH2PWE-SYQ/viewform"
  },
  {
    event_name: "IPL Auction",
    event_description: "Description 9",
    event_timings: "Timings 9",
    event_venue: "Venue 9",
    event_image: "/9.png",
    event_link:"https://forms.gle/dk6tVkRhroHVunFa6"
  },
  {
    event_name: "BGMI Tournament",
    event_description: "Description 10",
    event_timings: "Timings 10",
    event_venue: "Venue 10",
    event_image: "/10.png",
    event_link:"https://forms.gle/noDS377jFVUWpLgL9"
  },
  {
    event_name: "Infinite Words",
    event_description: "Description 11",
    event_timings: "Timings 11",
    event_venue: "Venue 11",
    event_image: "/11.png",
  },
  {
    event_name: "Play Station",
    event_description: "Description 12",
    event_timings: "Timings 12",
    event_venue: "Venue 12",
    event_image: "/12.png",
  },
  {
    event_name: "Tech Tac Toe",
    event_description: "Description 13",
    event_timings: "Timings 13",
    event_venue: "Venue 13",
    event_image: "/13.png",
  }
];

export default function IndexPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use useMediaQuery unconditionally to avoid React Hooks error
   const isPhone = useMediaQuery({ query: "(max-width: 768px)" });


  // Background images based on media query
  const backgroundImages = isPhone
    ? ["/1-bg-phn.jpg", "/2-bg-phn.jpg", "/3-bg-phn.jpg", "/4-bg-phn.png", "/5-bg-phn.jpg", "/6-bg-phn.png", "/7-bg-phn.jpg", "/8-bg-phn.jpg", "/9-bg-phn.jpg", "/10-bg-phn.jpg", "/11-bg-phn.jpg", "/12-bg-phn.jpg", "/13-bg-phn.png"]
    : ["/1-bg.jpg", "/2-bg.jpg", "/3-bg.jpg", "/4-bg.jpg", "/5-bg.png", "/6-bg.jpg", "/7-bg.jpg", "/8-bg.jpg", "/9-bg.jpg", "/10-bg.jpg", "/11-bg.jpg", "/12-bg.jpg", "/13-bg.jpeg"];
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImages[activeIndex]})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center';
  }, [activeIndex, backgroundImages]);

  return (
    <div>
      <Navbar />
      <SwiperComponent events={events} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};