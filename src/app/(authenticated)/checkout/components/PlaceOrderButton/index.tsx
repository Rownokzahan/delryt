"use client";

import Button from "@/components/ui/Button";
import useBranch from "@/hooks/useBranch";
import { useCart } from "@/hooks/useCart";
import useCheckoutState from "@/hooks/useCheckoutState";
import { OrderCartItem } from "@/types";
import {
  formatDeliveryDate,
  formatDeliveryTime,
  localCartToOrderCart,
} from "./orderUtils";
import useModalById from "@/hooks/useModalById";

type OrderPayload = {
  cart: OrderCartItem[];
  coupon_discount_amount: number;
  coupon_discount_title: string;
  order_amount: number;
  order_type: "delivery" | "takeaway";
  delivery_address_id: number;
  payment_method: "cash_on_delivery" | "online";
  order_note: string;
  coupon_code: string;
  delivery_time: string;
  delivery_date: string;
  branch_id: number;
  distance: number;
  selected_delivery_area: number | null;
  is_partial: "0" | "1";
  is_cutlery_required: "0" | "1";
};

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

  const handlePlaceOrder = () => {
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

    console.log("Order Payload:", orderPayload);

    const orderResponse: string = "success";
    if (orderResponse === "fail") {
      clearCart();
      resetCheckout();
    }
  };

  return (
    <Button onClick={handlePlaceOrder} className="w-full">
      Place order
    </Button>
  );
};

export default PlaceOrderButton;
