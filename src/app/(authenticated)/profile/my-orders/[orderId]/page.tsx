import ProfileHeaderBar from "../../_components/ProfileHeaderBar";
import OrderDetails from "./OrderDetails";

type OrderDetailsPageProps = {
  params: Promise<{ orderId: string }>;
};

const OrderDetailsPage = async ({ params }: OrderDetailsPageProps) => {
  const { orderId } = await params;

  return (
    <>
      <ProfileHeaderBar
        label={`Order Details`}
        backLink="/profile/my-orders"
      />

      <main className="sm:p-3">
        <OrderDetails orderId={orderId} />
      </main>
    </>
  );
};

export default OrderDetailsPage;
