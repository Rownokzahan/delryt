import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

interface ProfileHeaderMobileProps {
  label: string;
}

const ProfileHeaderMobile = ({ label }: ProfileHeaderMobileProps) => {
  return (
    <header className="sm:hidden w-full ui-container py-3 shadow-sm bg-uiWhite sticky z-20 top-0">
      <div className="flex items-center gap-3">
        <Link href={"/profile"}>
          <IoIosArrowBack />
        </Link>

        <h3 className="text-lg font-medium">{label}</h3>
      </div>
    </header>
  );
};

export default ProfileHeaderMobile;
