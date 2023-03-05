import React from "react";

const Login = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className=" flex flex-col items-center">
        <p className="text-4xl font-semibold my-4">
          Begin your learning journey today!
        </p>
        <form className="w-full flex flex-col">
          <div className="space-y-3 mb-10">
            <label className="flex flex-col font-medium text-lg">
              Email
              <input
                type="email"
                placeholder="Enter your email address"
                className="py-3 pl-5 w-full border border-black rounded-md"
              />
            </label>
            <label className="flex flex-col font-medium text-lg">
              Password
              <input
                type="password"
                placeholder="Enter your password"
                className="py-3 pl-5 w-full border border-black rounded-md"
              />
            </label>
          </div>

          <button
            type="submit"
            className="py-3 w-full font-bold bg-[#0968B1] text-white border border-black rounded-md"
          >
            Login
          </button>
        </form>
        <p className="font-medium my-3">Or</p>
        <button className="py-2 w-full font-bold border border-black rounded-md">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
