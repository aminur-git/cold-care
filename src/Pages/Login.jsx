import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const { login, resetPass, auth, setUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleResetPass = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const email = emailRef.current?.value;
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }

    resetPass(email)
      .then(() => {
        setSuccess("Reset email sent! Please check your inbox.");
      })
      .catch((error) => setError(error.message));
  };

  const handleSubmit = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    const form = new FormData(e.target);
    const password = form.get("password");
    const email = form.get("email");
    console.log(email, password);
    login(email, password)
      .then(() => {
        setSuccess("Login successful"),
          setTimeout(() => {
            navigate("/campaigns");
          }, 1500);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setError("")
    setSuccess("")
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      setSuccess("Logged in with Google!");
      setTimeout(() => {
        navigate("/campaigns");
      }, 1500);
    })
    .catch((error) => {
      setError(error.message);
    });
};

  return (
    <div>
      <div className="hero  mt-[5%]">
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
                <input
                  name="email"
                  type="email"
                  className="input validator"
                  ref={emailRef}
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div className="text-center">
                  <span onClick={handleResetPass} className="link link-hover">
                    Forgot password?
                  </span>
                </div>
                <div>
                  {error && <p className="text-red-600">{error}</p>}
                  {success && <p className="text-green-500">{success}</p>}
                </div>
                <button
                  type="submit"
                  className="btn btn-neutral mt-4 w-full mx-auto "
                >
                  Login
                </button>
              </form>
              <p className="text-center mt-3">
                Don't have an account?{" "}
                <Link
                  to={"/auth/sign-up"}
                  className="text-[#0c9ac6] font-semibold"
                >
                  Sign Up
                </Link>{" "}
              </p>
              <div className="divider">Or</div>
              <div className="flex justify-center">
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-white  text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
