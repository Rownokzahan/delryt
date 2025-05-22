import { Branch } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import clsx from "clsx";
import Image from "next/image";
import { HiMapPin } from "react-icons/hi2";

interface BranchCardProps {
  branch: Branch;
  selectedBranch: Branch | null;
  onBranchSelect: (branch: Branch) => void;
  className?: string;
}

const BranchCard = ({
  branch,
  selectedBranch,
  onBranchSelect,
  className = "",
}: BranchCardProps) => {
  const { id, cover_image, image, name, address } = branch || {};

  const coverImagePath = getImagePath("branch", cover_image);
  const imagePath = getImagePath("branch", image);

  return (
    <article
      className={clsx(
        "aspect-5/4 overflow-hidden border-2",
        className,
        selectedBranch?.id === id ? "border-primary" : "border-transparent"
      )}
    >
      <button
        onClick={() => onBranchSelect(branch)}
        className={clsx("size-full shadow-sm relative")}
      >
        {/* Cover Image */}
        <Image
          width={500}
          height={335}
          src={coverImagePath}
          alt={name}
          className="size-full object-cover hover:scale-[1.02] duration-300"
        />

        <div
          className={clsx(
            "w-[calc(100%-(12px*2))] h-18 absolute bottom-3 left-1/2 -translate-x-1/2",
            "p-3 flex items-center gap-3",
            selectedBranch?.id === id ? "bg-primary/70" : "bg-black/50",
            "backdrop-blur-sm"
          )}
        >
          {/* Branch Image */}
          <Image
            width={40}
            height={40}
            src={imagePath}
            alt={name}
            className="size-10 aspect-square shrink-0 polygon-1"
          />

          {/* Branch Name and Address */}
          <div className="flex-1 min-w-0 text-left">
            <h4 className="text-uiWhite text-xl truncate">{name}</h4>

            <div className="flex items-center gap-1">
              <HiMapPin className="mb-[2px] shrink-0 text-uiWhite/70 text-sm" />
              <p className="text-uiWhite/70 text-sm truncate">{address}</p>
            </div>
          </div>
        </div>
      </button>
    </article>
  );
};

export default BranchCard;
