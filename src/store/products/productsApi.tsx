import { Product } from "@/types";
import { createApi, EndpointBuilder } from "@reduxjs/toolkit/query/react";
import branchHeaderBaseQuery from "../utils/branchHeaderBaseQuery";

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
  baseQuery: branchHeaderBaseQuery,
  endpoints: (builder) => ({
    getFrequentlyBoughtProducts: createProductQuery(
      builder,
      "frequently-bought"
    ),
    getLatestProducts: createProductQuery(builder, "latest"),
    getPopularProducts: createProductQuery(builder, "popular"),
    getSetMenuProducts: createProductQuery(builder, "set-menu"),
    getRecommendedProducts: createProductQuery(builder, "recommended"),
  }),
});

export const {
  useGetFrequentlyBoughtProductsQuery,
  useGetLatestProductsQuery,
  useGetPopularProductsQuery,
  useGetSetMenuProductsQuery,
  useGetRecommendedProductsQuery,
} = productsApi;
