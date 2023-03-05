import React from "react";
import { Navbar } from "../../../components";

const Signup = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <Navbar />
      <div className="flex flex-col items-center">
        <p className="text-4xl font-semibold mt-4 mb-7">
          Begin your learning journey today!
        </p>
        <form className="w-full flex flex-col space-y-10">
          <div className="space-y-5">
            <label className="flex flex-col font-medium text-lg">
              Name
              <input
                type="text"
                placeholder="Enter your name"
                className="py-2 pl-5 w-full border border-black rounded-md"
              />
            </label>
            <label className="flex flex-col font-medium text-lg">
              Email
              <input
                type="email"
                placeholder="Enter your email address"
                className="py-2 pl-5 w-full border border-black rounded-md"
              />
            </label>
            <label className="flex flex-col font-medium text-lg">
              Password
              <input
                type="password"
                placeholder="Enter your password"
                className="py-2 pl-5 w-full border border-black rounded-md"
              />
            </label>
          </div>

          <button
            type="submit"
            className="py-2 font-bold bg-[#0968B1] text-white border border-black rounded-md"
          >
            Sign up
          </button>
        </form>
        <p className="font-medium">Or</p>
        <button className="py-2 w-full font-bold border border-black rounded-md">
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
