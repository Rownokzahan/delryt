import Button from "@/components/ui/Button";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import BranchesCarousel from "./BranchesCarousel";

const Branches = () => {
  return (
    <section className="ui-container py-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">
          <span className="me-1">Find Food From</span>
          <span className="text-primary font-semibold">Our Branches</span>
        </h3>

        {/* Button to explore more branches */}
        <Link href={"/branch-list"}>
          <Button variant="secondary" className="h-max gap-2">
            <span>Explore Branches</span>
            <IoChevronForward className="text-lg" />
          </Button>
        </Link>
      </div>

      <BranchesCarousel />
    </section>
  );
};

export default Branches;
