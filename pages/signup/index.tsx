import {
  useGetUsersQuery,
  usePostUsersMutation,
} from "@/store/api/auth/auth-slice";
import Image from "next/image";
import React, { useState } from "react";
import signupImg from "../../public/planet.jpg";

const Signup = () => {
  const { data: users, isLoading } = useGetUsersQuery({});
  const [setFormData, { isLoading: postLoading }] = usePostUsersMutation();
  const [form, setForm] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const changeHandler = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    let updatedForm = { ...form };
    updatedForm = { ...updatedForm, [name]: value };
    setForm(updatedForm);
  };
  const submitHandler = () => {
    const checkUser = users?.find((user) => user.userName === form.userName);
    if (!!checkUser) setError(" Username already taken");
    else {
      setError("");
      setFormData(form);
      setForm({ userName: "", password: "", confirmPassword: "" });
    }
  };
  return (
    <div className="h-screen m-auto" style={{ width: "500px" }}>
      <div className="border border-teal-400 p-5 text-center flex flex-col rounded-md mt-2">
        <div>
          <Image
            src={signupImg}
            alt="banner"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          onChange={changeHandler}
          className="rounded-lg border-blue-400 border"
          value={form.userName}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={changeHandler}
          value={form.password}
          className="rounded-lg border-blue-400 border"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          onChange={changeHandler}
          value={form.confirmPassword}
          className="rounded-lg border-blue-400 border"
        />
        <button
          className="mt-4 text-sm rounded-md shadow
    bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-100 "
          onClick={() => (!postLoading || !isLoading) && submitHandler()}
          disabled={!postLoading || !isLoading}
        >
          {postLoading || isLoading ? "Loading ..." : "Submit"}
        </button>
        {error && <p className="text-red-500">{error}</p>}{" "}
      </div>
    </div>
  );
};

export default Signup;
