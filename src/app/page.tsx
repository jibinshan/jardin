"use client";
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
import Authentic from "./(section)/Authentic";
import Map from "./(section)/Map";
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Flavours from "./(section)/Flavours";
import Discover from "./(section)/Discover";
import Upscale from "./(section)/Upscale";
import CheckOut from "./(section)/CheckOut";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Flavours />
        <Discover />
        <Upscale />
        {/* <Welcome /> */}
        <About />
        <Reserve />
        <Special />
        <Menu />
        <Authentic />
        <Reviews />
        <ConnectWithUs />
        <Map />
        <Footer />
        <CheckOut />
      </div>
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex">
        <ViewMenu />
      </div>
    </main>
  );
}
