"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Image from "next/image";

export const ParallaxScroll = ({ cards, className }: { cards: any[]; className?: string; }) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    //container: gridRef, // remove this if your container is not fixed height
    //offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(cards.length / 3);

  const firstPart = cards.slice(0, third);
  const secondPart = cards.slice(third, 2 * third);
  const thirdPart = cards.slice(2 * third);

  return (
    <div
      className={cn(" items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
            <div className="card bg-white overflow-hidden shadow-lg" style={{ borderRadius: "1rem" }}>
                <Image src={el.imageUrl} alt={el.title} className="w-full h-full object-cover" />
                <div className="card-content p-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex justify-center items-center">{el.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 flex justify-center items-center">{el.description}</p>
                </div>
            </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <div className="card bg-white  overflow-hidden shadow-lg" style={{ borderRadius: "1rem" }}>
                <Image src={el.imageUrl} alt={el.title} className="w-full"  />
                <div className="card-content p-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex justify-center items-center">{el.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 flex justify-center items-center">{el.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <div className="card bg-white  overflow-hidden shadow-lg" style={{ borderRadius: "1rem" }}>
                <Image src={el.imageUrl} alt={el.title} className="w-full"  />
                <div className="card-content p-4 ">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex justify-center items-center">{el.title}</h3> 
                  <p className="text-gray-600 dark:text-gray-300 flex justify-center items-center">{el.description}</p>
                </div>
              </div>
            </motion.div>

          ))}
        </div>

      </div>
    </div>
  );
};
