import authorizedBranchBaseQuery from "@/store/utils/authorizedBranchBaseQuery";
import { CreateOrderPayload, Id, Order, OrderItemType } from "@/types";
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

    getOrderById: builder.query<Order, Id>({
      query: (id) => `customer/order/track?order_id=${id}`,
    }),

    getOrderItemsById: builder.query<OrderItemType[], Id>({
      query: (id) => `customer/order/details?order_id=${id}`,
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useGetOrderItemsByIdQuery,
} = ordersApi;
