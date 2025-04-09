import Button from "@/components/ui/Button";
import Image from "next/image";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const GiveSureDesktop = () => {
  return (
    <div className="ui-container py-20">
      <div className="flex lg:gap-12 items-center justify-between">
        <div className="flex-1 space-y-4">
          <h2 className="text-tertiary font-semibold text-6xl">Give Sure</h2>
          <p className="text-xl font-medium">
            Join us as we serve tasty and safe meals, cooked freshly in our
            network of 300+ kitchens across India
          </p>
        </div>

        <div className="max-w-xl flex-1 h-max p-10 bg-black/40 flex items-center gap-4 relative">
          <div className="text-3xl text-tertiary">
            <FaRegFaceSmileBeam />
          </div>
          <h3 className="text-4xl font-bold shrink-0">4,64,059</h3>
          <h5 className="text-2xl font-semibold text-tertiary">
            Meals delivered
          </h5>

          <span className="border-[16px] border-x-uiBlack border-b-transparent border-t-uiBlack absolute -top-px -right-px -left-px"></span>
          <span className="border-[16px] border-x-uiBlack border-t-transparent border-b-uiBlack absolute -bottom-px -right-px -left-px"></span>
        </div>
      </div>

      <div className="my-8 grid grid-cols-3 gap-6 xl:gap-12">
        <Image
          width={400}
          height={450}
          src="https://assets.faasos.io/eatsure/production/updated_givesure_one.jpg?d=375&tr=w-0.5,h-0.5"
          alt="Give Sure one"
          className="w-full aspect-8/9 object-cover"
        />
        <Image
          width={400}
          height={450}
          src="https://assets.faasos.io/eatsure/production/updated_givesure_two.jpg?d=375&tr=w-0.5,h-0.5"
          alt="Give Sure two"
          className="w-full aspect-8/9 object-cover"
        />
        <Image
          width={400}
          height={450}
          src="https://assets.faasos.io/eatsure/production/updated_givesure_three.jpg?d=375&tr=w-0.5,h-0.5"
          alt="Give Sure three"
          className="w-full aspect-8/9 object-cover"
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

        <Button variant="tertiary" className="shrink-0 h-max text-nowrap">
          Share A Meal
        </Button>
      </div>
    </div>
  );
};

export default GiveSureDesktop;
