import authorizedBranchBaseQuery from "@/store/utils/authorizedBranchBaseQuery";
import { CreateOrderPayload } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

interface CreateOrderResponse {
  message: string;
  order_id: number;
}

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: authorizedBranchBaseQuery,
  endpoints: (builder) => ({
    createOrder: builder.mutation<CreateOrderResponse, CreateOrderPayload>({
      query: (body) => ({
        url: "customer/order/place",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApi;
