import Image from "next/image";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center bg-white">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-playfair text-5xl font-semibold leading-[66px] text-black lg:text-6xl">
                Bruncho - Where<br />
                Every Sip <br />and Bite<br />
                Tell a Story
              </h1>
              <p className="font-manrope font-normal text-black">
                Welcome to Bruncho – your cozy retreat for coffee lovers and cake enthusiasts.
                Every sip of our freshly brewed coffee and every bite of our handcrafted cakes is made to delight.
                We blend rich flavors with a warm, inviting atmosphere for an unforgettable experience.
                Whether you’re here for a quick pick-me-up or a leisurely moment, we`ve got you covered.
                At Bruncho, every sip and bite truly tells a story worth savoring.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/about-us/DSC03382.png"
              width={2648}
              height={3936}
              alt="hero"
              className="md:h-[900px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
