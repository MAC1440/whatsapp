import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHsYkpfN3zRYHwt8twihSWmp_fzosg5ZQ",
  authDomain: "attendance-system-4b852.firebaseapp.com",
  databaseURL:
    "https://attendance-system-4b852-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "attendance-system-4b852",
  storageBucket: "attendance-system-4b852.appspot.com",
  messagingSenderId: "244119743603",
  appId: "1:244119743603:web:6902a9801cc4e263118e06",
  measurementId: "G-GY9R792STD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
