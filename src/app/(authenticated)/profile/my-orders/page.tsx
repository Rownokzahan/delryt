import Button from "@/components/ui/Button";
import { BsEmojiExpressionless } from "react-icons/bs";
import ProfileHeaderBar from "../_components/ProfileHeaderBar";


const MyOrdersPage = () => {
  return (
    <>
      <ProfileHeaderBar label="My Orders" />

      <main className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <BsEmojiExpressionless className="mx-auto mb-4 text-6xl" />
        <h3 className="text-2xl mb-8 text-center">
          You don&apos;t have any orders!{" "}
        </h3>
        <Button href="/products" className="mx-auto">
          Explore Dishes
        </Button>
      </main>
    </>
  );
};

export default MyOrdersPage;
