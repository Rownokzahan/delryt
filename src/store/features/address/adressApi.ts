import authorizationBaseQuery from "@/store/utils/authorizationBaseQuery";
import { Address } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: authorizationBaseQuery,
  endpoints: (builder) => ({
    createAddress: builder.mutation<void, Address>({
      query: (newAddress: Address) => ({
        url: "customer/address/add",
        method: "POST",
        body: newAddress,
      }),
    }),
  }),
});

export const { useCreateAddressMutation } = addressApi;
