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

  const { name, banner_image } = category || {};
  const bannerImagePath = getImagePath("category/banner", banner_image);

  return (
    <section className="mt-2 relative z-0 bg-linear-to-r from-black to-black/10">
      <div className="ui-container h-48 px-4 grid items-end relative">
        <h3 className="pb-8 text-3xl text-uiWhite">{name}</h3>

        {/* Share button */}
        <button
          onClick={openShareModal}
          className="shrink-0 ms-auto h-max px-3 py-2 flex items-center gap-2 bg-white/14 text-white absolute top-3 right-3 sm:top-4 sm:right-4"
        >
          <span>Share</span>
          <LuShare2 />
        </button>
      </div>

      {/* Background banner image */}
      <Image
        fill
        src={bannerImagePath}
        alt=""
        className="absolute object-cover size-full -z-10 mix-blend-overlay"
      />
    </section>
  );
};

export default CategoryBanner;
