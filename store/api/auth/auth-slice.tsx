import { apiSlice } from "../api-slice";
import { createSlice } from "@reduxjs/toolkit";

const authCheckSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});
export default authCheckSlice.reducer;
export const { incremented, decremented } = authCheckSlice.actions;

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
    editUser: builder.mutation({
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
  useEditUserMutation,
  useDeleteUserMutation,
} = authSlice;
