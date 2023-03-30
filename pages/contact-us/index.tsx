import { usePostBooksMutation } from "@/store/api/content/bookSlice";
import React, { useState } from "react";

const Enquiry = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });
  const [setFormData] = usePostBooksMutation();
  const changeHandler = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    let updatedForm = { ...form };
    updatedForm = { ...updatedForm, [name]: value };
    setForm(updatedForm);
  };

  const submitHandler = () => {
    console.log(form);
    setFormData(form);
    setForm({ name: "", message: "" });
  };
  return (
    <div className="h-screen">
      <div className="mt-10 p-5 text-center">
        <div className="mb-4 flex flex-col items-center">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={changeHandler}
          />
        </div>
        <div className="flex items-center flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={changeHandler}
          />
        </div>
        <div className="mt-5">
          <button
            onClick={submitHandler}
            className="bg-indigo-500 p-2 text-sm rounded-md hover:bg-pink-500 "
          >
            Submit
          </button>
        </div>
        {!!form.name && (
          <div>
            <p>Name: {form.name}</p>
            <p>Message: {form.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Enquiry;
