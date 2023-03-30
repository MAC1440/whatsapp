import { apiSlice } from "../api-slice";

export interface IbooksBody {
  id: number | string;
  name: string;
  author: string;
}

export const bookSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books.json`,
      // providesTags: (result: any) =>
      // result
      //   ? [
      //       ...result?.map(({ id }: any) => ({ type: "books", id })),
      //       { type: "books", id: "book" },
      //     ]
      //   : [{ type: "books", id: "book" }],
    }),
    postBooks: builder.mutation({
      query: (body) => ({
        url: `/books.json`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "books", id: "book" }],
    }),
    editBook: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/books/${id}.json`,
        method: "PATCH",
        body,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "books", id: "book" }],
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBooksMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookSlice;
