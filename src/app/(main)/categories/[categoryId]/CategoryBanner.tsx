import useModalById from "@/hooks/useModalById";
import { Category } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import Image from "next/image";
import { LuShare2 } from "react-icons/lu";

interface CategoryBannerProps {
  category: Category;
}

const CategoryBanner = ({ category }: CategoryBannerProps) => {
const { openModal: openShareModal } = useModalById("shareModal");

  const { name, banner_image } = category;
  const bannerImagePath = getImagePath("category/banner", banner_image);

  return (
    <section className="mt-2 ui-container">
      <div className="h-44 ui-container bg-linear-to-r from-black to-black/10 grid items-end relative">
        <h3 className="pb-8 text-5xl text-uiWhite">{name}</h3>

        {/* Background banner image */}
        <Image
          fill
          src={bannerImagePath}
          alt=""
          className="absolute object-cover size-full -z-10"
        />

        {/* Share button */}
        <button
          onClick={openShareModal}
          className="shrink-0 ms-auto h-max px-3 py-2 flex items-center gap-2 bg-white/14 text-white absolute top-3 right-3 sm:top-4 sm:right-4"
        >
          <span>Share</span>
          <LuShare2 />
        </button>
      </div>
    </section>
  );
};

export default CategoryBanner;
