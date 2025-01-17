import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronDown, Search } from "lucide-react";

const CheckOut: React.FC = () => {
  return (
    <section className="relative flex h-full w-full flex-col pt-8">
      <div>
        {/*head section */}
        <div className="flex flex-row items-center justify-between bg-[#000] px-4 py-4 md:px-24 md:py-8">
          <Link href={"#"}>
            <Image
              src={"/images/home/checkout/arrow.png"}
              width={30}
              height={26}
              alt="heart"
            />
          </Link>
          <Link href={"#"} className="pt-4">
            <Image
              src={"/images/home/checkout/logo.svg"}
              width={129}
              height={48}
              alt="heart"
            />
          </Link>

          <Search className="h-8 w-8" />
        </div>

        {/*first section */}
        <div className="relative h-full w-full bg-[#000] pb-6">
          <div className="absolute bottom-1 left-0 top-1">
            <Image
              src={"/images/home/checkout/left.png"}
              width={124}
              height={240}
              alt="heart"
            />
          </div>
          <div className="absolute bottom-1 right-0 top-1">
            <Image
              src={"/images/home/checkout/right.png"}
              width={124}
              height={240}
              alt="heart"
            />
          </div>
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-3 pb-12 pt-6 md:pt-12"
            style={{
              backgroundImage: "url('/images/home/checkout/bg.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div>
              <button className="font-manrope bg-[#000] px-5 py-3 text-sm font-[800] leading-[150%] text-[#D5A859] md:text-base">
                ORDER #CCD776
              </button>
            </div>
            <h4 className="font-manrope text-center text-2xl font-[500] leading-[150%] text-[#000] md:text-4xl">
              We’ve got your order
            </h4>
            <div className="flex flex-col">
              <h5 className="font-manrope text-center text-base font-[800] leading-[150%] text-[#000] md:text-lg">
                Scheduled Collection Time
              </h5>
              <span className="font-manrope text-center text-lg font-[800] leading-[150%] text-[#000] md:text-xl">
                6:50pm
              </span>
            </div>
          </div>
        </div>

        {/*second section */}
        <div className="flex flex-col gap-6 bg-[#0F0F0F] px-4 py-4 md:px-24 md:py-8">
          <div className="flex flex-col gap-2">
            <h5 className="font-manrope text-sm font-[700] leading-[150%] text-[#FBEAD2] md:text-lg">
              Restaurant Details
            </h5>
            <h4 className="font-manrope pb-2 text-sm font-[400] capitalize leading-[80%] tracking-[0.86px] text-[#FBEAD2] md:text-lg">
              Bavett’s Manchester- Parrs Wood
            </h4>
            <p className="font-manrope text-xs font-[400] leading-[150%] tracking-[1.02px] text-[#FBEAD2] md:text-base">
              123 High Street,Birmingham, West <br /> Midlands,B4 7BB <br />{" "}
              United Kingdom
            </p>
            <span className="font-manrope text-xs font-[400] leading-[150%] tracking-[1.02px] text-[#FBEAD2] underline decoration-[#FBEAD2] decoration-1 underline-offset-4 md:text-base">
              0161 438 0054
            </span>
          </div>
          <div className="flex flex-row gap-3">
            <button className="border border-[#BC995D] px-4 py-3 text-center font-inter text-sm font-[700] uppercase leading-[22px] text-[#BC995D] hover:bg-[#BC995D] hover:text-white md:text-base">
              Get Directions
            </button>
            <button className="border border-[#BC995D] px-4 py-3 text-center font-inter text-sm font-[700] uppercase leading-[22px] text-[#BC995D] hover:bg-[#BC995D] hover:text-white md:text-base">
              Call restaurant
            </button>
          </div>
          <div className="flex flex-col gap-3 pb-4 md:pb-6">
            <div className="flex flex-row justify-between border-b border-[#BC995D] pb-2">
              <h5 className="font-manrope text-lg font-[700] leading-[150%] text-[#FBEAD2] md:text-xl">
                View order details
              </h5>
              <ChevronDown className="h-6 w-6" />
            </div>
            <div className="flex flex-row justify-between border-b border-[#BC995D] pb-2">
              <h5 className="font-manrope text-sm font-[700] leading-[150%] text-[#FBEAD2] md:text-base">
                Sub-Total
              </h5>
              <span className="font-manrope text-sm font-[700] leading-[150%] text-[#BC995D] md:text-base">
                £34.70
              </span>
            </div>
            <div className="flex flex-row justify-between border-b border-[#BC995D] pb-2">
              <h5 className="font-manrope text-sm font-[700] leading-[150%] text-[#FBEAD2] md:text-base">
                Order Total
              </h5>
              <span className="font-manrope text-sm font-[700] leading-[150%] text-[#BC995D] md:text-base">
                £34.70
              </span>
            </div>
          </div>
        </div>

        {/*last section */}
        <div className="flex flex-col bg-[#0F0F0F]">
          <div className="flex w-full flex-row items-center justify-center gap-2 bg-[#E4B35E] px-2 py-4">
            <Image
              src={"/images/home/checkout/heart.png"}
              width={55}
              height={42}
              alt="heart"
            />
            <p className="font-manrope text-xs font-[500] capitalize leading-[20px] tracking-[0.74px] text-[#000] md:text-lg">
              You are now 2 cillies away from a Reward{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-6 md:py-8">
            <h3 className="font-manrope pt-4 text-center text-lg font-[800] leading-[150%] text-[#BC995D] md:pt-6 md:text-2xl">
              How to collect your food{" "}
            </h3>
            <div>
              <span className="font-manrope flex h-12 w-12 items-center justify-center rounded-full bg-[#BC995D] text-center text-base font-[800] leading-[150%] text-[#FFF] md:text-xl">
                1
              </span>
            </div>
            <p className="font-manrope w-[280px] text-center text-base font-[400] capitalize leading-[25px] tracking-[0.86px] text-[#FBEAD2] md:w-full md:text-lg">
              Head to the restaurant to pick up order
            </p>
            <div>
              <span className="font-manrope flex h-12 w-12 items-center justify-center rounded-full bg-[#BC995D] text-center text-base font-[800] leading-[150%] text-[#FFF] md:text-xl">
                2
              </span>
            </div>
            <p className="font-manrope w-[280px] text-center text-base font-[400] capitalize leading-[25px] tracking-[0.86px] text-[#FBEAD2] md:w-full md:text-lg">
              Head to the restaurant to pick up order
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
