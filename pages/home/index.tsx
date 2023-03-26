import { useGetContentQuery, useGetPostsQuery } from "@/store/api/api-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useState } from "react";
import { decremented, incremented } from "../../store/demo/demo-slice";

const LandingPage = () => {
  const { value } = useAppSelector((state) => state.demo);
  const dispatch = useAppDispatch();
  const [content, setContent] = useState("");

  const {
    status: status1,
    data: postsData,
    isLoading: postsLoading,
    error: postsError,
  } = useGetPostsQuery({});

  const {
    status: status4,
    data: contents,
    isLoading: contentLoading,
    error: contentError,
  } = useGetContentQuery(content);

  console.log();
  return (
    <div>
      <p>{status1}</p>
      <button
        className="bg-indigo-500 p-3 text-white text-sm rounded-md shadow mx-1"
        onClick={() => setContent("books")}
      >
        Books -- {content}
      </button>
      <button
        className="bg-indigo-500 p-3 text-white text-sm rounded-md shadow mx-1"
        onClick={() => setContent("movies")}
      >
        Movies -- {content}
      </button>
      {contents?.length
        ? contents?.map((i: any) => (
            <div
              key={i.id}
              className="bg-orange-900 m-3 p-1 rounded-lg "
              style={{ width: 200 }}
            >
              <div className="text-blue-200 font-medium">{i.name}</div>
              <div className="text-blue-500">{i.author || i.director}</div>
            </div>
          ))
        : !contentLoading && <p>Something went wrong!!</p>}
    </div>
  );
};

export default LandingPage;
