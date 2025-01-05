'use client'
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Welcome from "./(section)/Welcome";
import Footer from "@/components/Footer";
import Reviews from "./(section)/Review";
import ConnectWithUs from "./(section)/ConnectWithUs";
import Special from "./(section)/(special)/Special";
import Menu from "./(section)/Menu";
import Reserve from "./(section)/Reserve";
import About from "./(section)/About";
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HomePage() {

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger)
    // ScrollTrigger.create({
    //   trigger: '#hero',
    //   start: "top top",
    //   pin: true,
    //   pinSpacing: false,
    // })


  }, [])

  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Welcome />
        <About />
        <Reserve />
        <Special />
        <Menu />
        <Reviews />
        <ConnectWithUs />
        <Footer />
      </div>
    </main >
  );
}
