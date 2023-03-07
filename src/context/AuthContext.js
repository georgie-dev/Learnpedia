import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({
  currentUser: null,
  signUp: () => Promise.resolve(),
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  getUser: () => Promise.resolve(),
  getUserUid: () => Promise.resolve(),
  // forgotPassword: () => Promise.resolve(),
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // signup function
  async function signUp(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }

  // login function
  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }

  // forgot password function
  // async function forgotPassword(email) {
  //   try {
  //     await sendPasswordResetEmail(auth, email, {
  //       url: "",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  function logout() {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        window.location.pathname = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getUserUid() {
    return auth.currentUser?.uid;
  }

  function getUser() {
    return auth.currentUser;
  }

  const value = {
    currentUser,
    getUser,
    getUserUid,
    login,
    logout,
    signUp,
    // forgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
