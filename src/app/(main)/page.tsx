import SectionSeparator from "@/components/ui/SectionSeparator";
import Banners from "./home/Banners";
import Branches from "./home/Branches";

export default function Home() {
  return (
    <main>
      <SectionSeparator className="hidden sm:block" />
      <Banners />
      <SectionSeparator />
      <Branches />
    </main>
  );
}
