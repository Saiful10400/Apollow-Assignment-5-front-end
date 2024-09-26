import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../Utils/getToken";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api",prepareHeaders:(header)=>{

    if(getToken())header.set("Authorization",getToken() as string)
    
  
  }}),
  tagTypes: ["Products","authentication","rooms","slots"],
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

      getLoggedInUser: builder.query({
        query: () => {
          return {
            url: `/auth/getCurrentUser`,
            method: "GET",
          
          };
        },
        
      }),

      getRooms: builder.query({
        query: () => {
          return {
            url: `/rooms`,
            method: "GET",
          };
        },
        providesTags:["rooms"]
      }),

      updateRoom: builder.mutation({
        query: ({_id,...rest}) => {
          return {
            url: `/rooms/${_id}`,
            method: "PUT",
            body: rest,
          };
          
        },
        invalidatesTags:["rooms"]
      }),

      deleteRoom: builder.mutation({
        query: ({ id }) => {
          return {
            url: `/rooms/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["rooms"],
      }),



      getSlot: builder.query({
        query: () => {
          return {
            url: `/slots/availability`,
            method: "GET",
          };
        },
        providesTags:["slots"]
      }),

      updateSlot: builder.mutation({
        query: ({_id,...rest}) => {
          return {
            url: `/slots/${_id}`,
            method: "PUT",
            body: rest,
          };
        
        },
        invalidatesTags:["slots"]
      }),

      deleteSlot: builder.mutation({
        query: ({ id }) => {
          return {
            url: `/slots/${id}`,
            method: "DELETE",
            
          };
        },
        invalidatesTags: ["slots"],
      }),



    };
  },
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetLoggedInUserQuery,
  useGetRoomsQuery,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
  useGetSlotQuery,
  useDeleteSlotMutation,
  useUpdateSlotMutation
 
} = baseApi;
