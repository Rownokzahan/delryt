declare module "react-slick" {
  import React from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    adaptiveHeight?: boolean;
    customPaging?: (i: number) => React.ReactNode;
    dotsClass?: string;
    nextArrow?: React.ReactNode;
    prevArrow?: React.ReactNode;
    responsive?: {
      breakpoint: number;
      settings: Partial<Settings>;
    }[];
  }

  const Slider: React.ComponentType<
    Settings & React.HTMLAttributes<HTMLDivElement>
  >;
  export default Slider;
}
