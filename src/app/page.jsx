import SectionSeparator from "@/components/SectionSeparator";
import Offers from "./home/Offers";
import TrustedBrands from "./home/TrustedBrands";
import Banner from "./home/Banner";
import FreeDish from "./home/FreeDishes";
import PopularCuisines from "./home/PopularCuisines";
import Qualities from "./home/Qualities";
import LovedCollections from "./home/LovedCollections";

export default function Page() {
  return (
    <main>
      <Offers />
      <SectionSeparator />
      <TrustedBrands />
      <Banner />
      <FreeDish />
      <PopularCuisines />
      <Qualities />
      <SectionSeparator />
      <LovedCollections />
      <SectionSeparator />
    </main>
  );
}
