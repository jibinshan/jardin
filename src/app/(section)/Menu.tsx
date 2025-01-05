'use client'
import { useEffect, useState } from "react";
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Menu = ({ }) => {
    const [select, setSelect] = useState(0)

    return (
        <section id="menu" className="flex flex-col w-full items-center min-h-screen justify-center">
            <div className={cn("w-full flex flex-col sticky top-0 bg-[#034426]",
                select !== 0 && 'static bg-[#034426] z-40'
            )} >
                <div className="w-full pt-24 pb-12 flex justify-center items-center bg-[#034426]">
                    <div className="w-full max-w-[1300px] flex justify-between items-center">
                        <p className="text-[#ECE6D6] text-lg py-4 px-6 rounded-full border-[1px] border-[#2c6146]">
                            Make Your Menu Selection
                        </p>
                        <Link href='/menu'>
                            <Button className="hero-button flex items-center justify-center gap-3 px-10 py-7 text-white rounded-none bg-transparent border-[1px] border-white font-playfair font-[600]" variant='image'
                                style={{
                                    borderRadius: "50%"
                                }}
                            >View Menu</Button>
                        </Link>
                    </div>
                </div>
                <div className={cn("menu-section w-full pb-12 h-[30vh] flex flex-col gap-5 justify-start items-center bg-[#034426] z-10 transition-all duration-500 ease-in",
                    select === 1 && "h-fit md:h-[100vh]",
                    select !== 0 && 'static'
                )}>
                    <div className="w-full max-w-[1300px] flex justify-between items-start">
                        <div className="flex justify-center items-center gap-4">
                            <p className="font-prata capitalize text-2xl">01</p>
                            <p className="font-playfair capitalize text-7xl">Lunch</p>
                        </div>
                        <div className="p-3 rounded-full shadow-lg bg-[#0e603a]" onClick={() => setSelect((prev) => prev === 1 ? 0 : 1)}>
                            <ChevronUp className={cn("text-white transition-all duration-500 ease-in",
                                select === 1 && "rotate-180",
                            )} />
                        </div>
                    </div>
                    {select === 1 && (
                        <div className="w-full max-w-[1300px] flex flex-col gap-4 items-start justify-start">
                            <p className="text-primary font-playfair text-xl">Botana (appetizers)</p>
                            <div className="w-full flex flex-col md:flex-row gap-2">
                                <div className="w-full md:w-1/2 flex flex-col gap-2">
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 flex flex-col gap-2">
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <div className={cn("menu-section w-full py-12 h-[50vh] flex flex-col gap-5  justify-start items-center bg-[#035731] sticky top-[300px] z-20 transition-all duration-500 ease-in",
                select === 2 && "h-fit md:h-[100vh]",
                select !== 0 && 'static'
            )} >
                <div className="w-full max-w-[1300px] flex justify-between items-start">
                    <div className="flex justify-center items-center gap-4">
                        <p className="font-prata capitalize text-2xl">02</p>
                        <p className="font-playfair capitalize text-7xl">Dinner</p>
                    </div>
                    <div className="p-3 rounded-full shadow-lg bg-[#0e603a]" onClick={() => setSelect((prev) => prev === 2 ? 0 : 2)}>
                        <ChevronUp className={cn("text-white transition-all duration-500 ease-in",
                            select === 2 && "rotate-180",
                        )} />
                    </div>
                </div>
                {select === 2 && (
                    <div className="w-full max-w-[1300px] flex flex-col gap-4 items-start justify-start">
                        <p className="text-primary font-playfair text-xl">Botana (appetizers)</p>
                        <div className="w-full flex flex-col md:flex-row gap-2">
                            <div className="w-full md:w-1/2 flex flex-col gap-2">
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col gap-2">
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className=
                {cn("menu-section w-full py-12 h-[50vh] flex flex-col gap-5 justify-start items-center bg-[#2d7323] sticky top-[300px] z-30 transition-all duration-500 ease-in",
                    select === 3 && "h-fit md:h-[100vh]",
                )}
            >
                <div className="w-full max-w-[1300px] flex justify-between items-start">
                    <div className="flex justify-center items-center gap-4">
                        <p className="font-prata capitalize text-2xl">03</p>
                        <p className="font-playfair capitalize text-7xl">Drinks</p>
                    </div>
                    <div className="p-3 rounded-full shadow-lg bg-[#367d2b]" onClick={() => setSelect((prev) => prev === 3 ? 0 : 3)}>
                        <ChevronUp className={cn("text-white transition-all duration-500 ease-in",
                            select === 3 && "rotate-180",
                        )} />
                    </div>
                </div>
                {select === 3 && (
                    <div className="w-full max-w-[1300px] flex flex-col gap-4 items-start justify-start">
                        <p className="text-primary font-playfair text-xl">Botana (appetizers)</p>
                        <div className="w-full flex flex-col md:flex-row gap-2">
                            <div className="w-full md:w-1/2 flex flex-col gap-2">
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col gap-2">
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section >
    );
};

export default Menu;
