import Image from "next/image";
import ItemCardSkeleton from "./ItemCardSkeleton";

const ItemCard = ({ label, item, isSkeleton = false, onClick = () => {} }) => {
  if (isSkeleton) {
    return <ItemCardSkeleton label={label} />;
  }

  const { name, description, imageUrl, isVeg } = item || {};

  return (
    <div className="p-2 bg-white" onClick={onClick}>
      <div className="flex gap-2">
        <Image
          width={150}
          height={100}
          src={imageUrl}
          alt={name}
          className="size-9 object-cover"
        />

        {/* Adding min-w-0 do the direct child of flex so that the text does not overflow */}
        <div className="min-w-0 space-y-px">
          <h6 className="text-xs">{label}</h6>
          <div className="flex gap-1">
            {/* veg/non-veg indicator */}
            <Image
              width={12}
              height={12}
              src={isVeg ? "images/icons/veg.svg" : "images/icons/non-veg.svg"}
              alt={isVeg ? "Veg" : "Non Veg"}
              className="flex-shrink-0 mt-[3px] size-3 object-contain"
            />
            <span className="font-semibold text-sm md:truncate">{name}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-2 pt-2 border-t">
        <p className="text-xs truncate">{description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
