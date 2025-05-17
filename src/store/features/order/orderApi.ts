import authorizedBranchBaseQuery from "@/store/utils/authorizedBranchBaseQuery";
import { OrderPayload } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

interface OrderResponse {
  message: string;
  order_id: number;
}

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: authorizedBranchBaseQuery,
  endpoints: (builder) => ({
    createOrder: builder.mutation<OrderResponse, OrderPayload>({
      query: (body) => ({
        url: "customer/order/place",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
