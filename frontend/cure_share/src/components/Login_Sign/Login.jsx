 
import React from 'react';

const Login = () => {
  return (
    
        <div style={{
        background:
          'radial-gradient(circle at top left,rgb(178, 198, 218) 0%,rgb(182, 173, 212) 40%,rgb(182, 134, 185) 100%)'
      }} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-white px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Login to CureShare
        </h2>
        <p className="text-center text-sm text-gray-500 mb-8">
          For verified doctors only
        </p>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-center text-gray-400 mt-6">
          Need access? Contact your institution or admin for verification.
        </p>
      </div>
    </div>
  
  );
};

export default Login;
