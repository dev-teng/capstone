// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbU9AAhWIfLNl8nK1K9NRanG7ZcN5uRdw",
  authDomain: "campgyup.firebaseapp.com",
  projectId: "campgyup",
  storageBucket: "campgyup.firebasestorage.app",
  messagingSenderId: "528018589656",
  appId: "1:528018589656:web:1e67ce76b54117d9dcd4ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app