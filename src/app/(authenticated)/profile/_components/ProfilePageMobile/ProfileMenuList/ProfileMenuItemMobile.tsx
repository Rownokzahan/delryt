import Link from "next/link";
import { TbChevronRight } from "react-icons/tb";

interface ProfileMenuItemMobileProps {
  label: string;
  onClick?: () => void;
  href?: string;
}

const ProfileMenuItemMobile = ({
  label,
  onClick,
  href,
}: ProfileMenuItemMobileProps) => {
  const sharedClasses = "py-3 bg-uiWhite flex justify-between gap-2";

  if (href) {
    return (
      <Link href={href} className={sharedClasses}>
        <p>{label}</p>
        <TbChevronRight className="text-gray-300 text-xl" />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`w-full ${sharedClasses}`}>
      <p>{label}</p>
      <TbChevronRight className="text-gray-300 text-xl" />
    </button>
  );
};

export default ProfileMenuItemMobile;
