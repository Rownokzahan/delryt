import branchBaseQuery from "@/store/utils/branchBaseQuery";
import { Category, Id, Product, ProductType } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: branchBaseQuery,
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: "categories",
      }),
    }),

    getCategoryById: builder.query<Category, string>({
      query: (id) => ({
        url: `categories/${id}`,
      }),

      transformResponse: (response: Category[]) => response[0],
    }),

    getProductsByCategoryId: builder.query<
      Product[],
      { categoryId: Id; productType: ProductType }
    >({
      query: ({ categoryId, productType }) => ({
        url: `categories/products/${categoryId}?product_type=${productType}`,
      }),

      transformResponse: (response: { products: Product[] }) =>
        response.products,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetProductsByCategoryIdQuery,
} = categoryApi;
