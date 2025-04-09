import { Category } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";
import branchHeaderBaseQuery from "../utils/branchHeaderBaseQuery";

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
