import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz4IALtOXVCUeLpFNtwXvR0fiDgNDZncQ",
  authDomain: "house-marketplace-app-d3f51.firebaseapp.com",
  projectId: "house-marketplace-app-d3f51",
  storageBucket: "house-marketplace-app-d3f51.appspot.com",
  messagingSenderId: "924679500501",
  appId: "1:924679500501:web:6491fc4440ed717f4f685c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
