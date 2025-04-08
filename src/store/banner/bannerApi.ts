import { Banner } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";
import branchHeaderBaseQuery from "../utils/branchHeaderBaseQuery";

export const bannerApi = createApi({
  reducerPath: "bannerApi",
  baseQuery: branchHeaderBaseQuery,
  endpoints: (builder) => ({
    getBanners: builder.query<Banner[], void>({
      query: () => ({
        url: "banners",
      }),
    }),
  }),
});

export const { useGetBannersQuery } = bannerApi;
