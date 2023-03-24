import { useGetPostsQuery } from "@/store/api/api-slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";
import { decremented, incremented } from "../../store/demo/demo-slice";

const LandingPage = () => {
  const { value } = useAppSelector((state) => state.demo);
  const dispatch = useAppDispatch();

  const { status, data, isLoading, isError, error } = useGetPostsQuery({});

  console.log(status, data, isLoading, isError, error);
  return (
    <div>
      <p>{status}</p>
      <button
        className="bg-indigo-500 p-3 text-white text-sm rounded-md shadow mx-1"
        onClick={() => dispatch(incremented())}
      >
        Increase + {value}
      </button>
      <button
        className="bg-indigo-500 p-3 text-white text-sm rounded-md shadow mx-1"
        onClick={() => dispatch(decremented())}
      >
        decrease - {value}
      </button>
      {data?.length
        ? data?.map((i: any) => (
            <div
              key={Math.random()}
              className="bg-orange-900 m-3 p-1 rounded-lg "
              style={{ width: 200 }}
            >
              <div className="text-blue-200 font-medium">{i.name}</div>
              <div className="text-blue-500">{i.city}</div>
            </div>
          ))
        : !isLoading && <p>Something went wrong!</p>}
    </div>
  );
};

export default LandingPage;
