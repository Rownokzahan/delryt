import { UpdateUser, User } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { setCurrentUser, setCurrentUserLoading } from "./userSlice";
import authBaseQuery from "@/store/utils/authBaseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: authBaseQuery,
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

      // Set the user in the store as soon as the query successfully completes
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(setCurrentUserLoading(true));

          const { data: user } = await queryFulfilled;
          if (user) {
            dispatch(setCurrentUser(user));
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
          dispatch(setCurrentUser(null));
        } finally {
          dispatch(setCurrentUserLoading(false));
        }
      },
    }),

    updateUser: builder.mutation<{ message: string }, UpdateUser>({
      query: (updatedUser: UpdateUser) => ({
        url: "customer/update-profile",
        method: "PUT",
        body: updatedUser,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
