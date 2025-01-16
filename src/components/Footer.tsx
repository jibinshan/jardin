import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({ }) => {
    return (
        <footer id="footer" className="h-full md:h-[100vh] w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center z-20">
            <div className="col-span-2 h-full">
                <div className="w-full h-full flex flex-col items-center justify-start gap-12 md:gap-16 bg-[#013920] px-2 md:px-[100px] pt-12 pb-7 md:pt-24">
                    <div className="w-full flex gap-4 items-center justify-center md:justify-start pb-7 border-b-[0.5px] border-b-[#194a32]">
                        <Image
                            src="/images/footer/delivery.png"
                            width={110}
                            height={110}
                            alt="logo"
                            className="max-w-[50px] md:max-w-[90px]"
                        />
                        <p className="w-full md:max-w-[80%] text-lg md:text-4xl text-[#ECE6D6] font-cormorant font-[600] uppercase">Craving Jardin at home?<br />
                            Get it delivered via <span className="text-[#D3AF5E] underline">UberEats.</span></p>
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-start justify-center gap-5 md:gap-0">
                        <div className="w-full md:h-full flex flex-col justify-center items-center md:items-start gap-3">
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu" className="tracking-[3px]">About</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu" className="tracking-[3px]">our menu</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu" className="tracking-[3px]">Jardin Nights</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu" className="tracking-[3px]">Specials</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu" className="tracking-[3px]">Contact</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu" className="tracking-[3px]">careers</Link>
                            </Button>
                            <Button
                                variant="link"
                                className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                                asChild
                            >
                                <Link href="/menu" className="tracking-[3px]">Privacy Policy</Link>
                            </Button>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center md:justify-start items-center md:items-start gap-2 md:gap-5">
                            <p className="text-[#D3AF5E] font-cormorant font-[600] text-xl md:text-xl uppercase tracking-[3px]">Hours of Operation</p>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#ECE6D6] text-xl md:text-xl uppercase font-cormorant font-[600] text-center md:text-start tracking-[3px]">Mon: Closed</p>
                                <p className="text-[#ECE6D6] text-xl md:text-xl uppercase font-cormorant font-[600] text-center md:text-start tracking-[3px]">Tue-Thur: 03:00pm - 10:00pm, </p>
                                <p className="text-[#ECE6D6] text-xl md:text-xl uppercase font-cormorant font-[600] text-center md:text-start tracking-[3px]">Fri & Sat: 12:00pm - 12:00am,</p>
                                <p className="text-[#ECE6D6] text-xl md:text-xl uppercase font-cormorant font-[600] text-center md:text-start tracking-[3px]">Sun: 12:00pm - 10:00pm </p>
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
                    <p className="text-[#D3AF5E] font-cormorant font-[600] uppercase text-xl md:text-xl text-center tracking-[3px]">Address</p>
                    <div className="flex flex-col gap-1">
                        <Link href="https://maps.app.goo.gl/QCV9iWaXNE8BadbS6" target="_blank" className="text-[#ECE6D6] tracking-[3px] text-center font-cormorant text-xl md:text-xl font-[600]">
                            72-74 Parade Watford<br /> Hertfordshire WD17 1AW
                        </Link>
                        <Link href="tel:+441923934864" className="text-[#ECE6D6] text-center font-cormorant text-xl md:text-xl font-[600] tracking-[3px]">
                            +44 1923 934864
                        </Link>
                        <Link href="mailto:info@jardinhg.com" className="text-[#ECE6D6] text-center font-cormorant text-xl md:text-xl font-[600] tracking-[3px]">
                            info@jardinhg.com
                        </Link>
                    </div>
                </div>


                <div className="flex items-center justify-start gap-4">
                    <Link href="https://www.instagram.com/jardintequilabarldn/" target="_blank" className="text-[#D3AF5E]">
                        <Icons.instagram />
                    </Link>
                    <Link href="https://g.co/kgs/YtWgN5j" className="text-white">
                        <Icons.google className="text-[#D3AF5E]" />
                    </Link>
                    <Link href="https://www.facebook.com/eatjardinlondon/" target="_blank" className="text-[#D3AF5E]">
                        <Icons.facebook />
                    </Link>
                </div>
                <p className="text-[#ECE6D6] text-lg font-cormorant font-[600] text-center uppercase italic">Powerd by foodo</p>
            </div>
        </footer>
    );
};

export default Footer;
