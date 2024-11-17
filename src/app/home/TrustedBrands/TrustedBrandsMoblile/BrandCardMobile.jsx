import Image from "next/image";
import Link from "next/link";

const BrandCardMobile = ({ brand }) => {
  const { mobileImageUrl, name, link } = brand || {};

  return (
    <Link href={link} className="py-1 px-2 block relative">
      <Image
        width={304}
        height={304}
        src={mobileImageUrl}
        alt={name}
        className="w-full aspect-square rounded-t-md"
      />

      <div className="px-4 py-2 border rounded-b-md text-center shadow-sm">
        <p className="text-sm h-14">{name}</p>
      </div>
    </Link>
  );
};

export default BrandCardMobile;
