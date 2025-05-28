"use client";

import Button from "@/components/ui/Button";
import useBranch from "@/hooks/useBranch";
import { useCart } from "@/hooks/useCart";
import useCheckoutState from "@/hooks/useCheckoutState";
import { CreateOrderPayload } from "@/types";
import {
  formatDeliveryDate,
  formatDeliveryTime,
  localCartToOrderCart,
} from "./orderUtils";
import useModalById from "@/hooks/useModalById";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useCreateOrderMutation } from "@/store/features/orders/ordersApi";

const PlaceOrderButton = () => {
  const { openModal: openAddAddressModal } = useModalById("addAddressModal");
  const { cart, cartTotal, clearCart } = useCart();
  const {
    deliveryTime,
    checkoutAddress,
    appliedCoupon,
    orderNote,
    addCutlery,
    resetCheckout,
  } = useCheckoutState();
  const { currentBranch } = useBranch();
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const router = useRouter();

  const handlePlaceOrder = () => {
    if (!checkoutAddress) {
      openAddAddressModal();
      return;
    }

    const orderPayload: CreateOrderPayload = {
      cart: localCartToOrderCart(cart),
      order_amount: cartTotal - appliedCoupon.couponDiscountAmount,
      coupon_discount_title: appliedCoupon.coupon?.title || "",
      coupon_discount_amount: appliedCoupon.couponDiscountAmount,
      coupon_code: appliedCoupon.coupon?.code || "",
      order_note: orderNote,
      delivery_time: formatDeliveryTime(deliveryTime.time),
      delivery_date: formatDeliveryDate(deliveryTime.date),
      delivery_address_id: Number(checkoutAddress?.id),
      branch_id: Number(currentBranch?.id),
      is_cutlery_required: addCutlery ? "1" : "0",
      distance: 0,
      selected_delivery_area: null,
      is_partial: "0",
      order_type: "delivery",
      payment_method: "cash_on_delivery",
    };

    createOrder(orderPayload)
      .unwrap()
      .then((res) => {
        router.push(`/order-success/${res.order_id}`);

        setTimeout(() => {
          clearCart();
          resetCheckout();
        }, 400);
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        router.push(`/order-success`);
      });
  };

  return (
    <>
      {isLoading ? (
        <Button className="w-full h-12">
          <CgSpinner className="animate-spin text-2xl" />
        </Button>
      ) : (
        <Button onClick={handlePlaceOrder} className="w-full h-12">
          Place Order
        </Button>
      )}
    </>
  );
};

export default PlaceOrderButton;
