import { apiSlice } from "../api/api-slice";
import { createSlice } from "@reduxjs/toolkit";

const authCheckSlice = createSlice({
  name: "counter",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export default authCheckSlice.reducer;
export const { login, logout } = authCheckSlice.actions;

export const authSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users.json`,
      transformResponse: (response: any) => {
        let loadedusers = [];
        for (const key in response) {
          loadedusers.push({
            id: key,
            userName: response[key].userName,
            password: response[key].password,
          });
        }
        console.log(loadedusers);
        return loadedusers;
      },
      providesTags: ["users"],
    }),
    postUsers: builder.mutation({
      query: (body) => ({
        url: `/users.json`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),
    sendMessageToUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/users/${id}.json`,
        method: "PATCH",
        body,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  usePostUsersMutation,
  useSendMessageToUserMutation,
  useDeleteUserMutation,
} = authSlice;