import Image from "next/image";
import ContactUsButton from "../ContactUsButton";

const AboutBrand = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative">
        <div className="ui-container py-8 md:py-16 grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          <figure>
            <Image
              width={898}
              height={749}
              src="https://product-assets.faasos.io/eatsure/production/aboutBrand_desktop.png"
              alt="about brand"
              className="w-full hidden sm:block"
            />
            <Image
              width={712}
              height={417}
              src="https://product-assets.faasos.io/eatsure/production/aboutBrand-mobile.png"
              alt="about brand"
              className="w-full sm:hidden"
            />
          </figure>

          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-medium text-pretty">
              Delryt - Multiple Restaurants Delivered together in ONE Order
            </h3>
            <p>
              Be it a physical celebration or a virtual party for Birthdays,
              Anniversaries, Milestones or any other occasions.
            </p>

            <ContactUsButton />
          </div>
        </div>

        {/* Decorative pizza images */}
        <span
          className="size-56 hidden 2xl:block bg-no-repeat bg-contain absolute z-10 top-full -translate-y-2/3 left-0"
          style={{
            backgroundImage:
              "url('https://product-assets.faasos.io/eatsure/production/small-image1.png')",
          }}
        />
        <span
          className="size-56 hidden 2xl:block bg-no-repeat bg-contain absolute z-10 top-full -translate-y-2/3 -right-24"
          style={{
            backgroundImage:
              "url('https://product-assets.faasos.io/eatsure/production/small-image2.png')",
          }}
        />
      </div>
    </section>
  );
};

export default AboutBrand;
