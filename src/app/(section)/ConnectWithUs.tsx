'use client'

import Image from "next/image";
import { useEffect } from "react";
import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from "next/link";
import { Icons } from "@/components/Icon";

const ConnectWithUs = ({ }) => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.connect-one', {
      scrollTrigger: {
        trigger: ".connect-one",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        scrub: true
      },
      x: 0,
      scale: 1,
      ease: Power2.easeOut,
      duration: 1

    })

  }, [])

  return (
    <section
      id="connect"
      className="relative flex w-full items-center justify-center overflow-hidden bg-background"
    >
      <div className="relative w-full flex">
        <div className="grid w-full grid-cols-4 md:gap-1 connect-one"
          style={{
            transform: "scale(0.5)"
          }}
        >
          <Image
            src="/images/home/connect/1.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/2.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/3.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/4.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/5.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/6.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/7.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/8.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-40 flex justify-center items-center">
          <Link href="https://www.instagram.com/vulounge?igsh=MXNveGEzZnhsNzJhYg==" className=" w-fit px-4 py-4 text-sm md:px-8 md:py-6 font-[500] font-playfair capitalize md:tracking-[0.553px] rounded-full bg-primary-foreground text-[#ECE6D6] md:text-2xl flex justify-center items-center gap-1 md:gap-2">
            <Icons.instagram className="text-primary h-5 w-5 md:h-full md:w-full" />
            <span className="-mt-1"><span className="self-stretch">@</span>jardintequilabarldn</span>
          </Link>
        </div>
      </div>
    </section >
  );
};

export default ConnectWithUs;
