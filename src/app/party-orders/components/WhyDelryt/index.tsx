import Image from "next/image";

const features = [
  {
    id: "01",
    image:
      "https://product-assets.faasos.io/eatsure/production/delivering-cities.png",
    text: "Delivering Across 70+ Cities",
  },
  {
    id: "02",
    image:
      "https://product-assets.faasos.io/eatsure/production/food-multiple-restaurants.png",
    text: "Food from Multiple Restaurants",
  },
  {
    id: "03",
    image:
      "https://product-assets.faasos.io/eatsure/production/exclusive-discounted-prices.png",
    text: "Exclusive Discounted Prices",
  },
  {
    id: "04",
    image:
      "https://product-assets.faasos.io/eatsure/production/safe-hygienic-food.png",
    text: "Safe and Hygienic Food",
  },
  {
    id: "05",
    image:
      "https://product-assets.faasos.io/eatsure/production/tamper-proof-packaging.png",
    text: "Tamper-Proof Packaging",
  },
];

const WhyDelryt = () => {
  return (
    <section className="py-8 md:py-16 bg-primary/5 text-center">
      <div className="ui-container">
        <h3 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-medium">
          Why Delryt?
        </h3>

        <div className="flex justify-between flex-col md:flex-row md:gap-6 divide-y-2 md:divide-y-0 divide-primary/10">
          {features.map(({ id, image, text }) => (
            <div
              key={id}
              className="py-5 flex items-center gap-4 md:flex-col md:gap-1"
            >
              <div className="relative">
                <Image width={60} height={60} src={image} alt={"Icon"} />
              </div>
              <p className="text-left md:text-center text-pretty">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDelryt;
