import Image from "next/image";

const CuisineCard = ({ cuisine }) => {
  const { title, imgSrc } = cuisine || {};

  return (
    <div className="p-2 sm:py-0 sm:px-3">
      <div className="relative aspect-square">
        <Image
          height={500}
          width={500}
          src={imgSrc}
          alt={title}
          className="aspect-square object-cover relative"
        />

        <span className="absolute bg-black/40 inset-0" />

        <div className="absolute top-7 left-px">
          <h4 className="ms-3 text-white font-semibold text-xl sm:text-2xl">
            {title}
          </h4>
          <span className="absolute top-0 left-0 h-9 w-[6px] bg-secondary" />
        </div>

        <span className="border-[25px] border-primary border-e-0 border-s-transparent border-b-transparent absolute -top-px -right-px" />
      </div>
    </div>
  );
};

export default CuisineCard;
