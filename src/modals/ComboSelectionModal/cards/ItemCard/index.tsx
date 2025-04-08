import Image from "next/image";
import ItemCardSkeleton from "./ItemCardSkeleton";
import { ComboItem } from "../../types";
import VegNonVegIcon from "@/components/ui/VegNonVegIcon";

interface ItemCardProps {
  label: string;
  item: ComboItem | null;
  onClick?: () => void;
}

const ItemCard = ({ label, item, onClick = () => {} }: ItemCardProps) => {
  if (item === null) {
    return <ItemCardSkeleton label={label} />;
  }

  const { name, description, image, isVeg } = item || {};

  return (
    <div className="p-2 bg-white" onClick={onClick}>
      <div className="flex gap-2">
        <Image
          width={150}
          height={100}
          src={image}
          alt={name}
          className="size-9 object-cover"
        />

        {/* Adding min-w-0 do the direct child of flex so that the text does not overflow */}
        <div className="min-w-0 space-y-px">
          <p className="text-xs">{label}</p>
          <h5 className="md:truncate">
            {/* veg/non-veg indicator */}
            <VegNonVegIcon isVeg={isVeg} className="mb-px me-1" />
            <span className="font-semibold text-sm">{name}</span>
          </h5>
        </div>
      </div>

      <div className="space-y-2 mt-2 pt-2 border-t">
        <p className="text-xs truncate">{description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
