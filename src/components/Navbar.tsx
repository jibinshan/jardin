"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 flex h-[10vh] w-full flex-col bg-transparent px-4 md:px-0 transition-all duration-0 ease-in-out justify-between items-center overflow-hidden`,
        isScrolled && "bg-transparent border-b-0",
        pathname !== "/" && "bg-[#036538] border-b-0",
      )}
    >
      <div
        className={cn(
          "flex h-full relative w-full items-center justify-between gap-2",
        )}
      >
        <Link href="/" className="flex md:hidden">
          <Image src="/images/logo.png" width={55} height={69} alt="logo" />
        </Link>

        <div className={cn(
          "hidden md:flex flex-row relative items-center min-w-full h-full justify-between gap-12 border-b-[0.1px] border-b-[#75716d]",
        )} >
          <Link href="/">
            <Image src="/images/logo.png" width={191} height={70} alt="logo" className="w-32 z-20 ml-10" />
          </Link>
          <div>
            <Button
              asChild
              variant="link"
              className="uppercase h-[10vh] px-6 border-l-[1px] border-l-[#75716d] rounded-none shadow-none"
            >
              <Link href="/about-us" className="flex items-center justify-center gap-2 text-white font-cormorant tracking-[3px] font-[600] hover:text-primary uppercase text-lg z-20">About</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="uppercase h-[10vh] px-6 border-l-[1px] border-l-[#75716d] rounded-none shadow-none"
            >
              <Link href="/menu" className="flex items-center justify-center gap-2 text-white font-cormorant tracking-[3px] font-[600] hover:text-primary uppercase text-lg z-20">Menu</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="uppercase h-[10vh] px-6 border-l-[1px] border-l-[#75716d] rounded-none shadow-none"
            >
              <Link href="/" className="flex items-center justify-center gap-2 text-white font-cormorant tracking-[3px] font-[600] hover:text-primary uppercase text-lg z-20">Jardin Nights</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="uppercase h-[10vh] px-6 border-l-[1px] border-l-[#75716d] rounded-none shadow-none"
            >
              <Link href="/" className="flex items-center justify-center gap-2 text-white font-cormorant tracking-[3px] font-[600] hover:text-primary uppercase text-lg z-20">Specials</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="uppercase h-[10vh] px-6 border-l-[1px] border-l-[#75716d] rounded-none shadow-none"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2 text-white font-cormorant tracking-[3px] font-[600] hover:text-primary uppercase text-lg z-20">Contact</Link>
            </Button>
            <Link href='/table-booking'>
              <Button className="px-7  font-cormorant font-[600] text-lg text-black bg-white h-[10vh] rounded-none uppercase tracking-[3px]"
              >
                book table
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex md:hidden">
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
            >
              <span className="sr-only">Menu</span>
              <EqualizerIcon />
            </Button>
          </Sidebar>
        </div>
      </div>




    </nav >
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
