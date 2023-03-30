import Form from "@/components/form";
import ListView from "@/components/list-view";
import {
  useGetBooksQuery,
  useDeleteBookMutation,
} from "@/store/api/content/book-slice";
import {
  useDeleteMovieMutation,
  useGetMoviesQuery,
} from "@/store/api/content/movie-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useState } from "react";

const LandingPage = () => {
  const dispatch = useAppDispatch();
  const [content, setContent] = useState("books");

  const {
    status,
    data: books,
    isLoading: booksLoading,
    error: booksError,
    refetch: refetchBooks,
  } = useGetBooksQuery({});

  const { data: movies, refetch: refetchMovies } = useGetMoviesQuery({});

  const [bookId] = useDeleteBookMutation();
  const [movieId] = useDeleteMovieMutation();

  return (
    <div className="flex justify-center h-screen mt-10 flex-col items-center gap-5">
      <div className="">
        <button
          className=" p-3 text-white text-sm rounded-md shadow mx-10 
          bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          onClick={() => {
            setContent("books");
            // refetchBooks();
          }}
        >
          Get Books
        </button>
        <button
          className=" p-3 text-white text-sm rounded-md shadow mx-10
          bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          onClick={() => {
            setContent("movies");
            // refetchMovies();
          }}
        >
          Get Movies
        </button>
      </div>
      <div>
        <div
          // style={{ height: "370px", width: "500px", overflow: "auto none" }}
          className="flex justify-center  p-1 bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg"
        >
          <ListView
            listType={content}
            bookData={books}
            moviesData={movies}
            bookId={bookId}
            movieId={movieId}
            // isLoading={}
            // hasError={}
          />
        </div>

        <div className="flex gap-5 w-100  justify-center rounded-lg mt-3">
          <div className="p-2">
            <Form title1="Book" title2="Author" apiName="books" />
          </div>
          <div className="p-2">
            <Form title1="Movie" title2="Director" apiName="movies" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
