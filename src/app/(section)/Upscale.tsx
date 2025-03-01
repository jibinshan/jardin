"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Upscale: React.FC = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      gsap.to(paragraphRef.current, {
        y: 20,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#04100B]">
      <div className="absolute left-0 top-12 hidden md:block">
        <Image
          src="/images/home/about/topleaf.svg"
          width={164}
          height={390}
          alt="welcome"
          className="w-48 md:max-w-full"
        />
      </div>
      <div className="absolute bottom-64 right-0 hidden md:block">
        <Image
          src="/images/home/about/bottomleaf.svg"
          width={164}
          height={390}
          alt="welcome"
          className="w-48 md:max-w-full"
        />
      </div>
      <div className="absolute top-4 z-20 xl:top-24">
        <h1
          ref={paragraphRef}
          className="w-full text-center font-cormorant text-4xl font-[400] uppercase leading-[100%] text-[#CDAA56] md:max-w-[600px] md:text-5xl xl:max-w-[1000px] xl:text-8xl"
        >
          {" "}
          <span className="text-[#036538]">U</span>pscale Mexica
          <span className="text-[#036538]">N</span>{" "}
          <span className="text-[#036538]">D</span>ining in Watfor
          <span className="text-[#036538]">D</span>{" "}
        </h1>
      </div>
      <div className="absolute -top-[340px] left-0 z-10 flex h-full w-full items-center justify-center px-4 sm:-top-[380px] md:-top-[390px] md:px-12 xl:-top-[450px] xl:px-96">
        <div className="relative flex items-center justify-center">
          <div className="absolute bottom-6 md:bottom-32">
            <div className="flex flex-col items-center justify-center gap-5">
              <div>
                <Image
                  src="/images/home/about/flower.png"
                  width={93}
                  height={91}
                  alt="welcome"
                  className="w-16 md:max-w-full"
                />
              </div>
              <p className="w-full max-w-[450px] text-center font-cormorant text-base font-[400] leading-[116%] text-[#ECE6D6] md:text-lg">
                Welcome to Jardín, an upscale Mexican dining destination where
                the vibrant flavors of the jungles in Southern Mexico collide
                with the soul of the northern deserts
              </p>
            </div>
          </div>
          <Image
            src="/images/home/about/about.png"
            width={987}
            height={1200}
            alt="welcome"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div>
        <div className="mt-[350px] flex flex-col px-4 sm:mt-[600px] md:mt-[550px] md:px-12 xl:mt-[900px] xl:px-96">
          <div className="flex h-full w-full flex-col gap-4 px-4">
            <h5 className="font-cormorant text-xl font-[500] leading-[116%] text-[#CDAA56] md:text-2xl">
              About Jardín
            </h5>
            <p className="w-full max-w-[650px] font-cormorant text-xl font-[400] uppercase leading-[130%] text-[#CDAA56] md:text-2xl">
              Welcome to Jardín, an upscale Mexican dining destination where the
              vibrant flavors of the jungles in Southern Mexico collide with the
              soul of the northern deserts
            </p>
            <div className="flex items-end justify-end pb-16 pt-5 md:pt-12">
              <p className="w-full max-w-[450px] font-cormorant text-sm font-[400] leading-[140%] text-[#FCCE67] md:text-base">
                Our culinary team draws inspiration from the diverse landscapes
                of Mexico, blending the bold, earthy flavors of the northern
                deserts with the fresh, vibrant tastes of the southern jungles.
                Every dish is crafted with the utmost care and creativity, using
                the highest quality ingredients to ensure the freshest flavors.
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <Image
            src="/images/home/about/bottom.png"
            width={1919}
            height={279}
            alt="welcome"
            className="h-[20vh] w-full object-cover md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Upscale;
