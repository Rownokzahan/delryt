import SectionSeparator from "@/components/SectionSeparator";
import Offers from "./home/Offers";
import TrustedBrands from "./home/TrustedBrands";

export default function Page() {
  return (
    <main>
      <Offers />
      <SectionSeparator />
      <TrustedBrands />
    </main>
  );
}
