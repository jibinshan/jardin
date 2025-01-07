import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({ }) => {
    return (
        <footer id="footer" className="h-full w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center z-20">
            <div className="col-span-2">
                <div className="w-full flex flex-col items-center justify-center gap-12 bg-[#013920] px-2 pt-12 pb-7 md:pt-24">
                    <div className="w-full max-w-[700px] flex gap-4 items-center justify-center md:justify-start pb-7 border-b-[0.5px] border-b-[#194a32]">
                        <Image
                            src="/images/footer/delivery.png"
                            width={110}
                            height={110}
                            alt="logo"
                            className="max-w-[50px] md:max-w-[90px]"
                        />
                        <p className="max-w-[500px] text-lg md:text-4xl text-[#ECE6D6] font-cormorant font-[600]">Craving Jardin at home?<br />
                            Get it delivered via <span className="text-[#D3AF5E] underline">UberEats.</span></p>
                    </div>
                    <div className="w-full max-w-[700px] flex flex-col md:flex-row items-start justify-center gap-5 md:gap-0">
                        <div className="w-full md:h-1/2 flex flex-col justify-center items-center md:items-start gap-5">
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-2xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu">About</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-2xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu">our menu</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-2xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu">Jardin Nights</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-2xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu">Specials</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-2xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu">Contact</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-2xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu">careers</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-2xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu">Privacy Policy</Link>
                            </Button>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center md:justify-start items-center md:items-start gap-2 md:gap-5">
                            <p className="text-[#D3AF5E] font-cormorant font-[600] text-xl md:text-2xl uppercase">Hours of Operation</p>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#ECE6D6] text-xl md:text-2xl uppercase font-cormorant font-[600] text-center md:text-start">Mon: 12pm-10pm <br />(Cold Menu Only), </p>
                                <p className="text-[#ECE6D6] text-xl md:text-2xl uppercase font-cormorant font-[600] text-center md:text-start">Tue-Thur: 12pm-10pm, </p>
                                <p className="text-[#ECE6D6] text-xl md:text-2xl uppercase font-cormorant font-[600] text-center md:text-start">Fri & Sat: 12pm-3am,</p>
                                <p className="text-[#ECE6D6] text-xl md:text-2xl uppercase font-cormorant font-[600] text-center md:text-start">Sun: 12pm-9pm </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-between gap-4 bg-[#001e10] px-2 pt-12 pb-7 md:pt-24">
                <Image
                    src='/images/footer/footerlogo.png'
                    width={191}
                    height={70}
                    alt="logo"
                />
                <div className="flex flex-col gap-3 items-center justify-center">
                    <p className="text-[#D3AF5E] font-cormorant font-[600] uppercase text-xl md:text-2xl text-center">Address</p>
                    <div className="flex flex-col gap-1">
                        <Link href="https://maps.app.goo.gl/3c776tRDmvogSitG8" target="_blank" className="text-[#ECE6D6] text-center font-cormorant text-xl font-[600]">
                            72-74 Parade Watford<br /> Hertfordshire WD17 1AW
                        </Link>
                        <Link href="tel:+08 097845666" className="text-[#ECE6D6] text-center font-cormorant text-xl font-[600]">
                            +08 097845666
                        </Link>
                        <Link href="mailto:jardin@gmail.com" className="text-[#ECE6D6] text-center font-cormorant text-xl font-[600]">
                            jardin@gmail.com
                        </Link>
                    </div>
                </div>


                <div className="flex items-center justify-start gap-4">
                    <Link href="https://www.instagram.com/bruncho_uk/?hl=en" className="text-[#D3AF5E]">
                        <Icons.instagram />
                    </Link>
                    <Link href="" className="text-[#D3AF5E]">
                        <Icons.tripAdvisor />
                    </Link>
                    <Link href="https://www.google.com/search?hl=en-IN&gl=in&q=Bruncho,+270+Deansgate,+Manchester+M3+4JB,+United+Kingdom" className="text-white">
                        <Icons.google className="text-[#D3AF5E]" />
                    </Link>
                    <Link href="" className="text-[#D3AF5E]">
                        <Icons.facebook />
                    </Link>
                </div>
                <p className="text-[#ECE6D6] text-lg font-cormorant font-[600] text-center uppercase">Powerd by foodo</p>
            </div>
            {/* <div className="flex w-full max-w-[1300px] flex-col items-center gap-4 md:flex-row">
                <div className="flex w-full flex-col items-center md:items-start justify-start gap-12 md:w-1/3">
                    <Image
                        src="/images/home/logo.png"
                        width={105}
                        height={73}
                        alt="logo"

                    />
                    <div className="flex flex-col gap-3">
                        <Link href="https://maps.app.goo.gl/3c776tRDmvogSitG8" target="_blank" className="text-white text-center md:text-start">
                            Brunch, 270 Deansgate,<br /> Manchester M3 4JB, United Kingdom
                        </Link>
                        <Link href="tel:+447708433823" className="text-white text-center md:text-start">
                            +447708433823
                        </Link>
                        <Link href="mailto:info@bruncho.co.uk" className="text-white text-center md:text-start">
                            info@bruncho.co.uk
                        </Link>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <Link href="https://www.instagram.com/bruncho_uk/?hl=en" className="text-white">
                            <Icons.instagram />
                        </Link>
                        <Link href="" className="text-white">
                            <Icons.tripAdvisor />
                        </Link>
                        <Link href="https://www.google.com/search?hl=en-IN&gl=in&q=Bruncho,+270+Deansgate,+Manchester+M3+4JB,+United+Kingdom" className="text-white">
                            <Icons.google />
                        </Link>
                        <Link href="" className="text-white">
                            <Icons.facebook />
                        </Link>
                    </div>
                </div >
                <div className="hidden w-full flex-col items-center justify-center gap-4 md:flex md:w-1/3">
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl font-light text-white text-accent"
                        asChild
                    >
                        <Link href="/" className="text-white">Home</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl font-light text-white text-accent"
                        asChild
                    >
                        <Link href="/menu" className="text-white">Menu</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl font-light text-white text-accent"
                        asChild
                    >
                        <Link href="/about-us" className="text-white">About</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl font-light text-white text-accent"
                        asChild
                    >
                        <Link href="/contact" className="text-white">Contact</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl font-light text-white text-accent"
                        asChild
                    >
                        <Link href="/table-booking" className="text-white">Table booking</Link>
                    </Button>
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-4 md:hidden md:w-1/3">
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/menu">Menu</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/about-us">About</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/contact">Contact</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl text-[#959595] text-accent"
                        asChild
                    >
                        <Link href="/table-booking">Table booking</Link>
                    </Button>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/3">
                    <div></div>
                    <p className="font-semibold uppercase text-white">
                        Opening hours
                    </p>
                    <p className="text-white">Mon - Thur: 7:30 - 17:00</p>
                    <p className="text-white">Fri : 7:30 - 19:00</p>
                    <p className="text-white">Sat : 8:00 - 18:00</p>
                    <p className="text-white">Sun : 8:00 - 17:00</p>
                </div>
            </div >
            <div className="flex w-full items-center justify-center">
                <p className="w-fit px-4 text-center text-xl text-white">
                    © 2024 Bruncho,all rights reserved | {" "}
                    <Link
                        href="https://foodo.ai"
                        className="hover:underline"
                        target="_blank"
                    >
                        Powered By Foodo
                    </Link>
                </p>
            </div> */}
        </footer >
    );
};

export default Footer;