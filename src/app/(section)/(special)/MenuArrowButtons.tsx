"use client";
import React, {
  type ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import type { EmblaCarouselType } from "embla-carousel";
import "@/app/(section)/(special)/embla-menu.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { ...restProps } = props;

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "group/btn h-10 w-10 rounded-full border-0 border-transparent text-foreground",
        "-left-12 top-1/2 -translate-y-1/2",
      )}
      {...restProps}
    >
      <div
        className="absolute inset-0 flex rounded-full group-hover/btn:hidden"
        style={{
          // border: `2px solid #BC995D`,
          // clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)",
          transition: "clip-path 0.4s ease-in-out",
          transform: "rotate(160deg)",
        }}
      />
      <Image
        src='/images/home/model/arrow.svg'
        width={72}
        height={72}
        alt="arrow"
      />
      {/* <ChevronLeft className="h-5 w-5 md:h-16 md:w-16 text-[#fbf3dd]" /> */}
      <span className="sr-only">Previous slide</span>
    </Button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { ...restProps } = props;

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "group/btn h-10 w-10 rounded-full border-0 border-transparent text-foreground",
        "-right-12 top-1/2 -translate-y-1/2",
      )}
      {...restProps}
    >
      <div
        className="absolute inset-0 flex rounded-full group-hover/btn:hidden"
        style={{
          // border: `2px solid #BC995D`,
          // clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)",
          transition: "clip-path 0.4s ease-in-out",
          transform: "rotate(-20deg)",
        }}
      />
      <Image
        src='/images/home/model/arrow.svg'
        width={72}
        height={72}
        alt="arrow"
        className="rotate-180"
      />
      {/* <ChevronRight className="h-5 md:h-16 w-5 md:w-16 text-[#fbf3dd]" /> */}
      <span className="sr-only">Next slide</span>
    </Button>
  );
};
