import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full sticky top-0">
      <div className="relative flex w-full items-center justify-center px-4 py-12 h-[100vh] md:py-24">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="/video/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster=""
          ></video>
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-black/30" />
        <div className="z-10 flex w-full md:px-[120px] flex-col items-center md:items-start justify-center gap-4">
          <p className="w-full text-center md:text-start font-cormorant text-4xl font-[400] text-white md:text-8xl uppercase lg:leading-[94px]">
            <span className="text-primary">Jardín</span> <br />
            Mexican Cocina<br />
            {'  '} & Tequila Bar
          </p>
          <Link href='/table-booking'>
            <Button className="rounded-none px-7 py-7 font-cormorant font-[600] tracking-[3px] text-base text-white border-white uppercase" variant='outline' size='lg'>
              Book Table
            </Button>
          </Link>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
