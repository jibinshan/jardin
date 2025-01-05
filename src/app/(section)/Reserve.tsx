'use client'
import { useEffect } from "react";
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Reserve = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.reserve-one', {
                scrollTrigger: {
                    trigger: ".reserve-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                scale: 1,
                ease: Power4.easeOut,
                duration: 0.8

            })

            gsap.to('.reserve-two', {
                scrollTrigger: {
                    trigger: ".reserve-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                scale: 1,
                ease: Power4.easeOut,
                duration: 0.8

            })

        })

        mm.add("(min-width:501px)", () => {
            gsap.to('.reserve-one', {
                scrollTrigger: {
                    trigger: ".reserve-one",
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
            gsap.to('.reserve-two', {
                scrollTrigger: {
                    trigger: ".reserve-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                scale: 1,
                ease: Power4.easeOut,
                duration: 0.8

            })
        })
        gsap.to('.reserve-image', {
            scrollTrigger: {
                trigger: ".reserve-image",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            ease: Power4.easeOut,
            duration: 1.5
        })

        const splitType = document.querySelectorAll(".head-reserve")
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
        <section id="reserve" className="relative flex w-full items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('/images/home/celebrate/bg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
            }}
        >
            <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center"
                style={{
                    backgroundImage: "url('/images/home/celebrate/star.svg'), url('/images/home/celebrate/topleft.png')",
                    backgroundSize: "15% , 8%",
                    backgroundRepeat: "no-repeat,no-repeat",
                    backgroundPosition: "center right, center left"
                }}
            >
                <div className="w-full max-w-[1300px] h-full"
                    style={{
                        backgroundImage: "url('/images/home/celebrate/bottom.png')",
                        backgroundSize: "20%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom right"
                    }}
                />
            </div>
            <div className="relative flex flex-col gap-9 md:gap-14 h-fit bg-transparent w-full items-center justify-center px-3 lg:p-0 py-12 lg:py-24 overflow-hidden z-40">
                <p className="w-full text-center font-cormorant font-[400] text-[#FFF5DD] text-2xl md:text-6xl uppercase">Celebrating <br />authentic Mexican <br />traditions</p>
                <div className="z-30 flex flex-col md:flex-row gap-5 lg:gap-9 h-full w-full max-w-[1300px] items-center justify-center md:pr-14">
                    <div className="w-full md:w-1/2 flex items-start justify-center gap-2">
                        <div className="flex gap-2 items-center justify-center">
                            <Image
                                src='/images/home/celebrate/1.png'
                                width={180}
                                height={392}
                                alt="1"
                            />
                            <Image
                                src='/images/home/celebrate/2.png'
                                width={261}
                                height={691}
                                alt="2"
                                className="max-h-[560px] max-w-[200px]"
                            />
                        </div>
                        <Image
                            src='/images/home/celebrate/3.png'
                            width={173}
                            height={371}
                            alt="2"
                            className="mt-8"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
                        <div className="w-full max-w-[500px] space-y-8">
                            <p className="font-cormorant text-[#FFF5DD] font-[400] text-lg">Our culinary team draws inspiration from the diverse landscapes of Mexico, blending the bold, earthy flavors of the northern deserts with the fresh, vibrant tastes of the southern jungles. Every dish is crafted with the utmost care and creativity, using the highest quality ingredients to ensure the freshest flavors.Our tortillas are made in-house. Our traditional sauces, arbol, habanero ashes, and verde taquera, are all made from scratch. Complementing our cuisine is an extensive selection of the finest tequilas, carefully chosen to enhance your dining experience</p>
                            <Button className="font-cormorant font-[600] px-5 py-7 rounded-none bg-primary-foreground text-white text-lg uppercase">book table</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Reserve;
