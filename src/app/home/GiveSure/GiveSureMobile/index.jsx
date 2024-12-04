"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import GiveSureCarousel from "./GiveSureCarousel";

const GiveSureMobile = () => {
  return (
    <div className="ui-container py-10">
      <div className="flex gap-2 items-center justify-between overflow-hidden">
        <Image
          width={203}
          height={36}
          src="https://assets.faasos.io/eatsure/production/givesure-logo.png"
          alt=""
          className="w-28 object-contain"
        />

        <div className="flex-1 max-w-64 h-max p-2 py-3 bg-[#282828] flex items-center gap-2 relative">
          <div className="text-tertiary text-sm">
            <FaRegFaceSmileBeam />
          </div>
          <h3 className="font-bold">4,64,059</h3>
          <h5 className="font-semibold text-tertiary text-xs">
            Meals delivered
          </h5>

          <span className="border-[6px] border-s-dark border-b-transparent border-e-dark border-dark absolute -top-px -right-px -left-px"></span>
          <span className="border-[6px] border-s-dark border-t-transparent border-e-dark border-dark absolute -bottom-px -right-px -left-px"></span>
        </div>
      </div>

      <p className="mt-4 text-sm">
        Join us as we serve tasty and safe meals, cooked freshly in our network
        of 300+ kitchens across India
      </p>

      <GiveSureCarousel />

      <h4 className="text-xl border-b-2 border-white/40 pb-3">
        <span className="font-semibold">#Food ForGood</span>
        <span> Mission</span>
      </h4>

      <p className="mt-4 text-sm">
        It is our mission to bring assured goodness for the under privileged to
        enjoy a meal that is fresh, safe, nutritious and delicious. With every
        meal, we work towards a better tomorrow where no one sleeps unfed.
      </p>

      <Button variant="tertiary" className="w-full mt-6">
        Share A Meal
      </Button>
    </div>
  );
};

export default GiveSureMobile;
