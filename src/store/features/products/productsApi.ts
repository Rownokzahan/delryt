import branchBaseQuery from "@/store/utils/branchBaseQuery";
import { Product, ProductType } from "@/types";
import { createApi, EndpointBuilder } from "@reduxjs/toolkit/query/react";

// Type for query parameters
type ProductQueryParams = {
  limit?: number;
} | void;

const createProductQuery = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  builder: EndpointBuilder<any, any, any>,
  path: string
) => {
  return builder.query<Product[], ProductQueryParams>({
    query: ({ limit = 10 }: ProductQueryParams = {}) =>
      `products/${path}?limit=${limit}`,

    // Extracts only the products array from the API response.
    transformResponse: (response: { products: Product[] }) => response.products,
  });
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: branchBaseQuery,
  endpoints: (builder) => ({
    getFrequentlyBoughtProducts: createProductQuery(
      builder,
      "frequently-bought"
    ),
    getLatestProducts: createProductQuery(builder, "latest"),
    getPopularProducts: createProductQuery(builder, "popular"),
    getSetMenuProducts: createProductQuery(builder, "set-menu"),
    getRecommendedProducts: createProductQuery(builder, "recommended"),

    getSearchedProducts: builder.mutation<
      Product[],
      { name: string; productType?: ProductType }
    >({
      query: ({ name, productType }) => {
        const searchPayload = {
          name,
          ...(productType && { product_type: productType }),
        };

        return {
          url: "products/search",
          method: "POST",
          body: searchPayload,
        };
      },

      transformResponse: (response: { products: Product[] }) =>
        response.products,
    }),
  }),
});

export const {
  useGetFrequentlyBoughtProductsQuery,
  useGetLatestProductsQuery,
  useGetPopularProductsQuery,
  useGetSetMenuProductsQuery,
  useGetRecommendedProductsQuery,
  useGetSearchedProductsMutation,
} = productsApi;
