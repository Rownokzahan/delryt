import { API_BASE_URL } from "@/config/apiConfig";
import { Branch } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const branchApi = createApi({
  reducerPath: "branchApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getBranchList: builder.query<Branch[], void>({
      query: () => "/branch/list",
    }),
  }),
});

export const { useGetBranchListQuery } = branchApi;
