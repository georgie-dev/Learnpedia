// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get database
const db = getFirestore(app);

// get storage
const storage = getStorage(app);

// get authentication
const auth = getAuth(app);

// collection references
const learnersRef = collection(db, "learners_data");

// sign up with google
export async function signUpWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const newLearnerData = {
      uid: auth.currentUser.uid,
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      createdAt: serverTimestamp(),
    };

    await setDoc(doc(learnersRef, auth.currentUser.uid), newLearnerData);

    console.log("Sign up with Google successfull: ", newLearnerData);
  } catch (error) {
    console.error("Error signing up with Google: ", error);
  }
}

// sign in with google
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("Sign in with Google successfull: ", user);
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
}

export { auth, db, storage };
