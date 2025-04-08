import { createSlice } from "@reduxjs/toolkit";

interface DeliveryTimeState {
  value: string;
}

const initialState: DeliveryTimeState = {
  value: "Now",
};

const deliveryTimeSlice = createSlice({
  name: "deliveryTime",
  initialState,
  reducers: {
    setDeliveryTime: (state, { payload }) => {
      state.value = payload;
    },
    resetDeliveryTime: (state) => {
      state.value = "Now";
    },
  },
});

export const { setDeliveryTime, resetDeliveryTime } = deliveryTimeSlice.actions;
export default deliveryTimeSlice.reducer;
