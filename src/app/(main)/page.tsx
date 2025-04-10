import SectionSeparator from "@/components/ui/SectionSeparator";
import Banners from "./home/Banners";
import Branches from "./home/Branches";
import Cuisines from "./home/Cuisines";
import Qualities from "./home/Qualities";
import Categories from "./home/Categories";
import LatestProducts from "./home/LatestProducts";
import DownloadApp from "./home/DownloadApp";
import PopularProducts from "./home/PopularProducts";

export default function Home() {
  return (
    <main>
      <SectionSeparator className="hidden sm:block" />
      <Banners />
      <Categories />
      <Branches />
      <SectionSeparator className="hidden sm:block" />
      <PopularProducts />
      <SectionSeparator />
      <Cuisines />
      <Qualities />
      <LatestProducts />
      <SectionSeparator />
      <DownloadApp />
    </main>
  );
}
