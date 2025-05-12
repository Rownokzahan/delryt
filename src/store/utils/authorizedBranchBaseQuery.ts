import { API_BASE_URL } from "@/config/apiConfig";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../store";

const authorizedBranchBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    // const branchId = state.branch?.currentBranch?.branch?.id;
    const branchId = "1";

    // Ensures requests include branch context, if available
    if (!branchId) {
      console.warn("Missing branch ID in state — request may fail.");
    } else {
      headers.set("branch-id", String(branchId).trim());
    }

    // Adds JWT token to headers if present, for authenticated requests
    try {
      // const token = localStorage.getItem("token");
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5IiwianRpIjoiNzk3ZmRlZTQwNjJiYzY4NjY1YmU5YjBlNWE2MzY1M2RmYTY0MGY3ODRkNzQ0MTAyMzIxOGMwMWM1OThjNjc3NGQ2Y2IxZDJkMGJhNGNjNjAiLCJpYXQiOjE3NDU0MDU4NzUuNDUxNTY0LCJuYmYiOjE3NDU0MDU4NzUuNDUxNTY5LCJleHAiOjE3NzY5NDE4NzUuNDQzMjMxLCJzdWIiOiIxOTYiLCJzY29wZXMiOltdfQ.LyXp4rQPyYlysSUIz6RIuPoo0BHxE8VaqtJbe_bR9RvcsFOvTOQCdR9aBVrqzB92KoLn6Tw3MtQ8zt7WH2GHNNu9FA3LSLKFMv6N1LUo2nR8ked9pIhN8QhoQP-8YS7w0KUxQOB5wQa7NXDYcHw1cSIlAefyAfzV__NnJoM66egycaQjvQ1jhj0f7FeU8dccT5fkL9NUxLCoC04VFDDx9LiiNtE2K3O5oruVv2gFqpmpCJVM6Ox6HEld_9voHHEI3NmIArDqwXtUcbPlZ89KVgyk6iSDJy8tDSWtUddbV_OgarFr-750sTcJZoP3zsWEmaFrb4GCtngQQ0imO6fUE4j0wR90MKPEHuSKNWsCJQEav_Vq1FO4aDoka9zeoEiiccmNq-7GBxylIjZqlr0jUkGHdlJpfLNwwYB1UzUMwJHh6tREoAuO38tQfTggHff0Jxm4Q2HVkeWcSAyhdFza53XuDRofs-QG5pNMDkfE42yWXaBrDzDCNRqgC9osTlhDSt2_4pkINsKHbSHXBbEAEGt7HoeulYUbQx00iriJ1ULAdUEIXMGthZqqx40FzxB0TH3uK9U_TN4EwmDqPTz8VYGv81HEJFX2kjUChYJf9qQELMcDyA-zRGHWYahhAjV33l-QALAPKPfkhiFH4Hz61h9B1lv9rVCuyKgEItDfqR4";
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
