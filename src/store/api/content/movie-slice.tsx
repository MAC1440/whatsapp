import { apiSlice } from "../api-slice";

export const moviesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      // query: () => "/movies.json",
      query: () => "/movies",
      transformResponse: (response: any) => {
        let loadedMovies = [];
        console.log(
          response,
          "askjdgaskjhdkjashdkjashkjdhaskjdhsakjdhaskjdhaskjdhakj"
        );
        for (const key in response) {
          loadedMovies.push({
            id: response[key]._id,
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
        // url: `/movies.json`,
        url: `/movies`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["movies"],
    }),
    editMovie: builder.mutation({
      query: ({ id, ...body }) => ({
        // url: `/movies/${id}.json`,
        url: `/movies/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        // url: `/movies/${id}.json`,
        url: `/movies/${id}`,
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
