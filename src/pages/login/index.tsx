import { useGetUsersQuery } from "@/src/store/auth/auth-slice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import loginImg from "../../../public/banner.jpg";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const Login = () => {
  const [login, setlogin] = useState({ userName: "", password: "" });
  const [status, setStatus] = useState("Logged Out");

  const { data: users, isLoading } = useGetUsersQuery({});

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, login.userName, login.password);
    } catch (err) {
      console.log("logorr", err);
      setStatus("Credentials did not match!");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log("logorr", err);
    }
  };

  const test = async () => {
    try {
      const doc_refs = await getDocs(collection(db, "students"));
      const res: { id: string }[] = [];

      doc_refs.forEach((student) => {
        res.push({
          id: student.id,
          ...student.data(),
        });
      });
      console.log(res);
    } catch (err) {
      console.log("fetch error", err);
    }
  };
  const addStudent = async () => {
    try {
      await addDoc(collection(db, "students"), {
        class: 12,
        field: "Bio",
        section: "JH",
        name: "mera apna naam",
        userId: auth?.currentUser?.uid,
      });
    } catch (err) {
      console.log("fetch error", err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log("errororr", err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) =>
      setStatus(user ? "Logged In" : "Logged Out")
    );
    return () => {
      unsubscribe();
    };
  }, []);

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
    signIn();
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
        <div className="flex justify-between items-center">
          <button
            className="mt-4 text-sm rounded-md  
          bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-100 "
            onClick={checkCredentials}
            style={{ width: "40%" }}
          >
            Sign In
          </button>
          or
          <button
            className="mt-4 text-sm rounded-md  
    bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-100 "
            onClick={signInWithGoogle}
            style={{ width: "40%" }}
          >
            Signin With Google
          </button>
        </div>
        <button
          className="mt-4 text-sm rounded-md  
    bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-100 "
          onClick={logout}
        >
          Signout
        </button>
        <p>
          Status: <span className="text-orange-400">{status}</span>
        </p>
      </div>
      <button onClick={test}>test</button>
      <button onClick={addStudent}>addDoc</button>
    </div>
  );
};

export default Login;
