'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap, { Bounce, Power1, Power2, Power3, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icon";

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
      className="relative flex w-full items-center justify-center overflow-hidden bg-background px-4"
    >
      <div className="relative w-full flex">
        <div className="grid w-full grid-cols-4 md:gap-2">
          <Image
            src="/images/home/connect/1.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
          />
          <Image
            src="/images/home/connect/2.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
          />
          <Image
            src="/images/home/connect/3.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
          />
          <Image
            src="/images/home/connect/4.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
          />
          <Image
            src="/images/home/connect/5.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
          />
          <Image
            src="/images/home/connect/6.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
          />
          <Image
            src="/images/home/connect/7.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
          />
          <Image
            src="/images/home/connect/8.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 max-h-[250px] object-cover md:h-[300px] lg:max-h-[400px]"
          />
        </div>
        <div className="absolute top-[270px] z-40 flex w-full justify-center">
          <Link href="https://www.instagram.com/vulounge?igsh=MXNveGEzZnhsNzJhYg==" className=" w-fit flex flex-row items-center justify-center gap-2 px-8 py-4 font-[600] font-playfair uppercase rounded-full bg-primary-foreground text-[#ECE6D6] text-xl">
            <Icons.instagram className="text-primary" />
            <span>@jardintequilabarldn</span>
          </Link>
        </div>
      </div>
    </section >
  );
};

export default ConnectWithUs;
