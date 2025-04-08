import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarMobileFixed from "@/components/NavbarMobileFixed";
import SearchBarMobile from "@/components/ui/SearchBarMobile";
import SelectDeliverySlotSection from "@/components/ui/SelectDeliverySlotSection";
import BranchRoute from "@/routeGuards/BranchRoute";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    // Redirects to branch list page if no branch is selected.
    <BranchRoute>
      <header>
        <Navbar />
        <SelectDeliverySlotSection />
        <SearchBarMobile />
      </header>

      <div className="min-h-[calc(100dvh-248px)] sm:min-h-[calc(100dvh-140px)]">
        {children}
      </div>
      <Footer />

      {/* Sticky Navbar for mobile device */}
      <NavbarMobileFixed />
    </BranchRoute>
  );
};

export default MainLayout;
