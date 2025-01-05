"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({ }) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#fbfbfb]">
      <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 md:py-44">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <p className="review-one font-open font-[200] text-xl text-primary md:-ml-[50px]">
            WHAT THEY SAY
          </p>
          <p className="font-open non-italic font-[300] uppercase text-black text-2xl md:text-6xl text-center flex gap-3 justify-center items-center">
            <span className="head-review">Testimonial</span>
          </p>
        </div>
        <div className="review-items flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="ml-4 flex h-fit w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col gap-6 rounded-2xl px-6 py-8 md:basis-1/3 border-[2px] border-primary"
                  >
                    <div className="flex w-full items-center gap-2">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.author_name}
                      />
                      <div className="flex flex-col gap-2">
                        <p className="text-primary">{review.author_name}</p>
                        <span className="text-primary">
                          {review.relative_time_description}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full">
                      {/* {Array.from({ length: review.rating }).map((_, index) => (
                                                <Icons.star key={index} className="text-primary" />
                                            ))} */}
                      <Icons.star key={index} className="text-primary" />
                      <Icons.star key={index} className="text-primary" />
                      <Icons.star key={index} className="text-primary" />
                      <Icons.star key={index} className="text-primary" />
                      <Icons.star key={index} className="text-primary" />
                    </div>
                    <div className="">
                      <p className="text-primary h-[240px]">{review.text}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;