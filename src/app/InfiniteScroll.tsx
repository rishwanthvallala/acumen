import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="mt-16 lg:mt-16 mb-28 flex items-center justify-center">
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
    name: "S. V. Ramana",
    designation: "Principal",
    imgUrl: "/principal_SVR.jpg",
  },
  {
    name: "Mr. NELATURI DAVID RAJU",
    designation: "Faculty Coordinator",
    imgUrl: "/David Raju.jpeg",
  },
  {
    name: "Mr. Srinivas Chakravarthy",
    designation: "Faculty Coordinator",
    imgUrl: "/Srinivas Chakravarthy.jpg", 
  },
  {
    name: "Dr.K.Ram Mohan Rao",
    designation: "HOD, IT",
    imgUrl: "/HOD.jpg", 
  },
];
