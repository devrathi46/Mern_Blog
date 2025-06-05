// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "publish-hub-a32e4.firebaseapp.com",
  projectId: "publish-hub-a32e4",
  storageBucket: "publish-hub-a32e4.firebasestorage.app",
  messagingSenderId: "247377602260",
  appId: "1:247377602260:web:9ec792a3c99ab732373d41"
};

// Initialize Firebase
//export const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
console.log(app.name); // should show "[DEFAULT]"