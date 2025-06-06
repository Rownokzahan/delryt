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
      <div className="hidden sm:block bg-uiBlack/10">
        <NavbarDesktop />

        <div className="py-8 px-4 max-w-7xl mx-auto">
          <div className="h-[calc(100dvh-var(--h-nav-desktop)-64px)] bg-uiWhite grid grid-cols-13">
            <ProfileSidebar />

            <main className="h-full overflow-y-auto col-span-9 p-4 relative">{children}</main>
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
