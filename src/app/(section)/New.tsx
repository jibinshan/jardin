'use client'
import { useEffect } from "react";
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";

const New = ({ }) => {
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
                ease: Power4.easeOut,
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
                x: 30,
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
                    stagger: 0.2
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
            stagger: 1,
            duration: 1.5

        })

    }, [])
    return (
        <section id="welcome" className="relative flex w-full items-center justify-center bg-transparent">
            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit bg-transparent w-full items-center justify-center md:justify-end px-3 lg:p-0 py-12 lg:py-24 overflow-hidden">
                <div className="z-30 flex flex-col gap-5 lg:gap-9 h-full w-full max-w-[1160px] md:pr-14 items-center lg:items-center justify-center">
                    <div className="w-full lg:w-1/2 flex flex-col gap-10 justify-center items-center">
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                            <p className="welcome-one font-open font-[200] text-xl text-primary md:-ml-[50px]"
                                style={{
                                    transform: 'scale(1.4)'
                                }}
                            >
                                NEW
                            </p>
                            <p className="head-welcome font-open non-italic font-[300] uppercase text-black text-4xl md:text-6xl text-center flex gap-3 justify-center items-center">
                                <span className="">our top selling</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center md:justify-between items-center gap-9">
                        <div className="w-full flex flex-col items-center justify-center gap-6">
                            <Image
                                src='/images/home/new/image1.png'
                                alt="new"
                                width={360}
                                height={360}
                                className="about-arrow w-fit h-fit object-cover"
                                style={{
                                    transform: "scale(1.3)"
                                }}
                            />
                            <p className="underline uppercase">Red cake</p>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-6">
                            <Image
                                src='/images/home/new/image2.png'
                                alt="new"
                                width={360}
                                height={360}
                                className="about-arrow w-fit h-fit object-cover"
                                style={{
                                    transform: "scale(1.3)"
                                }}
                            />
                            <p className="underline uppercase">red velvet</p>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-6">
                            <Image
                                src='/images/home/new/image3.png'
                                alt="new"
                                width={360}
                                height={360}
                                className="about-arrow w-fit h-fit object-cover"
                                style={{
                                    transform: "scale(1.3)"
                                }}
                            />
                            <p className="underline uppercase">red Pancake</p>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-6">
                            <Image
                                src='/images/home/new/image4.png'
                                alt="new"
                                width={360}
                                height={360}
                                className="about-arrow w-fit h-fit object-cover"
                                style={{
                                    transform: "scale(1.3)"
                                }}
                            />
                            <p className="underline uppercase">Red cake</p>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-6">
                            <Image
                                src='/images/home/new/image5.png'
                                alt="new"
                                width={360}
                                height={360}
                                className="about-arrow w-fit h-fit object-cover"
                                style={{
                                    transform: "scale(1.3)"
                                }}
                            />
                            <p className="underline uppercase">red velvet</p>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-6">
                            <Image
                                src='/images/home/new/image6.png'
                                alt="new"
                                width={360}
                                height={360}
                                className="about-arrow w-fit h-fit object-cover"
                                style={{
                                    transform: "scale(1.3)"
                                }}
                            />
                            <p className="underline uppercase">Red Pancake</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default New;
