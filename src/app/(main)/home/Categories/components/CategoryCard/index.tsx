import { Category } from "@/types";
import { getImagePath } from "@/utils/imageHelper";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { name, image } = category || {};

  const imagePath = getImagePath("category", image);

  return (
    <article className="p-3">
      <Link
        href={``}
        className="block p-3 hover:scale-105 duration-300"
        style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 16px 0px" }}
      >
        <figure className="relative w-full">
          <Image
            width={300}
            height={201}
            src={imagePath}
            alt={name}
            className="w-full aspect-100/67 object-cover"
          />

          {/* Triangle */}
          <span className="border-[16px] border-s-transparent border-b-transparent border-white absolute -top-px -right-px"></span>
        </figure>

        <div className="my-3 flex justify-between items-center gap-3">
          {/* Category Name */}
          <h4 className="flex-1 truncate md:text-xl">{name}</h4>

          <span className="w-6">
            {/* Arrow icon */}
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path
                fill="#C60E0E"
                d="M1.915 2.14h2.128V0h15.701v2.14h2.234v2.14H24l-.106 15.334-1.916-.107v2.246H19.85L19.744 24l-15.7-.107v-2.247H1.967l.107-2.14H0V4.28h1.915V2.14z"
              ></path>
              <path
                stroke="#fff"
                strokeWidth="2"
                d="M10.005 8.004l4 4-4 4"
              ></path>
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
};

export default CategoryCard;
