import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      // query: () => "/d4867d8b-b5d5-4a48-a4ab-79131b5809b8",
      query: () => "/hello",
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
