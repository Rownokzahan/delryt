import { Banner } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import Image from "next/image";
import Link from "next/link";

interface BannerCardProps {
  banner: Banner;
}

const BannerCard = ({ banner }: BannerCardProps) => {
  const imagePath = getImagePath("banner", banner.image);

  return (
    <article className="px-3">
      <Link href={`/`}>
        <Image
          width={640}
          height={320}
          src={imagePath}
          alt="Offer Image"
          className="w-full aspect-2/1 object-cover rounded-xl hover:scale-[0.99] duration-300 bg-gray-200"
        />
      </Link>
    </article>
  );
};

export default BannerCard;
