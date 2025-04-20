import branchHeaderBaseQuery from "@/store/utils/branchHeaderBaseQuery";
import { Category } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: branchHeaderBaseQuery,
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: "categories",
      }),

      // Extracts only the categories array from the API response.
      transformResponse: (response: { categories: Category[] }) =>
        response.categories,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
