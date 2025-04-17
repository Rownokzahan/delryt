import { API_BASE_URL } from "@/config/apiConfig";
import { Branch } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { initializeCurrentBranch } from "./branchSlice";

export const branchApi = createApi({
  reducerPath: "branchApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getBranchList: builder.query<Branch[], void>({
      query: () => "/branch/list",

      // Use the fetched branches list to identify the current branch using the saved branchId from localStorage,
      // then set this branch as the current branch in the Redux store.
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data: branches } = await queryFulfilled;

          const branchId = localStorage.getItem("branchId");

          const branch =
            branches.find((branch) => branch.id === Number(branchId)) ?? null;

          dispatch(initializeCurrentBranch(branch)); // Set the current branch in Redux state
        } catch (error) {
          console.error("Error fetching branch list:", error);
        }
      },
    }),
  }),
});

export const { useGetBranchListQuery } = branchApi;
