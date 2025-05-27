import useModalById from "@/hooks/useModalById";
import useUser from "@/hooks/useUser";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { useRouter } from "next/navigation";

const CartButtonLink = () => {
  const { openModal: openAuthModal } = useModalById("authModal");
  const { user } = useUser();
  const router = useRouter();

  const handleButtonClick = () => {
    router.replace(`?redirect=/checkout`, { scroll: false });
    openAuthModal();
  };

  return user ? (
    <Link href="/checkout" aria-label="Go to cart">
      <CartIcon />
    </Link>
  ) : (
    <button
      onClick={handleButtonClick}
      type="button"
      aria-label="Open login modal"
    >
      <CartIcon />
    </button>
  );
};

export default CartButtonLink;
