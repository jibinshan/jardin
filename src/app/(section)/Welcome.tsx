'use client'
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Bounce } from "gsap";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WelcomeRes = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.welcome-one', {
                scrollTrigger: {
                    trigger: ".welcome-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

            gsap.to('.welcome-two', {
                scrollTrigger: {
                    trigger: ".welcome-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

        })

        mm.add("(min-width:501px)", () => {
            gsap.to('.welcome-one', {
                scrollTrigger: {
                    trigger: ".welcome-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                scale: 1,
                ease: Bounce.easeOut,
                duration: 1.2

            })
            gsap.to('.welcome-two', {
                scrollTrigger: {
                    trigger: ".welcome-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                scale: 1,
                ease: Bounce.easeOut,
                duration: 0.8

            })
        })

        const splitType = document.querySelectorAll(".head-welcome")
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
                    stagger: 0.3
                })
            }
        })
        gsap.to('.about-arrow', {
            scrollTrigger: {
                trigger: ".about-arrow",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            ease: Bounce.easeInOut,
            duration: 1.2

        })

    }, [])

    return (
        <section id="welcome" className="relative flex flex-col w-full items-center justify-center bg-background overflow-hidden">

            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit w-full items-center justify-center px-4 md:px-3 bg-background py-12 lg:py-24 overflow-hidden z-40">
                <div className="absolute w-full h-full left-0 top-0 py-12 md:py-24">
                    <div className="h-full w-full"
                        style={{
                            backgroundImage: "url('/images/home/about/topleaf.png') ,url('/images/home/about/bottomleaf.png')",
                            backgroundPosition: "top left , bottom right",
                            backgroundSize: "10% ,10%",
                            backgroundRepeat: "no-repeat, no-repeat"
                        }}
                    />
                </div>
                <div className="z-30 flex flex-col gap-5 lg:gap-9 h-full w-full max-w-[1300px] items-center justify-center">
                    <div className="px-5 py-6 rounded-full flex gap-2 items-center justify-center">
                        <Image
                            src="/images/home/about/delivery.png"
                            width={60}
                            height={39}
                            alt="welcome"
                            className="w-8"
                        />
                        <div className="font-cormorant font-[400] text-base md:text-xl text-black uppercase">Now delivering with{' '}<Link href='/' className="font-cormorant text-primary-foreground border-b-[1px] border-b-primary-foreground">UberEats!</Link></div>
                    </div>

                    <div className="relative w-full flex justify-center items-center">
                        <div className="absolute w-full top-24 md:top-40 flex justify-center items-start">
                            <p className="text-3xl md:text-7xl font-cormorant text-center font-[400] uppercase"><span className="md:text-primary-foreground">U</span>pscale Mexica<span className="md:text-primary-foreground">n</span><br /> <span className="md:text-primary-foreground">D</span>ining in Watfor<span className="md:text-primary-foreground">d</span></p>
                        </div>
                        <div className="absolute w-full bottom-24 flex flex-col justify-center items-center gap-10 py-4">
                            <Image
                                src="/images/home/about/flower.png"
                                width={93}
                                height={91}
                                alt="welcome"
                                className="max-w-16"
                            />
                            <p className="text-2xl font-cormorant text-center text-[#ECE6D6] max-w-[600px] font-[400]">Welcome to Jardín, an upscale Mexican dining destination where the vibrant flavors of the jungles in Southern Mexico collide with the soul of the northern deserts</p>
                        </div>
                        <Image
                            src="/images/home/about/about.png"
                            width={987}
                            height={1200}
                            alt="welcome"
                            className="w-full md:w-2/4 max-h-[800px]"
                        />
                    </div>
                    <div className="w-full max-w-[650px] flex flex-col gap-3 justify-start items-start">
                        <p className="text-primary-foreground font-[500] font-cormorant text-3xl">About Jardín</p>
                        <p className="w-full max-w-[550px] text-3xl text-primary-foreground font-cormorant font-[400]">
                            Welcome to Jardín, an upscale Mexican dining destination where the vibrant flavors of the jungles in Southern Mexico collide with the soul of the northern deserts
                        </p>
                    </div>
                    <div className="w-full max-w-[650px] flex md:justify-end">
                        <p className="w-full max-w-[550px] text-xl text-primary-foreground font-cormorant font-[400]">
                            Our culinary team draws inspiration from the diverse landscapes of Mexico, blending the bold, earthy flavors of the northern deserts with the fresh, vibrant tastes of the southern jungles. Every dish is crafted with the utmost care and creativity, using the highest quality ingredients to ensure the freshest flavors.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeRes;
