'use client'
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from "next/image";
const About = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.about-four', {
            scrollTrigger: {
                trigger: ".about-four",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                scrub: true
            },
            x: 150,
            y: 0,
            duration: 0.8

        })

        gsap.to('.about-three', {
            scrollTrigger: {
                trigger: ".about-four",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                scrub: true
            },
            x: 150,
            y: 0,
            duration: 0.8

        })

        gsap.to('.about-two', {
            scrollTrigger: {
                trigger: ".about-four",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                scrub: true
            },
            x: -150,
            y: 0,
            duration: 0.8

        })

        gsap.to('.about-one', {
            scrollTrigger: {
                trigger: ".about-four",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                scrub: true
            },
            x: -150,
            y: 0,
            duration: 0.8

        })

        // const splitType = document.querySelectorAll(".head-about")
        // splitType.forEach((char, i) => {
        //     if (char instanceof HTMLElement) {
        //         const text = new SplitType(char, { types: "chars" })
        //         gsap.from(text.chars, {
        //             scrollTrigger: {
        //                 trigger: char,
        //                 start: 'top 80%',
        //                 end: 'top 20%',
        //                 scrub: true,
        //                 markers: false
        //             },
        //             opacity: 0.2,
        //             stagger: 0.2
        //         })
        //     }
        // })

    }, [])
    return (
        <section id="about" className="relative flex w-full items-center justify-center bg-[#33281b] overflow-hidden py-12 md:pt-[350px] md:pb-44 px-4">
            <div className="absolute w-full h-full left-0 top-0 py-12 md:py-24">
                <div className="h-full w-full"
                    style={{
                        backgroundImage: "url('/images/home/about/topleaf.svg') ,url('/images/home/about/bottomleaf.svg')",
                        backgroundPosition: "top left , bottom right",
                        backgroundSize: "10% ,15%",
                        backgroundRepeat: "no-repeat, no-repeat"
                    }}
                />
            </div>
            <div className="absolute w-full h-full left-0 top-0 hidden md:flex justify-center items-center py-24 z-40">
                <div className="w-full h-full md:px-[190px] flex justify-between items-start px-4">
                    <p className="w-full max-w-[850px] text-xl md:text-7xl text-[#ECE6D6] font-cormorant uppercase font-[400]">Step into an
                        oasis of minimal
                        & modern decor with lush greenery, </p>
                    <Image
                        src='/images/home/about/top.png'
                        width={228}
                        height={228}
                        alt="top"
                        className="w-12 md:w-1/6"
                    />
                </div>
            </div>
            <div className="w-full md:px-[120px] h-fit md:h-[80vh] flex justify-center items-end md:items-center">
                <div className="relative w-full md:w-1/2 h-fit flex justify-center items-center aspect-square">
                    <div className="hidden md:flex absolute w-full h-full -left-1/4 top-1/4">
                        <Image
                            src='/images/home/about/food2.png'
                            width={391}
                            height={302}
                            alt="top"
                            className="w-1/2 h-52 about-one"
                        />
                    </div>
                    <div className="hidden absolute w-full h-full -left-16 -bottom-16 md:flex items-end">
                        <Image
                            src='/images/home/about/food4.png'
                            width={390}
                            height={261}
                            alt="top"
                            className="w-1/2 about-two"
                        />
                    </div>
                    <div className="hidden absolute w-full h-full -right-16 top-10 md:flex items-start justify-end">
                        <Image
                            src='/images/home/about/food3.png'
                            width={204}
                            height={276}
                            alt="top"
                            className="w-1/3 about-three"
                        />
                    </div>
                    <div className="hidden absolute w-full h-full -right-16 -bottom-16 md:flex items-end justify-end">
                        <Image
                            src='/images/home/about/food1.png'
                            width={394}
                            height={249}
                            alt="top"
                            className="w-1/2 about-four"
                        />
                    </div>
                    <video
                        className="min-h-full min-w-full object-cover"
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
