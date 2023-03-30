import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://attendance-system-4b852-default-rtdb.asia-southeast1.firebasedatabase.app",
  }),
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
  tagTypes: ["books", "movies"],
  endpoints: (builder) => ({}),
});
