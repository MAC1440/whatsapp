import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  //using builtin api local hardcoded server
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
  tagTypes: ["books", "movies"],
  endpoints: (builder) => ({}),
});
