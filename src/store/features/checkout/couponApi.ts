import authorizedBranchBaseQuery from "@/store/utils/authorizedBranchBaseQuery";
import { Coupon } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const couponApi = createApi({
  reducerPath: "couponApi",
  baseQuery: authorizedBranchBaseQuery,
  endpoints: (builder) => ({
    getCoupons: builder.query<Coupon[], void>({
      query: () => ({
        url: "coupon/list",
      }),
    }),

    checkCouponCode: builder.query<Coupon, string>({
      query: (code) => ({
        url: `coupon/apply?code=${code}`,
      }),
    }),
  }),
});

export const { useGetCouponsQuery, useLazyCheckCouponCodeQuery } = couponApi;
