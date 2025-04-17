import NavbarDesktop from "@/components/Navbar/NavbarDesktop";
import ProfileSidebar from "./_components/ProfileSidebar";
import EditProfileModal from "@/modals/EditProfileModal";
import DateSortModal from "@/modals/DateSortModal";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <>
      <div className="hidden sm:block min-h-screen bg-uiBlack/10">
        <NavbarDesktop />

        <div className="ui-container py-8">
          <div className="min-h-96 bg-uiWhite flex">
            <ProfileSidebar />
            <main className="flex-1 p-4 relative">{children}</main>
          </div>
        </div>
      </div>

      <div className="sm:hidden">{children}</div>

      <EditProfileModal />
      <DateSortModal />
    </>
  );
};

export default ProfileLayout;
