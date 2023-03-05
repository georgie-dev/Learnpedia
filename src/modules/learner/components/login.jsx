import React from "react";

const Login = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-10">
      <div className="space-y-10 flex flex-col">
        <p className="text-5xl font-semibold">
          Begin your learning journey today!
        </p>
        <form className="flex flex-col space-y-10">
          <label className="flex flex-col font-medium text-lg">
            Email
            <input
              type="text"
              placeholder="Enter your email address"
              className="py-3 pl-5 w-96 border border-black rounded-md"
            />
          </label>
          <label className="flex flex-col font-medium text-lg">
            Password
            <input
              type="password"
              placeholder="Enter your password"
              className="py-3 pl-5 w-96 border border-black rounded-md"
            />
          </label>
          <button
            type="submit"
            className="py-3 w-28 font-medium border border-black rounded-md"
          >
            Login
          </button>
        </form>
      </div>

      <p className="font-medium">Or Login using</p>
      <button className="py-3 px-28 font-medium border border-black rounded-md">
        Your google account
      </button>
    </div>
  );
};

export default Login;
