import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <nav className="sm:hidden">
        <NavbarMobile />
      </nav>

      {/* Desktop Navbar */}
      <nav className="hidden sm:block">
        <NavbarDesktop />
      </nav>
    </>
  );
};

export default Navbar;
