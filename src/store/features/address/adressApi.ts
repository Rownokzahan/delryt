import authorizationBaseQuery from "@/store/utils/authorizationBaseQuery";
import { Address, Id } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: authorizationBaseQuery,
  tagTypes: ["AddressList"],
  endpoints: (builder) => ({
    getAddressList: builder.query<Address[], void>({
      query: () => ({
        url: "customer/address/list",
      }),
      providesTags: ["AddressList"],
    }),

    createAddress: builder.mutation<void, Address>({
      query: (newAddress: Address) => ({
        url: "customer/address/add",
        method: "POST",
        body: newAddress,
      }),
      invalidatesTags: ["AddressList"],
    }),

    deleteAddress: builder.mutation<void, Id>({
      query: (addressId: Id) => ({
        url: `customer/address/delete?address_id=${addressId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AddressList"],
    }),
  }),
});

export const {
  useGetAddressListQuery,
  useCreateAddressMutation,
  useDeleteAddressMutation,
} = addressApi;
