import React, { useState } from "react";
import { MdClose } from "react-icons/md"; // Close icon for modal

const SignInModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full md:w-[400px] h-full bg-slate-200 shadow-lg z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">Login - Required</h2>
        <button onClick={onClose}>
          <MdClose className="text-2xl" />
        </button>
      </div>
      <div className="p-6">
        <div className="text-center mb-6 flex flex-col items-center">
        <img src="https://tutorbees.net/vite/assets/login-H92vlVKq.png" alt="External"  style={{ width: '100px', height: '100px', display:"flex" }} 
         className="mx-auto"
        />
          <p className="text-gray-600">Please login to start discussing with the tutor</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot my password
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
