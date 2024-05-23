// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNrzH3u3V2r6i1ZVk53Zt7S3p94ELS3NY",
  authDomain: "login-cac.firebaseapp.com",
  projectId: "login-cac",
  storageBucket: "login-cac.appspot.com",
  messagingSenderId: "1091514610046",
  appId: "1:1091514610046:web:7b1c0fa50837bbff66c32f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};




