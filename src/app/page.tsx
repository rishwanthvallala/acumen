"use client";
import { cn } from "./utils/cn";
import { Navbar } from "./components/ui/navbar";
import  About  from "../pages/about";
import Landing from "./index";

export default function Home() {
  return (
    <>
        <Navbar />
        <Landing />
    </>
  );
}
