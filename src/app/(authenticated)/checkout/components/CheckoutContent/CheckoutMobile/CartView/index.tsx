"use client";

import useCheckoutState from "@/hooks/useCheckoutState";
import BillSummary from "../../../BillSummary";
import CartItems from "../../../CartItems";
import Coupon from "../../../Coupon";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

const CartView = () => {
  const { cart, cartTotal } = useCart();
  const { updateMobileCheckoutView } = useCheckoutState();

  return (
    <div className="pt-5 pb-20 space-y-4">
      <div className="bg-uiWhite rounded-lg">
        <div className="p-3 border-b flex justify-between items-center">
          <h3>Cart Summary</h3>
          <p className="ps-3 border-s text-sm text-uiBlack-light">
            {cart.length} Items
          </p>
        </div>

        <CartItems />
      </div>

      <Coupon />
      <BillSummary />

      <div className="w-full fixed left-0 bottom-0 bg-uiWhite rounded-t-2xl">
        <div className="ui-container py-3 bg-primary/5 rounded-t-2xl flex items-center justify-between">
          <div>
            <h3 className="font-medium">Total</h3>
            <p className="text-lg text-primary">৳ {cartTotal}</p>
          </div>

          <Button onClick={() => updateMobileCheckoutView("checkout")}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
