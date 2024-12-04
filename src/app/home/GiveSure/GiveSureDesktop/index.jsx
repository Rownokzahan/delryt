import Button from "@/components/Button";
import Image from "next/image";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const GiveSureDesktop = () => {
  return (
    <div className="ui-container py-20">
      <div className="flex lg:gap-12 items-center justify-between">
        <div className="flex-1 space-y-4">
          <Image
            width={203}
            height={36}
            src="https://assets.faasos.io/eatsure/production/givesure-logo.png"
            alt=""
            className="max-h-28 object-contain"
          />

          <p className="text-xl font-medium">
            Join us as we serve tasty and safe meals, cooked freshly in our
            network of 300+ kitchens across India
          </p>
        </div>

        <div className="max-w-xl flex-1 h-max p-10 bg-[#282828] flex items-center gap-4 relative">
          <div className="text-3xl text-tertiary">
            <FaRegFaceSmileBeam />
          </div>
          <h3 className="text-4xl font-bold flex-shrink-0">4,64,059</h3>
          <h5 className="text-2xl font-semibold text-tertiary">
            Meals delivered
          </h5>

          <span className="border-[16px] border-s-dark border-b-transparent border-e-dark border-dark absolute -top-px -right-px -left-px"></span>

          <span className="border-[16px] border-s-dark border-t-transparent border-e-dark border-dark absolute -bottom-px -right-px -left-px"></span>
        </div>
      </div>

      <div className="my-8 grid grid-cols-3 gap-6 xl:gap-12">
        <Image
          width={400}
          height={450}
          src="https://assets.faasos.io/eatsure/production/updated_givesure_one.jpg?d=375&tr=w-0.5,h-0.5"
          alt="Give Sure one"
          className="w-full aspect-[8/9] object-cover"
        />
        <Image
          width={400}
          height={450}
          src="https://assets.faasos.io/eatsure/production/updated_givesure_two.jpg?d=375&tr=w-0.5,h-0.5"
          alt="Give Sure two"
          className="w-full aspect-[8/9] object-cover"
        />
        <Image
          width={400}
          height={450}
          src="https://assets.faasos.io/eatsure/production/updated_givesure_three.jpg?d=375&tr=w-0.5,h-0.5"
          alt="Give Sure three"
          className="w-full aspect-[8/9] object-cover"
        />
      </div>

      <div className="flex gap-4">
        <div className="space-y-4">
          <h4 className="text-3xl">
            <span className="font-semibold">#Food ForGood</span>
            <span> Mission</span>
          </h4>

          <p className="text-xl">
            It is our mission to bring assured goodness for the under privileged
            to enjoy a meal that is fresh, safe, nutritious and delicious. With
            every meal, we work towards a better tomorrow where no one sleeps
            unfed.
          </p>
        </div>

        <Button variant="tertiary" className="flex-shrink-0 h-max text-nowrap">
          Share A Meal
        </Button>
      </div>
    </div>
  );
};

export default GiveSureDesktop;
