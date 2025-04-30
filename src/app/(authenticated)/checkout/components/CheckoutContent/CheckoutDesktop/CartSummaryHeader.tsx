const CartSummaryHeader = () => {
  return (
    <div className="bg-uiWhite rounded-t-xl">
      <div className="py-5 px-4 flex items-center justify-between">
        <h3 className="text-xl">Cart Summary</h3>
        <div className="flex items-center gap-2">
          <p className="pe-2 border-e border-gray-300 text-uiBlack-light ">
            1 item
          </p>

          <p className="font-medium flex items-center gap-1">
            <span className="text-xl">₹{283}</span>
            <span className="text-xs">incl tax</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartSummaryHeader;
