import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";

const BrandCard = ({ brand }) => {
  const { imageUrl, name, tagline, iconImageUrl, link } = brand || {};

  return (
    <Link href={link}>
      <div className="mx-3 relative shadow hover:scale-[1.02] duration-300">
        <Image
          width={500}
          height={335}
          src={imageUrl}
          alt={name}
          className="w-full"
        />

        <div
          className={clsx(
            "w-[calc(100%-(12px*2))] absolute bottom-3 left-1/2 -translate-x-1/2",
            "p-3 bg-black/50 backdrop-blur flex items-center gap-3"
          )}
        >
          <Image
            width={40}
            height={40}
            src={iconImageUrl}
            alt={name || "Icon"}
            className="shrink-0"
            style={{
              clipPath:
                "polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)",
            }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center gap-2">
              <h4 className="text-white text-xl truncate">{name}</h4>
              <TbSquareRoundedChevronRightFilled className="text-white text-2xl flex-shrink-0" />
            </div>
            <p className="text-ui-gray-light text-sm truncate">{tagline}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
