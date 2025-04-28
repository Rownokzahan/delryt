const BillSummary = () => {
  return (
    <div className="p-3 rounded-lg bg-uiWhite">
      <h3 className="mb-2 font-semibold">Bill Summary</h3>

      <div className="border rounded-md text-sm">
        <div className="p-3 space-y-2">
          <div className="flex item-center justify-between">
            <p>
              Order Total{" "}
              <span className="text-uiBlack-light">(Excl.Taxes)</span>
            </p>
            <p className="text-end">₹698</p>
          </div>

          <div className="flex item-center justify-between">
            <p>Taxes & Charges </p>
            <p className="text-end">₹55</p>
          </div>

          <div className="flex item-center justify-between">
            <p>Delivery Fees</p>
            <p className="text-end">
              <span className="text-uiBlack-light line-through">₹59</span> ₹0
            </p>
          </div>
        </div>

        <div className="p-3 border-t rounded-b-md bg-primary/5 flex item-center justify-between">
          <p>
            <span className="font-medium">To Pay</span>{" "}
            <span className="text-uiBlack-light">(Incl. Taxes)</span>
          </p>
          <p className="text-end">
            <span className="text-uiBlack-light line-through">₹841</span>{" "}
            <span className="font-medium">₹753</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillSummary;
