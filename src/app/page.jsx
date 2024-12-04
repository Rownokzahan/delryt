import SectionSeparator from "@/components/SectionSeparator";
import Offers from "./home/Offers";
import TrustedBrands from "./home/TrustedBrands";
import Banner from "./home/Banner";
import FreeDish from "./home/FreeDishes";
import PopularCuisines from "./home/PopularCuisines";
import Qualities from "./home/Qualities";
import LovedCollections from "./home/LovedCollections";
import RestaurantCombos from "./home/RestaurantCombos";
import GiveSure from "./home/GiveSure";
import DownloadApp from "./home/DownloadApp/DownloadApp";
import ServingLocations from "./home/ServingLocations";

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
      <RestaurantCombos />
      <SectionSeparator />
      <GiveSure />
      <SectionSeparator />
      <DownloadApp />
      <SectionSeparator />
      <ServingLocations />
    </main>
  );
}
