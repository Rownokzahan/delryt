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
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
