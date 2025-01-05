'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap, { Bounce, Power1, Power2, Power3, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ConnectWithUs = ({ }) => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to('.connect-one', {
        scrollTrigger: {
          trigger: ".connect-one",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        opacity: 1,
        ease: Power2.easeOut,
        duration: 1

      })

    })

    mm.add("(min-width:501px)", () => {
      gsap.to('.connect-one', {
        scrollTrigger: {
          trigger: ".connect-one",
          toggleActions: 'restart none none none',
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        opacity: 1,
        scale: 1,
        ease: Power2.easeOut,
        duration: 1

      })
    })


    const splitType = document.querySelectorAll(".head-connect")
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" })
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
          },
          opacity: 0.2,
          stagger: 0.4
        })
      }
    })

    gsap.to('.connect-arrow', {
      scrollTrigger: {
        trigger: ".connect-arrow",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8

    })


    gsap.to('.image-container', {
      scrollTrigger: {
        trigger: ".image-container",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 50,
      scale: 1,
      ease: Bounce.easeOut,
      duration: 1.3

    })

    // const revealContainers = document.querySelectorAll(".reveal-container");
    // revealContainers.forEach((container) => {
    //   const image = container.querySelectorAll(".image-container");
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: container,
    //       toggleActions: "restart none none reset"
    //     }
    //   });

    //   tl.set(container, { autoAlpha: 1 });
    //   tl.from(container, 1.5, {
    //     ease: Power2.easeOut,
    //   });
    //   tl.from(image, 1.5, {
    //     scale: 1.3,
    //     delay: -1.5,
    //     ease: Power2.easeOut,
    //   });
    // });

  }, [])

  const text = "Connect With Us"
  return (
    <section
      id="connect"
      className="relative flex w-full items-center justify-center md:justify-end overflow-hidden bg-transparent md:pr-7"
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-6/12 top-5/12 flex items-center justify-center w-full h-full overflow-hidden"
      // style={{
      //   borderRadius: '1533px',
      //   background: 'radial-gradient(50% 50% at 50% 50%, rgba(226, 161, 75, 0.14) 0%, rgba(0, 0, 0, 0.00) 100%)',
      //   filter: 'blur(67px)',
      // }}
      >
      </div>
      <div className="max-w-[1100px] px-4 py-12 lg:px-0 lg:py-24 flex flex-col gap-12 z-40">

        <div className="flex w-full flex-col items-center justify-center lg:flex-row">

          <div className="w-full flex flex-col gap-3 justify-center items-center">
            <p className="font-jost non-italic font-light uppercase text-black text-xl md:text-5xl text-center flex gap-3 justify-center items-center">
              {text.split("").map((char, index) => (
                <span key={index} className="key head-connect" >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          </div>
          {/* <div className="mt-10 flex items-center gap-7">
              <CarouselPrevious className="static" variant="ghost" />
              <CarouselNext className="static" />
            </div> */}
        </div>
        <div className="w-full max-w-[1300px] flex flex-col md:flex-row justify-center items-center md:justify-between gap-6">
          <div className="relative reveal-container">
            <Image
              src="/images/home/connect/image1.png"
              width={380}
              height={395}
              alt="alt"
              className="image-container max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover -ml-[50px]"
              style={{
                transform: "scale(1.3)"
              }}
            />
          </div>
          <div className="relative reveal-container">
            <Image
              src="/images/home/connect/image2.png"
              width={380}
              height={395}
              alt="alt"
              className="image-container max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover -ml-[50px]"
              style={{
                transform: "scale(1.3)"
              }}
            />
          </div>
          <div className="relative reveal-container">
            <Image
              src="/images/home/connect/image3.png"
              width={380}
              height={395}
              alt="alt"
              className="image-container max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover -ml-[50px]"
              style={{
                transform: "scale(1.3)"
              }}
            />
          </div>

          <div className="relative reveal-container">
            <Image
              src="/images/home/connect/image4.png"
              width={380}
              height={395}
              alt="alt"
              className="image-container max-h-[250px] md:h-[300px] lg:max-h-[400px] z-30 object-cover -ml-[50px]"
              style={{
                transform: "scale(1.3)"
              }}
            />
          </div>
        </div>
      </div>
    </section >
  );
};

export default ConnectWithUs;
