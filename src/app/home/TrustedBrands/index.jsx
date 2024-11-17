import TrustedBrandsDesktop from "./TrustedBrandsDesktop";
import TrustedBrandsMoblile from "./TrustedBrandsMoblile";

const TrustedBrands = () => {
  return (
    <>
      <section className="hidden md:block">
        <TrustedBrandsDesktop />
      </section>
      <section className="md:hidden">
        <TrustedBrandsMoblile />
      </section>
    </>
  );
};

export default TrustedBrands;