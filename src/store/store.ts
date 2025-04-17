import { configureStore } from "@reduxjs/toolkit";
import branchReducer from "./branch/branchSlice";
import { branchApi } from "./branch/branchApi";
import deliveryTimeReducer from "./deliveryTime/deliveryTimeSlice";
import modalReducer from "./modal/modalSlice";
import checkoutReducer from "./checkout/checkoutSlice";
import userReducer from "./user/userSlice";
import { bannerApi } from "./banner/bannerApi";
import { cuisineApi } from "./cuisine/cuisineApi";
import { categoryApi } from "./category/categoryApi";
import { productsApi } from "./products/productsApi";
import { authApi } from "./auth/authApi";
import { userApi } from "./user/userApi";

export const store = configureStore({
  reducer: {
    branch: branchReducer,
    modalStatus: modalReducer,
    deliveryTime: deliveryTimeReducer,
    checkout: checkoutReducer,
    user: userReducer,

    [branchApi.reducerPath]: branchApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [cuisineApi.reducerPath]: cuisineApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      branchApi.middleware,
      bannerApi.middleware,
      cuisineApi.middleware,
      categoryApi.middleware,
      productsApi.middleware,
      authApi.middleware,
      userApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
