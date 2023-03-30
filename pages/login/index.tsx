import { useGetUsersQuery } from "@/store/api/auth/auth-slice";
import Image from "next/image";
import React, { useState } from "react";
import loginImg from "../../public/banner.jpg";

const Login = () => {
  const [login, setlogin] = useState({ userName: "", password: "" });
  const [status, setStatus] = useState("Logged Out");

  const { data: users, isLoading } = useGetUsersQuery({});
  const loginChangeHandler = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    let updatedLoginForm = { ...login };
    updatedLoginForm = { ...updatedLoginForm, [name]: value };
    setlogin(updatedLoginForm);
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
    <div className="h-screen m-auto" style={{ width: "500px" }}>
      <div className=" border border-teal-400 p-5 text-center flex flex-col rounded-md mt-4">
        <div>
          <Image
            src={loginImg}
            alt="banner"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        <p className="text-violet-400 font-medium mb-1 text-2xl">Login</p>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          onChange={loginChangeHandler}
          value={login.userName}
          className="rounded-lg border border-blue-400"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={loginChangeHandler}
          value={login.password}
          className="rounded-lg border border-blue-400"
        />
        <button
          className="mt-4 text-sm rounded-md  
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

export default Login;
