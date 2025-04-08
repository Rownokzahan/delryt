import { Cuisine } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";
import branchHeaderBaseQuery from "../utils/branchHeaderBaseQuery";

export const cuisineApi = createApi({
  reducerPath: "cuisineApi",
  baseQuery: branchHeaderBaseQuery,
  endpoints: (builder) => ({
    getCuisines: builder.query<Cuisine[], void>({
      query: () => ({
        url: "cuisine/list",
      }),
    }),
  }),
});

export const { useGetCuisinesQuery } = cuisineApi;
