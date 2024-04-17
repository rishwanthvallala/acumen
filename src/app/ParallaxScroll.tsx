"use client";
import { title } from "process";
import { ParallaxScroll } from "./components/ui/parallax-scroll";

export function ParallaxScrollDemo() {
  const cards = [
    {
      id: 1,
      title: "Manoj",
      description: "Tech Head",
      imageUrl: "/manoj.jpg",
    },
    {
      id: 2,
      title: "Bhanu",
      description: "Dev Head",
      imageUrl: "/bhanu.jpg",
    },
    {
      id: 3,
      title: "Rishi",
      description: "Dev Head",
      imageUrl: "/rishi.jpg",
    },
    {
      id: 4,
      title: "Srinithi",
      description: "Marketing Head",
      imageUrl: "/srinithi.jpg",
    },
    {
      id: 5,
      title: "Shahnawaz",
      description: "Marketing Head",
      imageUrl: "/shahnawaz.jpg",
    },
    {
      id: 6,
      title: "Phani Meghana",
      description: "Marketing Head",
      imageUrl: "/meghana.jpg",
    },
    {
      id: 7,
      title: "Abhinay",
      description: "Event Coordinator",
      imageUrl: "/abhinay.jpg",
    },
    {
      id: 8,
      title: "Ashish",
      description: "Event Coordinator",
      imageUrl: "/ashish.jpg",
    },
    {
      id: 9,
      title: "Charan Sai",
      description: "Event Coordinator",
      imageUrl: "/charan.jpg",
    },
    {
      id: 10,
      title: "Lokesh",
      description: "Event Coordinator",
      imageUrl: "/lokesh.jpg",
    },
    {
      id: 11,
      title: "Rahul",
      description: "Event Coordinator",
      imageUrl: "/rahul.jpg",
    },
    {
      id: 12,
      title: "Revanth",
      description: "Event Coordinator",
      imageUrl: "/revanth.jpg",
    },
    {
      id: 13,
      title: "Rishika M",
      description: "Event Coordinator",
      imageUrl: "/rishika_m.jpg",
    },
    {
      id: 14,
      title: "Rishika R",
      description: "Event Coordinator",
      imageUrl: "/rishika_r.jpg",
    },
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
    {
      id: 19,
      title: "S.Sathwik Reddy",
      description: "Event Coordinator",
      imageUrl: "/s.sathwik.jpeg",
    },
    {
      id: 20,
      title: "Karthik",
      description: "Event Coordinator",
      imageUrl: "/Karthik.jpeg",
    },
    {
      id: 21,
      title: "Sreshta Reddy",
      description: "Event Coordinator",
      imageUrl: "/sreshta.jpeg",
    },
    {
      id: 22,
      title: "Madhav Nlv",
      description: "Event Coordinator",
      imageUrl: "/madhav.jpeg",
    },
    {
      id: 23,
      title: "Sai Rishik",
      description: "Event Coordinator",
      imageUrl: "/rishik.jpg",
    },
    {
      id: 24,
      title: "Raheem Mirza",
      description: "Event Coordinator",
      imageUrl: "/raheem.jpeg",
    },
  ];

  return <ParallaxScroll cards={cards} />;
}
