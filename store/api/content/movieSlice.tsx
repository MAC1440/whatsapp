import { apiSlice } from "../api-slice";

export const moviesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      // query: (content) => `/content?content=${content}`,
      //   query: (content) => `/${content}`,
      query: () => "/movies.json",
      // providesTags: (result: any) =>
      //   result
      //     ? [
      //         ...result?.map(({ id }: any) => ({ type: "movies", id })),
      //         { type: "movies", id: "movie" },
      //       ]
      //     : [{ type: "movies", id: "movie" }],
    }),
    postMovies: builder.mutation({
      query: (body) => ({
        url: `/movies.json`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "movies", id: "movie" }],
    }),
    editMovie: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/movies/${id}.json`,
        method: "PATCH",
        body,
      }),
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `/movies/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "movies", id: "movie" }],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  usePostMoviesMutation,
  useEditMovieMutation,
  useDeleteMovieMutation,
} = moviesSlice;
