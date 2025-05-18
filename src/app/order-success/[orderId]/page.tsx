import Button from "@/components/ui/Button";
import Link from "next/link";
import { IoBagCheck } from "react-icons/io5";

interface OrderSuccessPageProps {
  params: Promise<{ orderId: string }>;
}

const OrderSuccessPage = async ({ params }: OrderSuccessPageProps) => {
  const { orderId } = await params;

  return (
    <main className="min-h-[100dvh] grid place-items-center px-4">
      <div className="text-center max-w-lg w-full">
        <IoBagCheck className="mx-auto text-8xl text-primary" />

        <h1 className="mt-6 text-2xl font-semibold">
          Your Order Was Successful!
        </h1>

        <p className="mt-3 text-uiBlack-light">
          Thank you for your purchase. We&apos;re currently processing your
          order.
        </p>

        <p className="mt-4 text-sm">
          <span className="font-medium">Order ID:</span> {orderId}
        </p>

        <div className="max-w-sm mt-8 mx-auto flex flex-col md:flex-row justify-center gap-4">
          <Link href={"/"} className="w-full">
            <Button variant="primary-outline" className="w-full">
              Back to Home
            </Button>
          </Link>

          <Link href={"/"} className="w-full">
            <Button className="w-full">Track Order</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OrderSuccessPage;
