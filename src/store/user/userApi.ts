import { User } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { setUser } from "./userSlice";
import authorizationBaseQuery from "../utils/authorizationBaseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: authorizationBaseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: "customer/info",
      }),
      providesTags: ["User"],
      transformResponse: (response: User): User => ({
        id: response.id,
        f_name: response.f_name,
        l_name: response.l_name,
        email: response.email,
        phone: response.phone,
        image: response.image,
      }),

      // Initialize the user in the store as soon as the query successfully completes
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: user } = await queryFulfilled;
          if (user) {
            dispatch(setUser(user));
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
