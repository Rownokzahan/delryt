import authorizedBranchBaseQuery from "@/store/utils/authorizedBranchBaseQuery";
import { OrderPayload } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: authorizedBranchBaseQuery,
  endpoints: (builder) => ({
    createOrder: builder.mutation<OrderPayload, OrderPayload>({
      query: (body) => ({
        url: "customer/order/place",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
