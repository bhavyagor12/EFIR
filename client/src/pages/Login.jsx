import React, { useState } from "react";
import login from "../images/login.png";
import Swal from "sweetalert2";
import logo from "../images/logo.png";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    const userData = {
      email,
      password,
    };
    try {
      const rawResponse = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const content = await rawResponse.json();
      if (content.type === "user") {
        console.log("going to home");
      } else if (content.type === "police") {
        console.log("going to police");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Entered credentials dont exist",
          icon: "error",
          confirmButtonText: "Retry",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-around pt-0">
      <div className="hidden md:flex w-[50vw] h-[100vh]">
        <img src={login} alt="hi" />
      </div>
      <div className="flex items-center justify-center h-[100vh] bg-white w-[50vw]">
        <div className="max-w-md w-full space-y-8 border-1  border-gray-300 p-2 lg-[700px] shadow-xl shadow-gray-400 opacity-90">
          <div>
            <img className="mx-auto h-24 w-auto" src={logo} alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">
              Welcome to EFIR
            </h2>
            <h2 className="text-center text-xl font-extrabold text-gray-700">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6 gap-2">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px gap-y-4">
              <div className="mb-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <div className="absolute right-2 top-2">
                    <button onClick={togglePassword}>
                      {passwordShown ? (
                        <AiFillEyeInvisible size={20} />
                      ) : (
                        <AiFillEye size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-[#AA5656] text-[#F1DBBF] font-[Poppins] py-2 px-6 rounded  hover:bg-[#F1DBBF] hover:text-[#AA5656] duration-500"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
