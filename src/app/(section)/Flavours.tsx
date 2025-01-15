import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Flavours: React.FC = () => {
  return (
    <section className="relative h-full w-full">
      <div>
        <div
          className="absolute left-0 top-0 z-0 h-full w-full"
          style={{
            backgroundImage: "url('/images/home/welcome/bg.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "cover",
          }}
        />
      </div>
      <div className="relative z-10 px-2 py-14 md:px-0 md:py-20">
        <div className="flex flex-row justify-center">
          <h5 className="rounded-3xl bg-[#133915] bg-opacity-30 px-6 py-2 text-center font-cormorant text-sm font-[400] uppercase tracking-[1px] text-[#FCCE67] backdrop-blur-2xl md:text-xl">
            Now delivering with <span className="underline">UberEats!</span>
          </h5>
        </div>

        <div className="px-4 pt-16 md:px-44 md:pt-28">
          <h1 className="text-center font-cormorant text-5xl font-[400] uppercase leading-[90%] tracking-[3px] text-[#FCCE67] md:text-start md:text-8xl">
            welcome <br /> to the world <br /> of flavours
          </h1>
        </div>
        <div className="pb-4 pl-4 pt-12 md:pb-28 md:pl-[820px] md:pt-[150px]">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <p className="w-full max-w-[350px] text-center font-cormorant text-sm font-[400] uppercase leading-[130%] text-[#FFF5DD] md:text-start md:text-base">
              Welcome to Jardín, an upscale Mexican dining destination where the
              vibrant flavors of the jungles in Southern Mexico collide with the
              soul of the northern deserts
            </p>
            <div>
              <Button className="rounded-none bg-[#036538] px-8 py-8 font-cormorant text-base font-[700] uppercase tracking-[3.6px] text-[#FCCE67]">
                book table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flavours;
