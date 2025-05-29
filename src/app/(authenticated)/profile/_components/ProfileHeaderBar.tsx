import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

interface ProfileHeaderBarProps {
  label: string;
  backLink?: string;
}

const ProfileHeaderBar = ({
  label,
  backLink = "/profile",
}: ProfileHeaderBarProps) => {
  return (
    <header className="sm:hidden h-nav-mobile w-full ui-container py-3 shadow-sm bg-uiWhite sticky z-20 top-0">
      <div className="h-full flex items-center gap-3">
        <Link href={backLink}>
          <IoIosArrowBack className="text-xl"/>
        </Link>

        <h3 className="text-xl font-medium">{label}</h3>
      </div>
    </header>
  );
};

export default ProfileHeaderBar;
