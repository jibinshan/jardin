import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({ }) => {
    return (
        <footer id="footer" className="h-full md:h-[100vh] w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center z-20">
            <div className="col-span-2 h-full">
                <div className="w-full h-full flex flex-col items-center justify-start gap-12 bg-[#013920] px-2 md:px-[100px] pt-12 pb-7 md:pt-24">
                    <div className="w-full flex gap-4 items-center justify-center md:justify-start pb-7 border-b-[0.5px] border-b-[#194a32]">
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
                    <div className="w-full flex flex-col md:flex-row items-start justify-center gap-5 md:gap-0">
                        <div className="w-full md:h-full flex flex-col justify-center items-center md:items-start gap-3">
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
        </footer>
    );
};

export default Footer;