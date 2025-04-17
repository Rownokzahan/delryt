import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const authorizationBaseQuery = fetchBaseQuery({
  baseUrl: "https://admin.delryt.com/api/v1",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export default authorizationBaseQuery;
