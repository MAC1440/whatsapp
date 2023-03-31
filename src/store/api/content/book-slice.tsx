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
      transformResponse: (response: any) => {
        let loadedBooks = [];
        for (const key in response) {
          loadedBooks.push({
            id: key,
            name: response[key].name,
            title: response[key].title,
          });
        }
        console.log(loadedBooks);
        return loadedBooks;
      },
      providesTags: ["books"],
    }),
    postBooks: builder.mutation({
      query: (body) => ({
        url: `/books.json`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
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
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBooksMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookSlice;
