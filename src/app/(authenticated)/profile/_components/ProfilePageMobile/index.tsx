import NavbarMobileFixed from "@/components/NavbarMobileFixed";
import ProfileHeaderMobile from "./ProfileHeaderMobile";
import ProfileMenuList from "./ProfileMenuList";

const ProfilePageMobile = () => {
  return (
    <div className="sm:hidden min-h-screen ui-container py-3 bg-gray-200">
      <ProfileHeaderMobile />
      <ProfileMenuList />
      <NavbarMobileFixed />
    </div>
  );
};

export default ProfilePageMobile;
