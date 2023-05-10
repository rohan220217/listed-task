// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ukZ9jca8zpVsNjy5Qx4n6MYctiSh2I0",
  authDomain: "listed-fans.firebaseapp.com",
  projectId: "listed-fans",
  storageBucket: "listed-fans.appspot.com",
  messagingSenderId: "35696618014",
  appId: "1:35696618014:web:28c15a45425e7d2ade5c0f",
  measurementId: "G-6GE7NDCK3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
