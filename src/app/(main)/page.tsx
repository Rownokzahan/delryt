import SectionSeparator from "@/components/ui/SectionSeparator";
import Banners from "./home/Banners";
import Branches from "./home/Branches";
import EliteBanner from "./home/EliteBanner";
import FreeDishes from "./home/FreeDishes";
import Cuisines from "./home/Cuisines";
import Qualities from "./home/Qualities";
import Categories from "./home/Categories";
import LatestProducts from "./home/LatestProducts";
import GiveSure from "./home/GiveSure";
import DownloadApp from "./home/DownloadApp";

export default function Home() {
  return (
    <main>
      <SectionSeparator className="hidden sm:block" />
      <Banners />
      <SectionSeparator />
      <Branches />
      <EliteBanner />
      <FreeDishes />
      <SectionSeparator />
      <Cuisines />
      <Qualities />
      <SectionSeparator />
      <Categories />
      <SectionSeparator />
      <LatestProducts />
      <SectionSeparator />
      <GiveSure />
      <SectionSeparator />
      <DownloadApp />
      <SectionSeparator />
    </main>
  );
}
