// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANkHsV11WbHGfzxKeAHiQcGR9dDkr9mb4",
  authDomain: "jumsite-a9a31.firebaseapp.com",
  projectId: "jumsite-a9a31",
  storageBucket: "jumsite-a9a31.appspot.com",
  messagingSenderId: "158421009323",
  appId: "1:158421009323:web:a60cd4b85e496a2a3088ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
