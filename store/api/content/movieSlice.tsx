import { apiSlice } from "../api-slice";

export const moviesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      // query: (content) => `/content?content=${content}`,
      //   query: (content) => `/${content}`,
      query: () => "/movies",
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.map(({ id }: any) => ({ type: "movies", id })),
              { type: "movies", id: "movie" },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'movies', id: 'movie' }` is invalidated
            [{ type: "movies", id: "movie" }],
    }),
    postMovies: builder.mutation({
      query: (body) => ({
        url: `/movies`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "movies", id: "movie" }],
    }),
    editMovie: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/movies/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `/movies/${id}`,
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
