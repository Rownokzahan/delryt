import { BiMap } from "react-icons/bi";
import { MdOutlineOfflineBolt, MdOutlineShoppingBag } from "react-icons/md";
import { TbWallet } from "react-icons/tb";
import ProfileMenuItem from "../ProfileMenuItem";

const linkItems = [
  {
    id: 1,
    Icon: MdOutlineShoppingBag,
    label: "My Orders",
    href: "/profile/my-orders",
  },
  {
    id: 2,
    Icon: BiMap,
    label: "Manage Address",
    href: "/profile/manage-address",
  },
  {
    id: 3,
    Icon: TbWallet,
    label: "Wallet Transactions",
    href: "/profile/wallet",
  },
  {
    id: 4,
    Icon: MdOutlineOfflineBolt,
    label: "Sure Points",
    href: "/profile/sure-points",
  },
];

const ProfileLinkList = () => {
  return (
    <>
      {linkItems.map((item) => (
        <ProfileMenuItem
          key={item.id}
          Icon={item.Icon}
          href={item.href}
          label={item.label}
        />
      ))}
    </>
  );
};

export default ProfileLinkList;
