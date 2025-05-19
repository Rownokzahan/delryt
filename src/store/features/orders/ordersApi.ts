import authorizedBranchBaseQuery from "@/store/utils/authorizedBranchBaseQuery";
import { CreateOrderPayload, Order } from "@/types";
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

    getOrders: builder.query<Order[], void>({
      query: () => ({
        url: `customer/order/list`,
      }),

      transformResponse: (response: { orders: Order[] }) => response.orders,
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = ordersApi;
