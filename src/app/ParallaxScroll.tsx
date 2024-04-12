"use client";
import { ParallaxScroll } from "./components/ui/parallax-scroll";
import image1 from "../ppl-imgs/manoj.jpg";
import image2 from "../ppl-imgs/bhanu.jpg";
import image3 from "../ppl-imgs/rishi.jpg";
import image4 from "../ppl-imgs/srinithi.jpg";
import image5 from "../ppl-imgs/shahnawaz.jpg";
import image6 from "../ppl-imgs/Phani Meghana.jpg";
import image7 from "../ppl-imgs/abhinay.jpg";
import image8 from "../ppl-imgs/ashish.jpg";
import image9 from "../ppl-imgs/Charan Sai.jpg";
import image10 from "../ppl-imgs/lokesh.jpg";
import image11 from "../ppl-imgs/rahul.jpg";
import image12 from "../ppl-imgs/Revanth.jpg";
import image13 from "../ppl-imgs/Rishika M.jpg";
import image14 from "../ppl-imgs/Rishika R.jpg";
import image15 from "../ppl-imgs/shivamani.jpg";
import image16 from "../ppl-imgs/suryateja.jpg";



export function ParallaxScrollDemo() {
  const cards = [
    {
        id: 1,
        title: "Manoj",
        description: "Tech Head",
        imageUrl: image1,
    },
    {
        id: 2,
        title: "Bhanu",
        description: "Dev Head",
        imageUrl: image2,
    },
    {
        id: 3,
        title: "Rishi",
        description: "Dev Head",
        imageUrl: image3,
    },
    {
        id: 4,
        title: "Srinithi",
        description: "Marketing Head",
        imageUrl: image4,
    },
    {
        id: 5,
        title: "Shahnawaz",
        description: "Marketing Head",
        imageUrl: image5,
    },
    {
        id: 6,
        title: "Phani Meghana",
        description: "Marketing Head",
        imageUrl: image6,
    },
    {
        id: 7,
        title: "Abhinay",
        description: "Event Coordinator",
        imageUrl: image7,
    },
    {
        id: 8,
        title: "Ashish",
        description: "Event Coordinator",
        imageUrl: image8,
    },
    {
        id: 9,
        title: "Charan Sai",
        description: "Event Coordinator",
        imageUrl: image9,
    },
    {
        id: 10,
        title: "Lokesh",
        description: "Event Coordinator",
        imageUrl: image10,
    },
    {
        id: 11,
        title: "Rahul",
        description: "Event Coordinator",
        imageUrl: image11,
    },
    {
        id: 12,
        title: "Revanth",
        description: "Event Coordinator",
        imageUrl: image12,
    },
    {
        id: 13,
        title: "Rishika M",
        description: "Event Coordinator",
        imageUrl: image13,
    },
    {
        id: 14,
        title: "Rishika R",
        description: "Event Coordinator",
        imageUrl: image14,
    },
    {
        id: 15,
        title: "Shivamani",
        description: "Event Coordinator",
        imageUrl: image15,
    },
    {
        id: 16,
        title: "Suryateja",
        description: "Event Coordinator",
        imageUrl: image16,
    },
  ];

  return <ParallaxScroll cards={cards} />;
}



