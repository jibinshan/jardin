"use client";
import { Icons } from "@/components/Icon";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import { useEffect } from "react";
import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';

const Reviews = ({ }) => {
    const { reviews } = useRestaurant();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.review-one', {
                scrollTrigger: {
                    trigger: ".review-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                opacity: 1,
                scale: 1,
                ease: Power2.easeOut,
                duration: 1.3

            })

        })

        mm.add("(min-width:501px)", () => {
            gsap.to('.review-one', {
                scrollTrigger: {
                    trigger: ".review-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                scale: 1,
                ease: Power2.easeOut,
                duration: 1.3

            })
        })

        gsap.to('.review-items', {
            scrollTrigger: {
                trigger: ".review-items",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            ease: Power2.easeOut,
            duration: 1.3
        })

        const splitType = document.querySelectorAll(".head-review")
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

    }, [])
    const text = 'Hear Our Guests'
    return (
        <section className="relative flex h-full w-full justify-center items-center bg-background py-12 pb-32 md:py-34 overflow-hidden">
            <div className="absolute w-full h-full left-0 top-0 z-10"
                style={{
                    backgroundImage: "url('/images/home/reviews/reviewtop.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "15%",
                    backgroundPosition: "top left"
                }}
            />
            <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 z-20">
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 lg:gap-8">
                    <p className="font-cormorant font-[500] capitalize text-primary-foreground text-xl text-center py-3 px-5 rounded-full border-[1px] border-primary-foreground">
                        Reviews
                    </p>
                    <p className="font-cormorant non-italic uppercase text-primary-foreground font-[600] text-2xl md:text-5xl text-center flex gap-3 justify-center items-center">
                        {text.split("").map((char, index) => (
                            <span key={index} className="key head-review" >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </p>
                </div>
                <div className="review-items flex w-full items-center justify-center p-4"
                    style={{
                        transform: "scale(1.3)"
                    }}
                >
                    {reviews && (
                        <Carousel className="w-full px-4">
                            <CarouselContent className="ml-4 flex h-fit w-full justify-center gap-4">
                                {reviews.map((review, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 flex justify-center border-[1px] border-primary py-7 md:py-12">
                                        <div className="w-full flex flex-col px-3 gap-7">
                                            <div className="relative w-full px-4 md:h-fit flex flex-col gap-3 justify-center items-center">
                                                <div className="flex w-full justify-center z-20">
                                                    <Icons.star key={index} className="text-primary" />
                                                    <Icons.star key={index} className="text-primary" />
                                                    <Icons.star key={index} className="text-primary" />
                                                    <Icons.star key={index} className="text-primary" />
                                                    <Icons.star key={index} className="text-primary" />
                                                </div>
                                                <div className="z-20">
                                                    <p className="text-primary-foreground font-[400] font-cormorant text-lg line-clamp-5 text-center">{review.text}</p>
                                                </div>
                                            </div>
                                            <div className="w-full flex flex-col items-center justify-center">
                                                {/* <Image
                                                    src={
                                                        review.profile_photo_url ||
                                                        "/images/home/reviews/pictures/anna-mathew.svg"
                                                    }
                                                    width={64}
                                                    height={64}
                                                    alt={review.author_name}
                                                /> */}
                                                <div className="flex flex-col justify-center items-center">
                                                    <p className="text-primary-foreground font-[500] font-playfair text-xl">-{review.author_name}-</p>
                                                    {/* <span className="text-[#9C9995]">
                                                        {review.relative_time_description}
                                                    </span> */}
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                                <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                                <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                            </div>
                        </Carousel>
                    )}
                </div>
            </div>
        </section >
    );
};

export default Reviews;