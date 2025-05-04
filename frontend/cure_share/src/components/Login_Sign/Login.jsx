import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import logo from "../../images/logo.png";
import axios from 'axios';
import { toast } from 'react-toastify'
import {jwtDecode }  from 'jwt-decode'


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const res = await axios.post(
        "http://localhost:3000/api/v1/doctor/signin",
        data
      );
      const token = localStorage.setItem('token', res.data.token);
      const restoken = res.data.token;
      const payload = jwtDecode(restoken)
      const userId = localStorage.setItem('id',payload.user);
      // console.log(payload.user)
      toast.success(res.message);
      navigate('/homepage');
    }
    catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top left,rgb(178, 198, 218) 0%,rgb(182, 173, 212) 40%,rgb(182, 134, 185) 100%)",
      }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-white px-4"
    >
      <div className="w-full max-w-md  bg-[#FAF9F6] p-8 rounded-2xl shadow-xl border border-gray-100">
        {/* Logo */}
        <Link to={'/'}>
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
          </div>
        </Link>

        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Login to CureShare
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          For verified doctors only
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full h-9 p-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full h-9 p-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-center text-gray-400 mt-5">
          Need access? Contact your institution or admin for verification.
        </p>

        {/* Sign up link */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <span
            onClick={handleSignupRedirect}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
