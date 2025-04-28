import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeliveryTimeState {
  date: string; // store date as string (ISO format)
  time: string;
  text: string;
}

const initialState: DeliveryTimeState = {
  text: "Now",
  date: new Date().toISOString(),
  time: "now",
};

const deliveryTimeSlice = createSlice({
  name: "deliveryTime",
  initialState,
  reducers: {
    setDeliveryTime: (state, { payload }: PayloadAction<DeliveryTimeState>) => {
      state.date = payload.date;
      state.time = payload.time;
      state.text = payload.text;
    },

    resetDeliveryTime: (state) => {
      state.date = initialState.date; // reset the date string
      state.time = initialState.time;
      state.text = initialState.text;
    },
  },
});

export const { setDeliveryTime, resetDeliveryTime } = deliveryTimeSlice.actions;
export default deliveryTimeSlice.reducer;
