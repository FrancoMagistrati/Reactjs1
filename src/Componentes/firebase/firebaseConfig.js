// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWkf9QJxq9Jmpq3e7ffkXumPIZ0ONHZYI",
  authDomain: "entrega-final-react-3e12a.firebaseapp.com",
  projectId: "entrega-final-react-3e12a",
  storageBucket: "entrega-final-react-3e12a.appspot.com",
  messagingSenderId: "45464103976",
  appId: "1:45464103976:web:36d5d3adccfdc467db191d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);