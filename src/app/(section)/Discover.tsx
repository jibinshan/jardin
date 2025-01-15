import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Discover: React.FC = () => {
  return (
    <section className="relative z-10 h-full w-full bg-[#09251E]">
      <div className="absolute -left-8 top-0 hidden md:block">
        <Image
          src="/images/home/discover/leaf.svg"
          width={137}
          height={251}
          alt="first"
          className="h-[160px] w-[160px] object-fill"
        />
      </div>
      <div className="flex flex-col gap-8 pb-12 pt-8 md:flex-row md:pb-52 md:pt-0">
        <div className="flex w-full flex-col gap-6 pl-4 pr-4 pt-8 md:w-1/2 md:pl-40 md:pr-0 md:pt-36">
          <h1 className="mb-8 font-cormorant text-4xl font-[400] uppercase leading-[90%] tracking-[3.5px] text-[#FCCE67] md:mb-12 md:text-[86px]">
            DISCOVER <br /> THE ART OF <br /> TASTE
          </h1>
          <p className="w-full font-cormorant text-base font-[300] uppercase leading-[130%] text-[#FCCE67] md:w-[450px]">
            Indulge in the essence of Mexican gastronomy, where the vibrant zest
            of southern jungles harmonizes with the bold spirit of northern
            deserts. Jardín is a celebration of flavors brought to life with
            passion and authenticity.
          </p>
          <div>
            <Button className="rounded-none bg-[#036538] px-8 py-8 font-cormorant text-base font-[700] uppercase tracking-[3.6px] text-[#FCCE67]">
              View Menu
            </Button>
          </div>
        </div>

        <div className="relative flex w-full flex-col gap-12 pl-4 pr-4 pt-0 md:w-1/2 md:pr-0 md:pt-[500px]">
          <div className="absolute -top-14 hidden md:block">
            <Image
              src="/images/home/discover/first.png"
              width={483}
              height={693}
              alt="first"
              className="h-[490px] w-[390px] object-fill"
            />
          </div>
          <div className="absolute -top-14 right-0 hidden md:block">
            <Image
              src="/images/home/discover/second.png"
              width={483}
              height={693}
              alt="first"
              className="h-[490px] w-[290px] object-fill"
            />
          </div>
          <hr className="bottom-[1.5px] w-full border border-[#FCCE67]" />
          <p className="w-full max-w-[400px] font-cormorant text-base font-[300] italic leading-[116%] text-[#FCCE67] md:text-lg">
            Welcome to Jardín, an upscale Mexican dining destination where the
            vibrant flavors of the jungles in Southern Mexico collide with the
            soul of the northern deserts
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discover;
