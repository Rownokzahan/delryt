"use client";

import Slider from "react-slick";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import clsx from "clsx";
import React from "react";

// Custom Previous Arrow
const PrevArrow = ({ onClick, className }) => (
  <button
    className="w-10 h-10 rounded-full absolute -left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white flex items-center justify-center disabled:hidden"
    onClick={onClick}
    disabled={className?.includes("slick-disabled")}
  >
    <IoChevronBack className="text-xl" />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick, className }) => (
  <button
    className="w-10 h-10 rounded-full absolute -right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white flex items-center justify-center disabled:hidden"
    onClick={onClick}
    disabled={className?.includes("slick-disabled")}
  >
    <IoChevronForward className="text-xl" />
  </button>
);

const Carousel = ({ children, slidesToShow = 3, containerClasses = "" }) => {
  const isSingleSlide = slidesToShow >= React.Children.count(children);

  const settings = {
    dots: !isSingleSlide, // Hide dots if there is only one slide
    customPaging: function (i) {
      return (
        <button>
          <span className="block w-[6px] h-[6px] m-2 rounded-full bg-ui-gray-light"></span>
        </button>
      );
    },
    dotsClass: "carousel-custom-dots",
    infinite: false,
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
    <div className={clsx("relative", containerClasses ? containerClasses : "")}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
