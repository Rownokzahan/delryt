import branchBaseQuery from "@/store/utils/branchBaseQuery";
import { Id, Product } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: branchBaseQuery,
  endpoints: (builder) => ({
    getProductDetailsById: builder.query<Product, Id>({
      query: (productId: Id) => ({
        url: `products/details/${productId}`,
      }),
    }),

    getRelatedProductsById: builder.query({
      query: (productId: Id) => ({
        url: `products/related-products/${productId}`,
      }),
    }),

    getProductReviewsById: builder.query({
      query: (productId: Id) => ({
        url: `products/reviews/${productId}`,
      }),
    }),
  }),
});

export const {
  useGetProductDetailsByIdQuery,
  useGetRelatedProductsByIdQuery,
  useGetProductReviewsByIdQuery,
} = productApi;
