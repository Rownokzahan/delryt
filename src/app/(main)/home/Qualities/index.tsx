"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import { IconType } from "react-icons";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { PiChefHatBold } from "react-icons/pi";
import { VscPackage } from "react-icons/vsc";

interface QualityFeature {
  id: number | string;
  Icon: IconType;
  label: string;
}

const qualities: QualityFeature[] = [
  {
    id: "01",
    Icon: MdDoNotDisturbAlt,
    label: "No artificial colours or flavours",
  },
  {
    id: "02",
    Icon: PiChefHatBold,
    label: "Kitchens with 200+ Stringent Quality Checks",
  },
  {
    id: "03",
    Icon: VscPackage,
    label: "Tamper Proof Packaging",
  },
  {
    id: "04",
    Icon: HiOutlineShieldCheck,
    label: "Medically Certified Staff",
  },
];

const Qualities = () => {
  const [scrollDirection, setScrollDirection] = useState<"start" | "end">(
    "start"
  );
  const listRef = useRef<HTMLUListElement | null>(null);

  const toggleScroll = () => {
    const list = listRef.current;
    if (!list) return;

    // Scroll to start or end depending on the direction
    if (scrollDirection === "end") {
      list.scrollTo({ left: 0, behavior: "smooth" });
      setScrollDirection("start");
    } else {
      list.scrollTo({ left: list.scrollWidth, behavior: "smooth" });
      setScrollDirection("end");
    }
  };

  return (
    <section className="py-6 bg-[#f8f8f8]">
      <div className="ui-container relative">
        <ul
          ref={listRef}
          className={clsx(
            "py-2 border divide-x flex items-center bg-white overflow-x-auto md:overflow-x-hidden",
            scrollDirection === "start" && "md:me-12",
            scrollDirection === "end" && "md:ms-12"
          )}
          style={{ scrollbarWidth: "none" }}
        >
          {/* Logo */}
          <li className="px-4 shrink-0">
            <Image
              width={231}
              height={64}
              src="https://assets.faasos.io/eatsure/production/surepoints_logo_desktop.svg"
              alt="Eatsurance logo"
              className="w-12 md:w-28"
            />
          </li>

          {/* List of quality features */}
          {qualities.map((feature) => (
            <li key={feature.id} className="px-4 flex gap-3 items-center">
              <div className="size-6 md:size-10 bg-secondary polygon-2 text-uiWhite text-xl md:text-3xl flex justify-center items-center">
                <feature.Icon />
              </div>

              <h3 className="text-sm md:text-lg font-semibold text-nowrap">
                {feature.label}
              </h3>
            </li>
          ))}
        </ul>

        {/* Scroll toggle button */}
        <button
          onClick={toggleScroll}
          className={clsx(
            "absolute top-1/2 -translate-y-1/2",
            scrollDirection === "start" && "right-4",
            scrollDirection === "end" && "left-4 rotate-180",
            "hidden md:block"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 48 48"
          >
            <g filter="url(#filter0_d)">
              <path
                fill="#fff"
                d="M7.192 3.566h3.547V0h26.168v3.566h3.724v3.566H44l-.177 25.557-3.192-.178v3.744h-3.547L36.907 40l-26.168-.178v-3.745H7.28l.177-3.566H4V7.132h3.192V3.566z"
              />
            </g>
            <path
              stroke="#19297C"
              strokeWidth="3"
              d="M20.25 13.78l6.667 6.68-6.667 6.682"
            />
            <defs>
              <filter
                id="filter0_d"
                width="48"
                height="48"
                x="0"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Qualities;
