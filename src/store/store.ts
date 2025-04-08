import { configureStore } from "@reduxjs/toolkit";
import branchReducer from "./branch/branchSlice";
import { branchApi } from "./branch/branchApi";
import deliveryTimeReducer from "./deliveryTime/deliveryTimeSlice";
import modalReducer from "./modal/modalSlice";
import checkoutReducer from "./checkout/checkoutSlice";
import { bannerApi } from "./banner/bannerApi";
import { cuisineApi } from "./cuisine/cuisineApi";

export const store = configureStore({
  reducer: {
    branch: branchReducer,
    modalStatus: modalReducer,
    deliveryTime: deliveryTimeReducer,
    checkout: checkoutReducer,

    [branchApi.reducerPath]: branchApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [cuisineApi.reducerPath]: cuisineApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      branchApi.middleware,
      bannerApi.middleware,
      cuisineApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
