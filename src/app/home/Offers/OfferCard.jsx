import Image from "next/image";

const OfferCard = ({ offer, index }) => {
  return (
    <div className="px-3 cursor-pointer">
      <Image
        width={464}
        height={232}
        src={offer.image_url}
        alt={`Offer ${index + 1}`}
        className={"rounded-xl hover:scale-[0.98] duration-300 bg-gray-200"}
      />
    </div>
  );
};

export default OfferCard;
