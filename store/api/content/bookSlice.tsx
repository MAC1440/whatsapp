import { apiSlice } from "../api-slice";

export interface IbooksBody {
  id: number | string;
  name: string;
  author: string;
}

export const bookSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      // query: (content) => `/content?content=${content}`,
      // query: (content) => `/${content}`,
      query: () => `/books`,
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }: any) => ({ type: "books", id })),
              { type: "books", id: "book" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'books', id: 'book' }` is invalidated
            [{ type: "books", id: "book" }],
    }),
    postBooks: builder.mutation({
      query: (body) => ({
        url: `/books`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "books", id: "book" }],
    }),
    editBook: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
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
