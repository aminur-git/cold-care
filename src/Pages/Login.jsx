import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="hero  mt-[15%]">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 max-w-3xl">
              Please Login to access more data, donate and use dashboard
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="form space-y-3">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div className="text-center">
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4 w-full mx-auto ">Login</button>
              </form>
              <p className="text-center mt-3">Don't have an account? <Link to={'/auth/sign-up'} className="text-[#0c9ac6] font-semibold">Sign Up</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
