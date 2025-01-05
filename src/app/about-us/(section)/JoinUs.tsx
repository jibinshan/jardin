import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({ }) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/DSC03437.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black/60 z-10"></div>
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row z-40">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="max-w-[500px] text-center font-playfair text-5xl leading-[60px]">
            Join Us for an
            <br />
            Unforgettable Moment
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6]">
            Step into Bruncho for a cozy experience filled with freshly brewed coffee and delectable cakes. Every visit promises warmth, flavor, and moments worth savoring. Come create memories that linger long after your last sip or bite.
          </p>
          <Button
            className="group w-fit items-center gap-[1.19rem]  font-semibold uppercase py-6 px-6"
          >
            <Link href='/table-booking' className="flex items-center justify-center gap-2">
              Book A Table{" "}
              <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
