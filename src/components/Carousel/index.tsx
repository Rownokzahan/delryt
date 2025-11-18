"use client";

import Slider from "react-slick";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import clsx from "clsx";
import React from "react";

interface ArrowProps {
  onClick?: () => void;
  className?: string;
}

// Custom Previous Arrow
const PrevArrow = ({ onClick, className }: ArrowProps) => (
  <button
    className="w-10 h-10 rounded-full shadow-sm absolute left-3 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-uiWhite flex items-center justify-center disabled:hidden"
    onClick={onClick}
    disabled={className?.includes("slick-disabled")}
  >
    <IoChevronBack className="text-xl" />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick, className }: ArrowProps) => (
  <button
    className="w-10 h-10 rounded-full shadow-sm absolute right-3 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-uiWhite flex items-center justify-center disabled:hidden"
    onClick={onClick}
    disabled={className?.includes("slick-disabled")}
  >
    <IoChevronForward className="text-xl" />
  </button>
);

interface CarouselProps {
  children: React.ReactNode;
  slidesToShow?: number;
  containerClasses?: string;
  infinite?: boolean;
  showDots?: boolean;
}

const Carousel = ({
  children,
  slidesToShow = 3,
  containerClasses = "",
  infinite = false,
  showDots = true,
}: CarouselProps) => {
  const isSingleSlide = slidesToShow >= React.Children.count(children);

  const settings = {
    dots: !isSingleSlide && showDots, // Hide dots if there is only one slide
    customPaging: function () {
      return (
        <button>
          <span className="block size-1.5 m-2 rounded-full bg-gray-300" />
        </button>
      );
    },
    dotsClass: "carousel-custom-dots",
    infinite: infinite,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={clsx("relative", containerClasses)}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
