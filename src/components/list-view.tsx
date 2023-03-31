import React from "react";

const ListView = (props: any) => {
  const {
    bookData,
    moviesData,
    bookId,
    movieId,
    isLoading,
    hasError,
    listType,
  } = props;
  return (
    <div
      style={{ height: "350px", overflowY: "auto", overflowX: "hidden" }}
      className="rounded-lg"
    >
      {(listType === "books" ? bookData : moviesData)?.length
        ? (listType === "books" ? bookData : moviesData)?.map((i: any) => (
            <div
              key={i?.title + Math.random()}
              className="bg-gradient-to-r from-blue-500 to-blue-100/[.1] m-3 p-1 rounded-lg text-center"
              style={{ width: 200 }}
            >
              <div className="text-black font-medium">
                Name of {listType === "books" ? "Book" : "Movie"}
              </div>
              <div className="text-blue-200 font-medium">{i?.name}</div>
              <div className="text-black font-medium">
                Name of {listType === "books" ? "Author" : "Director"}
              </div>
              <div className="text-red-500">{i?.title}</div>
              <div
                className="text-red-600 hover:text-blue-600 cursor-pointer"
                onClick={() => {
                  listType === "books" ? bookId(i?.id) : movieId(i?.id);
                }}
              >
                X
              </div>
            </div>
          ))
        : !isLoading && hasError && <p>Something went wrong!!</p>}
    </div>
  );
};

export default ListView;
