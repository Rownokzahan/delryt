import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginCredentials {
  email_or_phone: string;
  password: string;
  type: "email" | "phone" | string;
}

interface RegisterCredentials {
  f_name: string;
  l_name: string;
  email: string;
  phone: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://admin.delryt.com/api/v1" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, LoginCredentials>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),

      //Refech the user data after login
      invalidatesTags: ["User"],

      transformErrorResponse: (response) => {
        // Handle network errors (e.g., server down, no connection)
        if (response?.status === "FETCH_ERROR") {
          return "Network error: Failed to connect to server";
        }

        // Handle 401 Unauthorized errors with custom message
        if (response?.status === 401) {
          return "Incorrect email or password";
        }

        // Handle other errors
        return "An unknown error occurred";
      },

      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          console.log("Inside login api", data);

          if (data) {
            localStorage.setItem("token", data.token);
          }
        } catch (error) {
          console.error("Error during login:", error);
        }
      },
    }),

    register: builder.mutation<{ token: string }, RegisterCredentials>({
      query: (newUser) => ({
        url: "/auth/registration",
        method: "POST",
        body: newUser,
      }),

      //Refech the user data after registration
      invalidatesTags: ["User"],

      transformErrorResponse: (response) => {
        // Handle network errors (e.g., server down, no connection)
        if (response?.status === "FETCH_ERROR") {
          return "Network error: Failed to connect to server";
        }

        const errors =
          (response.data as { errors: { code: string; message: string }[] })
            .errors ?? undefined;

        if (Array.isArray(errors)) {
          const errorMessages = errors.map((e) => e.message);
          return errorMessages.join(" ");
        }

        // Handle other errors
        return "An unknown error occurred";
      },

      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            localStorage.setItem("token", data.token);
          }
        } catch (error) {
          console.error("Error during registration:", error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
