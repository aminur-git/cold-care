import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/campaigns"}>Campaigns</NavLink>
      <NavLink to={"/faq"}>How to donate</NavLink>
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
    </>
  );

  return (
    <div className="">
      <div className="navbar  text-white max-w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded z-1 mt-3 w-52 p-2  bg-[#0c9ac6] "
            >
              {links}
            </ul>
          </div>
          <a href="/" className="z-10">
            <img src={logo} className="h-24  brightness-150 " alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:space-x-8 sm:text-lg">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-xs  flex gap-2 items-center">
                  <CgProfile className="text-xl"></CgProfile>{" "}
                  <span>{user.email}</span>
                </div>
                <button onClick={logOut} className="btn btn-outline btn-wide md:btn-wide">
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <Link to={"/auth/login"} className="btn btn-outline">
              <span>
                <CgProfile className="text-xl"></CgProfile>{" "}
              </span>{" "}
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
