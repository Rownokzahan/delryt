import brandData from "./brandData";
import TrustedBrandsDesktop from "./TrustedBrandsDesktop";
import TrustedBrandsMoblile from "./TrustedBrandsMoblile";

const TrustedBrands = () => {
  return (
    <>
      {/* Desktop view: Visible on medium screens and larger */}
      <section className="hidden md:block">
        <TrustedBrandsDesktop brandData={brandData} />
      </section>

      {/* Mobile view: Visible on small screens only */}
      <section className="md:hidden">
        <TrustedBrandsMoblile brandData={brandData} />
      </section>
    </>
  );
};

export default TrustedBrands;
