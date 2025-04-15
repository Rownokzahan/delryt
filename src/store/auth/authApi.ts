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
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, LoginCredentials>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),

      transformErrorResponse: (response) => {
        // Handle network errors (e.g., server down, no connection)
        if (response?.status === "FETCH_ERROR") {
          return "Network error: Failed to connect to server";
        }

        // Handle 401 Unauthorized errors with custom message
        if (response?.status === 401) {
          return "Incorrect email or password";
        }

        console.log(response);

        // Handle other errors
        return "An unknown error occurred";
      },
    }),

    register: builder.mutation<{ token: string }, RegisterCredentials>({
      query: (newUser) => ({
        url: "/auth/registration",
        method: "POST",
        body: newUser,
      }),

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

        console.log(response);

        // Handle other errors
        return "An unknown error occurred";
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
