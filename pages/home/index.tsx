import { useAppSelector } from "@/store/store";
import React from "react";

const LandingPage = () => {
  const { value } = useAppSelector((state) => state.demo);
  console.log(value);
  return <div>LandingPage</div>;
};

export default LandingPage;
