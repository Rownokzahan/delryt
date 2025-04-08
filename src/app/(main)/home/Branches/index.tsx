import Button from "@/components/ui/Button";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import BranchesCarousel from "./BranchesCarousel";

const Branches = () => {
  return (
    <section className="ui-container py-4">
      {/* Desktop heading and explore button */}
      <div className="hidden md:flex items-center justify-between">
        <h3 className="text-2xl">
          <span className="me-1">Find Food From</span>
          <span className="text-primary font-semibold">Our Branches</span>
        </h3>

        <Link href={"/branch-list"}>
          <Button variant="secondary" className="h-max gap-2">
            <span>Explore Branches</span>
            <IoChevronForward className="text-lg" />
          </Button>
        </Link>
      </div>

      {/* Mobile heading */}
      <h3 className="md:hidden mb-2 text-xl text-center font-semibold">
        Find Food from Our Branches
      </h3>

      {/* Carousel displaying branch items */}
      <BranchesCarousel />

      {/* Mobile-only explore all branches button */}
      <Button
        href={"/branch-list"}
        variant="primary-outline"
        className="font-normal mx-auto mt-4 md:hidden"
      >
        Explore All Branches
      </Button>
    </section>
  );
};

export default Branches;
