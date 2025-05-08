import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  // console.log(showPassword);
   const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    setError('')
    setSuccess('')
    e.preventDefault();
    const form = new FormData(e.target);
    const password = form.get("password");
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    // console.log(name, email)

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        setSuccess("Sign Up successful!")
        setTimeout(() => {
          navigate("/campaigns");
        }, 1500)
      })
      .catch((error) => {
        setError(error.message)
      
      });
  };

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
                <form onSubmit={handleSubmit} className="form space-y-3">
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input validator"
                    placeholder="Name"
                    required
                  />
                  <label className="label">Photo URL</label>
                  <input
                    name="photo"
                    type="text"
                    className="input validator"
                    placeholder="photo URL (optional)"
                    required
                  />
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input validator"
                    placeholder="Email"
                    required
                  />
                  <div className="space-y-3 relative">
                    <label className="label">Password</label>
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="input validator"
                      placeholder="Password"
                      minLength={6}
                      pattern="(?=.*[a-z]).{8,}"
                      title="Must contain at least one alphabetic and 8 or more characters"
                      required
                    />
                    {!showPassword ? (
                      <FaRegEye
                        onClick={() => setShowPassword(true)}
                        className="absolute top-11.5 right-10 cursor-pointer"
                      />
                    ) : (
                      <FaRegEyeSlash
                        onClick={() => setShowPassword(false)}
                        className="absolute top-11.5 right-10 cursor-pointer"
                      />
                    )}
                  </div>
                  <div>
                  {
                    error && <p className="text-red-600">{error}</p>
                  }
                  {
                    success && <p className="text-green-500">{success}</p>
                  }
                  </div>
                  <button
                    type="submit"
                    className="btn btn-neutral mt-4 w-full mx-auto "
                  >
                    Sign Up
                  </button>
                </form>
                <p className="text-center mt-3">
                  Already have an account?{" "}
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
