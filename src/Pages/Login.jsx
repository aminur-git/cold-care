import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const {login} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  
  const handleSubmit = (e) => {
    setError("")
    setSuccess("")
    e.preventDefault();
    const form = new FormData(e.target);
    const password = form.get("password");
    const email = form.get("email");
    console.log(email, password)
    login(email, password)
    .then( ()=>{
      setSuccess("Login successful"),
      setTimeout(() => {
        navigate("/campaigns");
      }, 1500)
    }
      
    )
    .catch(error => {
      setError(error.message)
    })


  }

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
              <form onSubmit={handleSubmit} className="form space-y-3">
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
                <div>
                  {
                    error && <p className="text-red-600">{error}</p>
                  }
                  {
                    success && <p className="text-green-500">{success}</p>
                  }
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
