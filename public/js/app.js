// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDevYRkB11FquOnTG0LsSC67IJjEdTB-Ds",
  authDomain: "classflow-de7e1.firebaseapp.com",
  projectId: "classflow-de7e1",
  storageBucket: "classflow-de7e1.firebasestorage.app",
  messagingSenderId: "586554322954",
  appId: "1:586554322954:web:af7917bb0dbe2272d86ff3",
  measurementId: "G-NNPF00YSRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);