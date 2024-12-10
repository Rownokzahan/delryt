import Button from "@/components/Button";
import Image from "next/image";

const ComboCard = ({ combo, openComboModal }) => {
  const { imageUrl, name, price, isVeg } = combo || {};

  return (
    <div className="px-3">
      <div className="border rounded-md shadow pb-1">
        {/* Combo image */}
        <Image
          width={560}
          height={374}
          src={imageUrl}
          alt={name}
          className="w-full rounded-t-md aspect-[280/187] object-cover"
        />

        {/* Card contents */}
        <div className="p-3 rounded-b-md">
          {/* veg/non-veg indicator */}
          <div className="mb-2 flex gap-2">
            {isVeg ? (
              <Image
                width={12}
                height={12}
                src="images/icons/veg.svg"
                alt="Veg"
                className="mt-[6px] size-4 object-contain"
              />
            ) : (
              <Image
                width={12}
                height={12}
                src="images/icons/non-veg.svg"
                alt="Non Veg"
                className="mt-[6px] size-4 object-contain"
              />
            )}

            {/* Name of the combo, truncating if too long */}
            <h3 title={name} className="sm:text-lg font-semibold">
              {name}
            </h3>
          </div>

          {/* Price of the combo */}
          <h4 className="sm:text-lg font-semibold">₹ {price}</h4>

          {/* Button section with top border */}
          <div className="mt-3 pt-3 border-t">
            <Button
              onClick={openComboModal}
              variant="primary-outline"
              size="small"
            >
              Choose Items
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboCard;
