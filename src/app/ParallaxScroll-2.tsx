"use client";
import { ParallaxScroll } from "./components/ui/parallax-scroll";

export function ParallaxScrollDemo2() {
  const cards = [
    {
      id: 15,
      title: "Shivamani",
      description: "Event Coordinator",
      imageUrl: "/shivamani.jpg",
    },
    {
      id: 16,
      title: "Suryateja",
      description: "Event Coordinator",
      imageUrl: "/suryateja.jpg",
    },
    {
      id: 17,
      title: "Praneetha Balanagu",
      description: "Event Coordinator",
      imageUrl: "/praneetha.jpeg",
    },
    {
      id: 18,
      title: "Shriya Kiran",
      description: "Event Coordinator",
      imageUrl: "/shriya.jpeg",
    },
  ];

  return <ParallaxScroll cards={cards} />;
}
