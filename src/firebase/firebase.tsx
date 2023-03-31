// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
