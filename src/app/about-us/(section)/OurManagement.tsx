import Image from "next/image";

const OurManagement = ({ }) => {
  return (
    <section className="relative flex h-full w-full max-w-[1300px] items-center justify-center bg-[#050505] p-4 lg:py-24">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="text-center font-playfair text-6xl text-[#f0dfc8] md:left-[15%] md:text-6xl">
          Our Management
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/member-1.jpg"
              width={639}
              height={704}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
              Welcome to Ora. From the very beginning, our vision was to
              create a place where every bite tells a story of quality, passion,
              and dedication. What began as a humble space has grown into a
              thriving destination, and it is truly our honor to share it with
              you.Each dish crafted with care, and every detail of your experience
              thoughtfully considered. Our commitment to sustainability,
              authenticity, and culinary excellence is what drives us, and
              we&apos;re thrilled to bring that to every plate we serve.
              <br />
              <br />
              At Ora, we believe dining should be more than just a meal—it
              should be an experience you remember long after the last bite.
              Whether you&apos;re here for an intimate dinner, a family
              celebration, or a night out with friends, we aim to make it
              unforgettable. Thank you for joining us on this journey, for
              sharing in our passion, and for allowing us to create a little
              magic for you. We look forward to making every visit to Ora as
              extraordinary as the first.
            </p>
            <div>
              <h1 className="text-center font-playfair text-2xl md:text-start">
                Mustafa Serce
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-center lg:gap-9">
          <div className="flex w-full flex-col gap-4 lg:w-fit">
            <div className="h-full w-fit overflow-hidden p-4 md:p-0">
              <Image
                src="/images/about-us/member-1.jpg"
                width={404}
                height={496}
                alt="private dining"
                className="h-auto w-fit rounded-lg md:rounded-none"
              />
            </div>
            <div className="w-full lg:w-fit">
              <h1 className="text-center font-playfair text-2xl md:text-start">
                Mustafa Serce
              </h1>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 lg:w-fit">
            <div className="h-full w-full overflow-hidden p-4 md:p-0">
              <Image
                src="/images/about-us/member-2.jpeg"
                width={404}
                height={496}
                alt="private dining"
                className="h-auto w-full rounded-lg md:rounded-none"
              />
            </div>
            <div className="w-full lg:w-fit">
              <h1 className="text-center font-playfair text-2xl md:text-start">
                Guven Serce
              </h1>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 lg:w-fit">
            <div className="h-full w-fit overflow-hidden p-4 md:p-0">
              <Image
                src="/images/about-us/member-3.webp"
                width={639}
                height={704}
                alt="private dining"
                className="h-auto w-full rounded-lg md:rounded-none"
              />
            </div>
            <div className="w-full lg:w-fit">
              <h1 className="text-center font-playfair text-2xl md:text-start">
                Emrah Bal
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurManagement;
