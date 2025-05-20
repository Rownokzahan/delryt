import { configureStore } from "@reduxjs/toolkit";
import branchReducer from "./features/branch/branchSlice";
import { branchApi } from "./features/branch/branchApi";
import modalReducer from "./features/modal/modalSlice";
import checkoutReducer from "./features/checkout/checkoutSlice";
import userReducer from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";
import { bannerApi } from "./features/banner/bannerApi";
import { cuisineApi } from "./features/cuisine/cuisineApi";
import { categoryApi } from "./features/category/categoryApi";
import { productsApi } from "./features/products/productsApi";
import { authApi } from "./features/auth/authApi";
import { userApi } from "./features/user/userApi";
import { productApi } from "./features/product/productApi";
import { addressApi } from "./features/address/adressApi";
import { initializeCart } from "@/store/features/cart/cartSlice";
import { couponApi } from "./features/checkout/couponApi";
import { ordersApi } from "./features/orders/ordersApi";

export const store = configureStore({
  reducer: {
    branch: branchReducer,
    modalStatus: modalReducer,
    checkout: checkoutReducer,
    user: userReducer,
    auth: authReducer,
    cart: cartReducer,

    [branchApi.reducerPath]: branchApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [cuisineApi.reducerPath]: cuisineApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [couponApi.reducerPath]: couponApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      branchApi.middleware,
      bannerApi.middleware,
      cuisineApi.middleware,
      categoryApi.middleware,
      productsApi.middleware,
      productApi.middleware,
      couponApi.middleware,
      ordersApi.middleware,
      
      authApi.middleware,
      userApi.middleware,
      addressApi.middleware,
    ),
});

export const resetBranchRelatedState = () => (dispatch: AppDispatch) => {
  dispatch(bannerApi.util.resetApiState());
  dispatch(cuisineApi.util.resetApiState());
  dispatch(categoryApi.util.resetApiState());
  dispatch(productsApi.util.resetApiState());
  dispatch(productApi.util.resetApiState());
  dispatch(couponApi.util.resetApiState());
  dispatch(ordersApi.util.resetApiState());

  dispatch(initializeCart());
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
