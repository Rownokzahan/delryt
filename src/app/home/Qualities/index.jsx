"use client"

import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { PiChefHatBold } from "react-icons/pi";
import { VscPackage } from "react-icons/vsc";

const qualities = [
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
  const [scrollDirection, setScrollDirection] = useState("start");
  const listRef = useRef(null);

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
          <li className="px-4 flex-shrink-0">
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
              <div
                className="size-6 md:size-10 bg-secondary text-white text-xl md:text-3xl flex justify-center items-center"
                style={{
                  clipPath:
                    "polygon(25% 0, 75% 0, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0 75%, 0 25%)",
                }}
              >
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
          <Image
            width={48}
            height={48}
            src="https://assets.faasos.io/eatsure/production/es-btn-nav.svg"
            alt="Toggle Scroll"
          />
        </button>
      </div>
    </section>
  );
};

export default Qualities;
