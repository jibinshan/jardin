'use client'
import { useEffect } from "react";
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Reserve = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.reserve-head', {
            scrollTrigger: {
                trigger: ".reserve-head",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                scrub: true
            },
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: Power4.easeOut,

        })


    }, [])
    return (
        <section id="reserve" className="relative flex w-full items-center justify-center overflow-hidden bg-fixed"
            style={{
                backgroundImage: "url('/images/home/celebrate/bg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center"
            }}
        >
            <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center bg-fixed"
                style={{
                    backgroundImage: "url('/images/home/celebrate/star.svg'), url('/images/home/celebrate/topleft.svg')",
                    backgroundSize: "15% , 10%",
                    backgroundRepeat: "no-repeat,no-repeat",
                    backgroundPosition: "center right, center left"
                }}
            >
                <div className="w-full md:px-[140px] h-full bg-fixed"
                    style={{
                        backgroundImage: "url('/images/home/celebrate/bottom.png')",
                        backgroundSize: "15%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom right"
                    }}
                />
            </div>
            <div className="relative flex flex-col gap-9 md:gap-14 h-fit bg-transparent w-full items-center justify-center px-3 lg:p-0 py-12 lg:py-24 overflow-hidden z-40">
                <p className="w-full text-center font-cormorant font-[400] text-[#FFF5DD] text-2xl md:text-7xl uppercase reserve-head"
                    style={{
                        transform: "scale(0.6)"
                    }}
                >Celebrating <br />authentic Mexican <br />traditions</p>
                <div className="z-30 flex flex-col md:flex-row gap-5 lg:gap-10 h-full w-full md:px-[140px] items-center md:items-start justify-center">
                    <div className="w-full md:w-1/2 flex items-start justify-start gap-2">
                        <div className="flex gap-2 items-center justify-center">
                            <Image
                                src='/images/home/celebrate/1.png'
                                width={180}
                                height={392}
                                alt="1"
                                className="hidden md:flex"
                            />
                            <Image
                                src='/images/home/celebrate/2.png'
                                width={261}
                                height={691}
                                alt="2"
                                className="md:max-w-[230px]"
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
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:py-12">
                        <div className="w-full max-w-[550px] space-y-8">
                            <p className="font-cormorant text-[#FFF5DD] font-[400] text-lg">Our culinary team draws inspiration from the diverse landscapes of Mexico, blending the bold, earthy flavors of the northern deserts with the fresh, vibrant tastes of the southern jungles. Every dish is crafted with the utmost care and creativity, using the highest quality ingredients to ensure the freshest flavors.Our tortillas are made in-house. Our traditional sauces, arbol, habanero ashes, and verde taquera, are all made from scratch. Complementing our cuisine is an extensive selection of the finest tequilas, carefully chosen to enhance your dining experience</p>
                            <Button className="font-cormorant font-[600] px-7 py-8 tracking-[3px] bg-primary-foreground text-white text-lg uppercase rounded-none">book table</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reserve;
