import { API_BASE_URL } from "@/config/apiConfig";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const authBaseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export default authBaseQuery;
