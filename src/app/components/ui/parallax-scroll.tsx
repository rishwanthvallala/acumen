import { useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const ParallaxScroll = ({
  cards,
  className,
}: {
  cards: any[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Check if window is defined before attaching event listener
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      // Remove event listener on component unmount
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const third = Math.ceil(cards.length / 3);
  let firstPartLength, secondPartLength;

  // Calculate the lengths of the first and second parts based on window width
  if (windowWidth < 768) {
    // If window width is less than 768 pixels, split the cards into two equal parts
    firstPartLength = Math.ceil(cards.length / 2);
    secondPartLength = cards.length - firstPartLength;
  } else {
    // Otherwise, split the cards into three equal parts
    firstPartLength = third;
    secondPartLength = third;
  }

  let firstPart,
    secondPart,
    thirdPart = [];

  // Slice the cards array for the first and second parts based on calculated lengths
  if (windowWidth < 768) {
    // If window width is less than 768 pixels, slice the cards array without reversing
    firstPart = cards.slice(0, firstPartLength);
    secondPart = cards.slice(
      firstPartLength,
      firstPartLength + secondPartLength
    );
  } else {
    // Otherwise, use the previous logic for slicing the cards array
    const firstPartIndexes = [5, 6, 7, 12, 10, 14, 17, 21];
    const secondPartIndexes = [0, 1, 2, 3, 8, 15, 18, 22];
    const thirdPartIndexes = [4, 11, 9, 13, 16, 19, 20, 23];

    firstPart = firstPartIndexes.map((index) => cards[index]);
    secondPart = secondPartIndexes.map((index) => cards[index]);
    thirdPart = thirdPartIndexes.map((index) => cards[index]);
  }

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className={cn("items-start overflow-y-auto mr-32 w-full ", className)}>
      <div className="grid grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <div
                className="card bg-white overflow-hidden shadow-lg"
                style={{ borderRadius: "1rem" }}
              >
                <img src={el.imageUrl} alt={el.title} className="w-full" />
                <div className="card-content p-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex justify-center items-center">
                    {el.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 flex justify-center items-center">
                    {el.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <div
                className="card bg-white overflow-hidden shadow-lg"
                style={{ borderRadius: "1rem" }}
              >
                <img src={el.imageUrl} alt={el.title} className="w-full" />
                <div className="card-content p-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex justify-center items-center">
                    {el.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 flex justify-center items-center">
                    {el.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <div
                className="card bg-white overflow-hidden shadow-lg"
                style={{ borderRadius: "1rem" }}
              >
                <img src={el.imageUrl} alt={el.title} className="w-full" />
                <div className="card-content p-4 ">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex justify-center items-center">
                    {el.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 flex justify-center items-center">
                    {el.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
