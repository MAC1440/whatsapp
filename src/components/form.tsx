import React, { useState } from "react";
import {
  useGetBooksQuery,
  usePostBooksMutation,
} from "../store/api/content/book-slice";
import { usePostMoviesMutation } from "../store/api/content/movie-slice";

const Form = (props: any) => {
  const { title1, title2, apiName } = props;
  const [values, setValues] = useState<any>({
    [`${title1}`]: "",
    [`${title2}`]: "",
  });
  // POST / PATCH
  const [postBook, { isLoading }] = usePostBooksMutation();
  const [postMovie] = usePostMoviesMutation();

  const { refetch: refetchBooks } = useGetBooksQuery({});

  const submitHandler = (e: any) => {
    e.preventDefault();
    const postingData = {
      name: values[title1],
      title: values[title2],
    };
    apiName === "books" && postBook(postingData);
    apiName === "movies" && postMovie(postingData);
    // refetchBooks();
  };

  const changeHandler = (e: any) => {
    const name = e.target.name;
    const val = e.target.value;
    let backup = { ...values, [name]: val };
    console.log(name, val);
    setValues(backup);
  };
  return (
    <div className="mt-10">
      <form onSubmit={submitHandler}>
        <label htmlFor={title1}>Name of {title1}:</label>
        <br />
        <input
          type="text"
          id={title1}
          name={title1}
          value={values[title1]}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor={title2}>
          {title2} of {title1}:
        </label>
        <br />
        <input
          type="text"
          id={title2}
          name={title2}
          value={values[title2]}
          onChange={changeHandler}
        />
        <br />
        <br />
        <button
          type="submit"
          className="bg-indigo-500 p-2 text-sm rounded-md hover:bg-pink-500 cursor-alias"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
