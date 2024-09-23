import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  tagTypes: ["Products","authentication"],
  endpoints: (builder) => {
    return {
      signup: builder.mutation({
        query: (payload) => {
          return {
            url: "/auth/signup",
            method: "POST",
            body: payload,
          };
        },
        
      }),
      login: builder.mutation({
        query: (payload) => {
          return {
            url: "/auth/login",
            method: "POST",
            body: payload,
          };
        },
      }),

      getAProduct: builder.query({
        query: (payload) => {
          return {
            url: `/product/${payload}`,
            method: "GET",
          };
        },
        providesTags: ["Products"],
      }),
      updateProduct: builder.mutation({
        query: ({ _id, ...rest }) => {
          return {
            url: `/product/${_id}`,
            method: "PUT",
            body: rest,
          };
        },
        invalidatesTags: ["Products"],
      }),
      deleteProduct: builder.mutation({
        query: ({ _id }) => {
          return {
            url: `/product/${_id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["Products"],
      }),
      createABooking: builder.mutation({
        query: (data) => {
          return {
            url: `/booking`,
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["Products"],
      }),
    };
  },
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetAProductQuery,
  useCreateABookingMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
