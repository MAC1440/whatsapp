import { apiSlice } from "../api-slice";

export const moviesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "/movies.json",
      transformResponse: (response: any) => {
        let loadedMovies = [];
        for (const key in response) {
          loadedMovies.push({
            id: key,
            name: response[key].name,
            title: response[key].title,
          });
        }
        console.log(loadedMovies);
        return loadedMovies;
      },
      providesTags: ["movies"],
    }),
    postMovies: builder.mutation({
      query: (body) => ({
        url: `/movies.json`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["movies"],
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
      invalidatesTags: ["movies"],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  usePostMoviesMutation,
  useEditMovieMutation,
  useDeleteMovieMutation,
} = moviesSlice;
