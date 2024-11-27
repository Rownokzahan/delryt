import Image from "next/image";

const DishCard = ({ dish }) => {
  const { image, alt, text } = dish || {};

  return (
    <div className="w-32 rounded-lg shadow shadow-white flex-shrink-0">
      <Image
        width={112}
        height={76}
        src={image}
        alt={alt}
        className="w-full aspect-[28/19] rounded-t-lg"
      />
      <p className="py-2 rounded-b-lg bg-white text-sm text-center font-medium">
        {text}
      </p>
    </div>
  );
};

export default DishCard;
