import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div>
        <div className="hero  mt-[5%]">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Sign Up!</h1>
              <p className="py-6 max-w-3xl">
                Please provide the information correctly
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form className="form space-y-3">
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Name"
                  />
                  <label className="label">Photo URL</label>
                  <input
                    name="photo"
                    type="text"
                    className="input"
                    placeholder="photo URL (optional)"
                  />
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    type="submit"
                    className="btn btn-neutral mt-4 w-full mx-auto "
                  >
                    Login
                  </button>
                </form>
                <p className="text-center mt-3">
                  Already have an account? {" "}
                  <Link
                    to={"/auth/login"}
                    className="text-[#0c9ac6] font-semibold"
                  >
                        Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
