import BreadcrumbNav from "./BreadcrumbNav";
import TopNav from "./TopNav";

const CheckoutNavbarDesktop = () => {
  return (
    <div className="hidden md:block">
      {/* Top Navbar */}
      <TopNav />

      {/* Breadcrumb navigation */}
      <BreadcrumbNav />
    </div>
  );
};

export default CheckoutNavbarDesktop;
