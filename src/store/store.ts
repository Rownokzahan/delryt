import { configureStore } from "@reduxjs/toolkit";
import branchReducer from "./features/branch/branchSlice";
import { branchApi } from "./features/branch/branchApi";
import deliveryTimeReducer from "./features/deliveryTime/deliveryTimeSlice";
import modalReducer from "./features/modal/modalSlice";
import checkoutReducer from "./features/checkout/checkoutSlice";
import userReducer from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice";
import { bannerApi } from "./features/banner/bannerApi";
import { cuisineApi } from "./features/cuisine/cuisineApi";
import { categoryApi } from "./features/category/categoryApi";
import { productsApi } from "./features/products/productsApi";
import { authApi } from "./features/auth/authApi";
import { userApi } from "./features/user/userApi";
import { productApi } from "./features/product/productApi";

export const store = configureStore({
  reducer: {
    branch: branchReducer,
    modalStatus: modalReducer,
    deliveryTime: deliveryTimeReducer,
    checkout: checkoutReducer,
    user: userReducer,
    auth: authReducer,

    [branchApi.reducerPath]: branchApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [cuisineApi.reducerPath]: cuisineApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      branchApi.middleware,
      bannerApi.middleware,
      cuisineApi.middleware,
      categoryApi.middleware,
      productsApi.middleware,
      authApi.middleware,
      userApi.middleware,
      productApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
