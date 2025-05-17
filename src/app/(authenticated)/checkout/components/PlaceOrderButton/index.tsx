"use client";

import Button from "@/components/ui/Button";
import useBranch from "@/hooks/useBranch";
import { useCart } from "@/hooks/useCart";
import useCheckoutState from "@/hooks/useCheckoutState";
import { OrderPayload } from "@/types";
import {
  formatDeliveryDate,
  formatDeliveryTime,
  localCartToOrderCart,
} from "./orderUtils";
import useModalById from "@/hooks/useModalById";
import { useCreateOrderMutation } from "@/store/features/order/orderApi";
import { CgSpinner } from "react-icons/cg";

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

  const handlePlaceOrder = async () => {
    if (!checkoutAddress) {
      openAddAddressModal();
      return;
    }

    const orderPayload: OrderPayload = {
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

    try {
      const response = await createOrder(orderPayload).unwrap();
      console.log("Order Response:", response);

      clearCart();
      resetCheckout();
    } catch (error) {
      console.error("Error placing order:", error);
    }
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
