import Link from "next/link";
import ProfileHeaderBar from "../../_components/ProfileHeaderBar";
import OrderDetails from "./OrderDetails";
import { IoIosArrowBack } from "react-icons/io";

type OrderDetailsPageProps = {
  params: Promise<{ orderId: string }>;
};

const OrderDetailsPage = async ({ params }: OrderDetailsPageProps) => {
  const { orderId } = await params;

  return (
    <>
      <ProfileHeaderBar label={`Order Details`} backLink="/profile/my-orders" />

      <main className="sm:p-3">
        <Link
          href={"/profile/my-orders"}
          className="hidden w-max mb-3 sm:flex items-center gap-1"
        >
          <IoIosArrowBack className="text-lg" />
          <span>Back to My Orders</span>
        </Link>

        <div className="sm:h-[calc(100dvh-235px)] sm:overflow-y-auto p-4 bg-uiBlack/10 space-y-4 relative">
          <OrderDetails orderId={orderId} />
        </div>
      </main>
    </>
  );
};

export default OrderDetailsPage;
