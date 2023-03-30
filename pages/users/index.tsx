import {
  useGetUsersQuery,
  usePostUsersMutation,
} from "@/store/api/auth/auth-slice";
import React, { useState } from "react";
import UsersList from "./users-list";

const Users = () => {
  const { data: users, isLoading } = useGetUsersQuery({});
  const [setFormData] = usePostUsersMutation();
  const [form, setForm] = useState({ userName: "", password: "" });
  const [login, setlogin] = useState({ userName: "", password: "" });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Logged Out");

  const changeHandler = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    let updatedForm = { ...form };
    updatedForm = { ...updatedForm, [name]: value };
    setForm(updatedForm);
  };
  const loginChangeHandler = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    let updatedLoginForm = { ...login };
    updatedLoginForm = { ...updatedLoginForm, [name]: value };
    setlogin(updatedLoginForm);
  };
  const submitHandler = () => {
    console.log(form);
    setFormData(form);
    setForm({ userName: "", password: "" });
  };
  const checkCredentials = () => {
    console.log(login);
    console.log(users);
    const foundUser = users?.find(
      (user) =>
        user.password === login.password && user.userName === login.userName
    );
    setStatus(!!foundUser ? "Logged In" : "Logged Out");
    console.log(foundUser);
  };
  return (
    <div
      className="h-screen text-center mx-auto mt-20 "
      style={{ width: "500px" }}
    >
      <h1 className="text-center mt-10 text-4xl font-medium text-teal-400 p-10">
        Users
      </h1>
      {isLoading ? <p>Loading . . .</p> : <UsersList users={users} />}
      <div className="border p-5 text-center flex flex-col rounded-md">
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          onChange={changeHandler}
          value={form.userName}
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={changeHandler}
          value={form.password}
        />
        <button
          className="mt-4 text-sm rounded-md shadow
          bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-100 "
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>

      {/* Login */}
      <div className="border p-5 text-center flex flex-col rounded-md mt-4">
        <p className="text-violet-400 font-medium mb-1 text-2xl">Login</p>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          onChange={loginChangeHandler}
          value={login.userName}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={loginChangeHandler}
          value={login.password}
        />
        <button
          className="mt-4 text-sm rounded-md shadow
          bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-100 "
          onClick={checkCredentials}
        >
          Submit
        </button>

        <p>
          Status: <span className="text-orange-400">{status}</span>
        </p>
      </div>
    </div>
  );
};

export default Users;
