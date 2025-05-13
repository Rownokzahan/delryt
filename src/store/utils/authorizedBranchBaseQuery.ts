import { API_BASE_URL } from "@/config/apiConfig";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../store";

const authorizedBranchBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const branchId = state.branch?.currentBranch?.branch?.id;

    // Ensures requests include branch context, if available
    if (!branchId) {
      console.warn("Missing branch ID in state — request may fail.");
    } else {
      headers.set("branch-id", String(branchId).trim());
    }

    // Adds JWT token to headers if present, for authenticated requests
    try {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    } catch (error) {
      console.warn("Unable to access localStorage:", error);
    }

    return headers;
  },
});

export default authorizedBranchBaseQuery;
