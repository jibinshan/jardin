import Image from "next/image";

const BavetteStory = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center lg:py-16 p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11">
        <h2 className="font-playfair text-8xl text-[#262626] md:left-[15%] md:text-8xl text-center">
          The Bruncho<br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/DSC03517.png"
              width={6024}
              height={4024}
              alt="private dining"
              className="md:h-[600px] w-full rounded-lg md:rounded-none object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-playfair text-6xl sm:text-7xl md:text-start text-black">
              From Dream<br />
              to Sizzle
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-black md:text-start">
              Bruncho began as a dream to create a space where coffee and cakes could bring people together. Inspired by the warmth of community and the love for rich flavors, we crafted a cozy café where every visit feels like coming home. From the aroma of freshly brewed coffee to the sight of our handcrafted cakes, Bruncho is designed to awaken your senses and spark joy.
              <br />
              <br />
              Over the years, we’ve grown into a haven for meaningful conversations and cherished moments. Whether it’s a quiet morning with your favorite brew or a lively gathering over sweet treats, Bruncho is here to make every visit special. With every sip and bite, we strive to make your day a little brighter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
