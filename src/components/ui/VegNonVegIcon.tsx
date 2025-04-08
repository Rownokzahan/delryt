import clsx from "clsx";
import Image from "next/image";

interface VegNonVegIconProps {
  isVeg: boolean;
  className?: string;
}

const VegNonVegIcon = ({ isVeg, className = "" }: VegNonVegIconProps) => {
  return (
    <Image
      width={12}
      height={12}
      src={isVeg ? "images/icons/veg.svg" : "images/icons/non-veg.svg"}
      alt={isVeg ? "Veg" : "Non-Veg"}
      className={clsx("size-4 object-contain inline-flex!", className)}
    />
  );
};

export default VegNonVegIcon;
