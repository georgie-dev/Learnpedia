import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { db, signInWithGoogle } from "../../../firebase";

const Login = () => {
  const { login, getUserUid } = useAuth();
  const navigate = useNavigate();

  // collection reference
  const userState = collection(db, "user_state");

  const [loading, setLoading] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    loading: false,
  });

  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginFormData({ ...loginFormData, loading: true });

    if (!loginFormData.email || !loginFormData.password) {
      console.log("All fields are required");
    }

    try {
      await login(loginFormData.email, loginFormData.password);
      await updateDoc(doc(userState, getUserUid()), {
        isOnline: true,
      });

      console.log("Logged in successfully");
      navigate("/sidebar");
    } catch (error) {
      navigate("/");
      console.error("Error adding learner data: ", error);
    }
    setLoginFormData({
      email: "",
      password: "",
      loading: false,
    });
  };

  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithGoogle();
      await updateDoc(doc(userState, getUserUid()), {
        isOnline: true,
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center ">
      <div className=" flex flex-col items-center">
        <p className="text-4xl font-semibold my-4">Get back to learning!</p>
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <div className="space-y-3 mb-10">
            <label className="flex flex-col font-medium text-lg">
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="py-3 pl-5 w-full border border-black rounded-md"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label className="flex flex-col font-medium text-lg">
              Password
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="py-3 pl-5 w-full border border-black rounded-md"
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>

          <button
            type="submit"
            className="py-3 w-full font-bold bg-[#0968B1] text-white border border-black rounded-md"
            disabled={loading}
          >
            {loading ? <p>Loading...</p> : <p>Login</p>}
          </button>
        </form>
        <p className="font-medium my-3">Or</p>
        <button
          className="py-2 w-full font-bold border border-black rounded-md"
          disabled={loading}
          onClick={handleGoogleSignin}
        >
          {loading ? <p>Loading...</p> : <p>Login with Google</p>}
        </button>
      </div>
    </div>
  );
};

export default Login;
