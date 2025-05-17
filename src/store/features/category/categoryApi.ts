import branchBaseQuery from "@/store/utils/branchBaseQuery";
import { Category } from "@/types";
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
  }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoryApi;
