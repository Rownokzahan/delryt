import { API_BASE_URL } from "@/config/apiConfig";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../store";

const branchHeaderBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const currentBranchId = (getState() as RootState).branch?.currentBranch
      ?.branch?.id;

    if (!currentBranchId) {
      throw new Error("Branch ID is missing in the state");
    }
    headers.set("branch-id", currentBranchId.toString().trim());
    return headers;
  },
});

export default branchHeaderBaseQuery;
