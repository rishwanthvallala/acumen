import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";


export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-screen flex items-center justify-center">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [

  {
    name:"M. V. Ramana",
    designation: "Principal",
    imgUrl: "/principal_SVR.jpg", // Add image URL
  },
  {
    name: "Mr. NELATURI DAVID RAJU",
    designation: "Faculty Coordinator",
    imgUrl: "/David Raju.jpg", // Add image URL
  },
  {
    name: "Mr. Srinivas Chakravarthy",
    designation: "Faculty Coordinator",
    imgUrl: "/Srinivas Chakravarthy.jpg", // Add image URL
  },
  {
    name: "Dr.K.Ram Mohan Rao",
    designation: "HOD, IT",
    imgUrl: "/HOD.jpg", // Add image URL
  },
  {
    name: "Ms. CHITTEPU SIREESHA",
    designation: "Faculty Coordinator",
    imgUrl: "/Sireesha.jpg", // Add image URL
  }
];
