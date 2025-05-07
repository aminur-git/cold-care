import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="md:max-w-11/12 mx-auto ">
      <div className="bg-[#0095c3f3] ">
      <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto mt-3">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
