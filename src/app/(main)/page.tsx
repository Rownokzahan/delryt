import SectionSeparator from "@/components/ui/SectionSeparator";
import Banners from "./home/Banners";
import Branches from "./home/Branches";
import EliteBanner from "./home/EliteBanner";

export default function Home() {
  return (
    <main>
      <SectionSeparator className="hidden sm:block" />
      <Banners />
      <SectionSeparator />
      <Branches />
      <EliteBanner />
    </main>
  );
}
