import NavbarMobileFixed from "@/components/NavbarMobileFixed";
import ProfileHeaderMobile from "./ProfileHeaderMobile";
import ProfileMenuList from "./ProfileMenuList";
import NavbarMobile from "@/components/Navbar/NavbarMobile";

const ProfilePageMobile = () => {
  return (
    <>
      <NavbarMobile />

      <div className="sm:hidden min-h-screen-nav-mobile ui-container py-3 bg-gray-200">
        <ProfileHeaderMobile />
        <ProfileMenuList />
        <NavbarMobileFixed />
      </div>
    </>
  );
};

export default ProfilePageMobile;
