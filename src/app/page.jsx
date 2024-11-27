import SectionSeparator from "@/components/SectionSeparator";
import Offers from "./home/Offers";
import TrustedBrands from "./home/TrustedBrands";
import Banner from "./home/Banner";
import FreeDish from "./home/FreeDishes";

export default function Page() {
  return (
    <main>
      <Offers />
      <SectionSeparator />
      <TrustedBrands />
      <Banner />
      <FreeDish />
    </main>
  );
}
