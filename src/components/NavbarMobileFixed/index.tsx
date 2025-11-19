"use client";

import { FiHome, FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { LuPartyPopper } from "react-icons/lu";
import NavItem from "./NavItem";
import useUser from "@/hooks/useUser";
import useModalById from "@/hooks/useModalById";
import { useRouter } from "next/navigation";
import { useCart } from "@/stores/useCartStore";

const NavbarMobileFixed = () => {
  const { user } = useUser();
  const { cart } = useCart();
  const { openModal: openAuthModal } = useModalById("authModal");
  const router = useRouter();

  const handleAuthRedirect = (path: string) => {
    router.replace(`?redirect=${path}`, { scroll: false });
    openAuthModal();
  };

  return (
    <div className="sm:hidden pb-[60px] sm:pb-0">
      <nav
        className="w-full h-[60px] ui-container py-3 fixed bottom-0 left-0 z-40 bg-white flex justify-between items-center text-ui-gray text-center"
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px -4px 4px 0px" }}
      >
        <NavItem href={"/"} icon={FiHome} label={"Home"} />

        <NavItem
          href={"/party-orders"}
          icon={LuPartyPopper}
          label={"Party Order"}
        />

        {/* Cart */}
        {user ? (
          <NavItem
            href={"/checkout"}
            icon={FiShoppingCart}
            label={"Cart"}
            count={cart.length}
          />
        ) : (
          <NavItem
            isButton={true}
            onClick={() => handleAuthRedirect("/checkout")}
            icon={FiShoppingCart}
            label={"Cart"}
            count={cart.length}
          />
        )}

        {/* My Profile */}
        {user ? (
          <NavItem href={"/profile"} icon={BiUser} label={"My Profile"} />
        ) : (
          <NavItem
            isButton={true}
            onClick={() => handleAuthRedirect("/profile")}
            icon={BiUser}
            label={"My Profile"}
          />
        )}
      </nav>
    </div>
  );
};

export default NavbarMobileFixed;
