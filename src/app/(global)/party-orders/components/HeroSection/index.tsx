import Image from "next/image";
import ContactUsButton from "../ContactUsButton";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#fff8fc]">
      <figure className="h-full">
        <Image
          width={1520}
          height={1000}
          src="https://product-assets.faasos.io/eatsure/production/heroBannerDesktop.png"
          alt="Hero Image"
          className="h-full"
        />
      </figure>

      <div className="ui-container max-w-xl mb-8 md:m-16 md:ms-0 text-center md:text-left text-pretty">
        <h2 className="text-3xl md:text-2xl font-medium">
          Sure Party Celebration!
        </h2>
        <p className="my-4 text-balance text-sm md:text-base">
          Elevate your celebrations with hassle free party orders from EatSure.
          Our dedicated team will help you make your event unforgettable and
          effortlessly delicious. With offerings from a wide variety of menus,
          customizable orders, flexible scheduling, dedicated support and
          special offers and discounts, you can trust us to handle your party
          needs with professionalism and flair. Make your party planning a
          breeze, hosting has never been easier!
        </p>

        <ContactUsButton />
      </div>
    </section>
  );
};

export default HeroSection;
