import Image from "next/image";
import Link from "next/link";

const BrandIconCard = ({ brand }) => {
  const { name, category, iconImageUrl, link } = brand || {};
  return (
    <Link href={link} className="w-20 flex flex-col items-center group">
      <Image
        width={40}
        height={40}
        src={iconImageUrl}
        alt={name}
        className="relative -bottom-5 group-hover:-bottom-3 duration-300"
        style={{
          clipPath:
            "polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)",
        }}
      />
      <p className="w-full pt-6 p-2 rounded-lg text-xs text-center truncate bg-ui-gray-light/30">
        {category}
      </p>
    </Link>
  );
};

export default BrandIconCard;
