"use client";
import React from "react";
import { BackgroundGradient } from "../app/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { url } from "inspector";

interface BackgroundGradientDemoProps {
  text: string;
}

export function BackgroundGradientDemo({ text }: BackgroundGradientDemoProps) {
  


  return (

        <div className="flex justify-center items-center mt-20 mb-16">
            <BackgroundGradient className="rounded-[60px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">


            <p className="text-base sm:text-4xl text-grey-900  dark:text-neutral-200 font-extrabold flex justify-center items-center  text-4xl font-extrabold leading-none tracking-tight text-gray-900  dark:text-white text-center">
                {text}
            </p>

        </BackgroundGradient>
        </div>
   

  );
}
