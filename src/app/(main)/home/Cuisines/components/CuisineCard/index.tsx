import { Cuisine } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import Image from "next/image";
import Link from "next/link";

interface CuisineCardProps {
  cuisine: Cuisine;
}

const CuisineCard = ({ cuisine }: CuisineCardProps) => {
  const { name, image } = cuisine || {};

  const imagePath = getImagePath("cuisine", image);

  return (
    <Link
      href={``}
      className="block p-2 sm:py-0 sm:px-3 hover:scale-[1.02] duration-300"
    >
      <div className="relative aspect-square">
        <Image
          height={500}
          width={500}
          src={imagePath}
          alt={name}
          className="aspect-square object-cover relative"
        />

        <span className="absolute bg-black/40 inset-0" />

        <div className="absolute top-7 left-px">
          <h4 className="ms-3 text-uiWhite font-semibold text-xl sm:text-2xl">
            {name}
          </h4>
          <span className="absolute top-0 left-0 h-9 w-[6px] bg-secondary" />
        </div>

        <span className="border-[25px] border-primary border-e-0 border-s-transparent border-b-transparent absolute -top-px -right-px" />
      </div>
    </Link>
  );
};

export default CuisineCard;
