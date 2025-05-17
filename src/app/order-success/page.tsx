import Button from "@/components/ui/Button";
import Link from "next/link";
import { IoWarning } from "react-icons/io5";

const OrderSuccessPage = () => {
  return (
    <main className="min-h-[100dvh] grid place-items-center px-4">
      <div className="text-center max-w-lg w-full">
        <IoWarning className="mx-auto text-8xl text-red-700" />

        <h1 className="mt-6 text-2xl font-semibold text-primary">
          Order Failed
        </h1>

        <p className="mt-3 text-uiBlack-light">
          We couldn&apos;t find a valid order ID. Please try again or contact
          support.
        </p>

        <div className="mt-8 w-max mx-auto">
          <Link href={"/"}>
            <Button variant="primary-outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OrderSuccessPage;
