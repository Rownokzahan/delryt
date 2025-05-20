import ProfileHeaderBar from "../_components/ProfileHeaderBar";
import OrderList from "./OrderList";

const MyOrdersPage = () => {
  return (
    <>
      <ProfileHeaderBar label="My Orders" />

      <main className="p-3">
        <OrderList />
      </main>
    </>
  );
};

export default MyOrdersPage;
