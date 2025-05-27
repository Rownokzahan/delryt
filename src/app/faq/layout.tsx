import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarMobileFixed from "@/components/NavbarMobileFixed";

interface FaqLayoutProps {
  children: React.ReactNode;
}

const FaqLayout = ({ children }: FaqLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <NavbarMobileFixed />
    </>
  );
};

export default FaqLayout;
