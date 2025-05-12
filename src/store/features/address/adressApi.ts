import authBaseQuery from "@/store/utils/authBaseQuery";
import { Address, Id } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: authBaseQuery,
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

    updateAddress: builder.mutation<
      void,
      { addressId: Id; updatedAddress: Address }
    >({
      query: ({ addressId, updatedAddress }) => ({
        url: `customer/address/update/${addressId}`,
        method: "PUT",
        body: updatedAddress,
      }),
      invalidatesTags: ["AddressList"],
    }),
  }),
});

export const {
  useGetAddressListQuery,
  useCreateAddressMutation,
  useDeleteAddressMutation,
  useUpdateAddressMutation,
} = addressApi;
