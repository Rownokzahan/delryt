import branchBaseQuery from "@/store/utils/branchBaseQuery";
import { Cuisine } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const cuisineApi = createApi({
  reducerPath: "cuisineApi",
  baseQuery: branchBaseQuery,
  endpoints: (builder) => ({
    getCuisines: builder.query<Cuisine[], void>({
      query: () => ({
        url: "cuisine/list",
      }),
    }),
  }),
});

export const { useGetCuisinesQuery } = cuisineApi;
