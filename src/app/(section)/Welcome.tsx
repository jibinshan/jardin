"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { Bounce } from "gsap";
import Link from "next/link";

const WelcomeRes = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        scale: 1,
        ease: Bounce.easeOut,
        duration: 1.2,
      });
      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        scale: 1,
        ease: Bounce.easeOut,
        duration: 0.8,
      });
    });

    const splitType = document.querySelectorAll(".head-welcome");
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.3,
        });
      }
    });
    gsap.to(".about-arrow", {
      scrollTrigger: {
        trigger: ".about-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      ease: Bounce.easeInOut,
      duration: 1.2,
    });
  }, []);

  return (
    <section
      id="welcome"
      className="relative z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#04100B]"
    >
      <div className="relative z-40 flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-background px-4 py-12 md:px-3 lg:flex-row lg:gap-0 lg:py-24">
        <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 md:px-[120px] lg:gap-24">
          <div className="relative flex w-full items-center justify-center">
            <div className="absolute -top-32 flex w-full items-start justify-center md:top-40">
              <p className="floating text-center font-cormorant text-3xl font-[400] uppercase md:text-8xl">
                <span className="md:text-primary-foreground">U</span>pscale
                Mexica<span className="md:text-primary-foreground">n</span>
                <br /> <span className="md:text-primary-foreground">D</span>
                ining in Watfor
                <span className="md:text-primary-foreground">d</span>
              </p>
            </div>
            <div className="absolute bottom-6 flex w-full flex-col items-center justify-center gap-4 py-4 md:bottom-24 md:gap-14">
              <Image
                src="/images/home/about/flower.png"
                width={93}
                height={91}
                alt="welcome"
                className="w-16 md:max-w-full"
              />
              <p className="max-w-[95%] text-center font-cormorant text-base font-[400] text-[#ECE6D6] md:ml-0 md:max-w-[600px] md:text-3xl">
                Welcome to Jardín, an upscale Mexican dining destination where
                the vibrant flavors of the jungles in Southern Mexico collide
                with the soul of the northern deserts
              </p>
            </div>
            <Image
              src="/images/home/about/about.png"
              width={987}
              height={1200}
              alt="welcome"
              className="w-full md:w-3/4"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-5 md:gap-20">
            <div className="flex w-full flex-col items-start justify-start gap-3 md:w-3/4 md:gap-5">
              <p className="font-cormorant text-3xl font-[500] text-primary-foreground">
                About Jardín
              </p>
              <p className="w-full font-cormorant text-3xl font-[400] uppercase leading-[35px] text-primary-foreground md:max-w-[85%]">
                Welcome to Jardín, an upscale Mexican dining destination where
                the vibrant flavors of the jungles in Southern Mexico collide
                with the soul of the northern deserts
              </p>
            </div>
            <div className="flex w-full md:w-3/4 md:justify-end">
              <p className="w-full font-cormorant text-xl font-[400] text-primary-foreground md:max-w-[60%]">
                Our culinary team draws inspiration from the diverse landscapes
                of Mexico, blending the bold, earthy flavors of the northern
                deserts with the fresh, vibrant tastes of the southern jungles.
                Every dish is crafted with the utmost care and creativity, using
                the highest quality ingredients to ensure the freshest flavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeRes;
