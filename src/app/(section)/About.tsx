'use client'
import { useEffect } from "react";
import gsap, { Bounce, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.about-one', {
                scrollTrigger: {
                    trigger: ".reserve-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

            gsap.to('.about-two', {
                scrollTrigger: {
                    trigger: ".about-two",
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
            gsap.to('.about-one', {
                scrollTrigger: {
                    trigger: ".about-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
            gsap.to('.about-two', {
                scrollTrigger: {
                    trigger: ".about-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                scale: 1,
                duration: 0.8

            })
        })
        gsap.to('.about-image', {
            scrollTrigger: {
                trigger: ".about-image",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            ease: Power4.easeOut,
            duration: 1.3
        })

        const splitType = document.querySelectorAll(".head-about")
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
                    stagger: 0.2
                })
            }
        })

    }, [])
    return (
        <section id="about" className="relative flex w-full items-center justify-center bg-[#33281b] overflow-hidden py-12 md:py-24 px-4">
            <div className="absolute w-full h-full left-0 top-0 py-12 md:py-24">
                <div className="h-full w-full"
                    style={{
                        backgroundImage: "url('/images/home/about/topleaf.png') ,url('/images/home/about/bottomleaf.png')",
                        backgroundPosition: "top left , bottom right",
                        backgroundSize: "8% ,8%",
                        backgroundRepeat: "no-repeat, no-repeat"
                    }}
                />
            </div>
            <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center py-24 z-40">
                <div className="w-full h-full max-w-[1100px] flex justify-between items-start px-4">
                    <p className="w-full max-w-[700px] text-xl md:text-5xl text-[#ECE6D6] font-cormorant uppercase font-[400]">Step into an
                        oasis of minimal
                        & modern decor with lush greenery, </p>
                    <Image
                        src='/images/home/about/top.png'
                        width={228}
                        height={228}
                        alt="top"
                        className="w-12 md:w-32"
                    />
                </div>
            </div>
            <div className="w-full max-w-[1300px] h-[45vh] md:h-[80vh] flex justify-center items-end md:items-center">
                <div className="relative w-full md:w-1/2 h-fit flex justify-center items-center">
                    <div className="hidden md:flex absolute w-full h-full -left-16 top-20">
                        <Image
                            src='/images/home/about/food1.png'
                            width={391}
                            height={302}
                            alt="top"
                            className="w-44 h-36"
                        />
                    </div>
                    <div className="hidden absolute w-full h-full -left-16 -bottom-20 md:flex items-end">
                        <Image
                            src='/images/home/about/food2.png'
                            width={390}
                            height={261}
                            alt="top"
                            className="w-44"
                        />
                    </div>
                    <div className="hidden absolute w-full h-full -right-16 -top-10 md:flex items-start justify-end">
                        <Image
                            src='/images/home/about/food3.png'
                            width={204}
                            height={276}
                            alt="top"
                            className="w-44"
                        />
                    </div>
                    <div className="hidden absolute w-full h-full -right-16 -bottom-10 md:flex items-end justify-end">
                        <Image
                            src='/images/home/about/food4.png'
                            width={394}
                            height={249}
                            alt="top"
                            className="w-44"
                        />
                    </div>
                    <video
                        className="w-full object-contain"
                        style={{
                            objectPosition: "center"
                        }}
                        src="/video/about.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        // width={813}
                        // height={769}
                        poster=""
                    ></video>
                </div>
            </div>
        </section >
    );
};

export default About;
