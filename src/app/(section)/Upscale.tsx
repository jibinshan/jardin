import Image from "next/image";
import React from "react";

const Upscale: React.FC = () => {
  return (
    <section className="h-full w-full">
      <div className="h-full w-full bg-[#04100B]">
        <div className="relative flex w-full items-center justify-center md:w-1/2">
          <div className="absolute -top-36 flex w-full items-start justify-center md:top-40">
            <p className="floating text-center font-cormorant text-3xl font-[400] uppercase md:text-8xl">
              <span className="md:text-primary-foreground">U</span>pscale Mexica
              <span className="md:text-primary-foreground">n</span>
              <br /> <span className="md:text-primary-foreground">D</span>
              ining in Watfor
              <span className="md:text-primary-foreground">d</span>
            </p>
          </div>
          <div className="absolute bottom-6 flex w-full flex-col items-center justify-center gap-4 py-4 md:bottom-24 md:gap-14">
            <img
              src="/images/home/about/flower.png"
              width="93"
              height="91"
              alt="welcome"
              className="w-16 md:max-w-full"
            />
            <p className="max-w-[95%] text-center font-cormorant text-base font-[400] text-[#ECE6D6] md:ml-0 md:max-w-[600px] md:text-3xl">
              Welcome to Jardín, an upscale Mexican dining destination where the
              vibrant flavors of the jungles in Southern Mexico collide with the
              soul of the northern deserts
            </p>
          </div>
          <img
            src="/images/home/about/about.png"
            width="987"
            height="1200"
            alt="welcome"
            className="w-full md:w-3/4"
          />
        </div>
      </div>

      <div className="relative h-full w-full bg-[#04100B]">
        <div className="flex w-full flex-col items-center justify-center gap-5 md:gap-20">
          <div className="flex w-full flex-col items-start justify-start gap-3 md:w-3/4 md:gap-5">
            <p className="font-cormorant text-3xl font-[500] text-primary-foreground">
              About Jardín
            </p>
            <p className="w-full font-cormorant text-3xl font-[400] uppercase leading-[35px] text-primary-foreground md:max-w-[85%]">
              Welcome to Jardín, an upscale Mexican dining destination where the
              vibrant flavors of the jungles in Southern Mexico collide with the
              soul of the northern deserts
            </p>
          </div>
          <div className="flex w-full md:w-3/4 md:justify-end">
            <p className="w-full font-cormorant text-xl font-[400] text-primary-foreground md:max-w-[60%]">
              Our culinary team draws inspiration from the diverse landscapes of
              Mexico, blending the bold, earthy flavors of the northern deserts
              with the fresh, vibrant tastes of the southern jungles. Every dish
              is crafted with the utmost care and creativity, using the highest
              quality ingredients to ensure the freshest flavors.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Upscale;
