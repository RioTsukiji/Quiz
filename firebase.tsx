// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvAwcxVZ1pwsdndH6qClU5cMmeca0r8L0",
    authDomain: "quiz-app-bd45f.firebaseapp.com",
    projectId: "quiz-app-bd45f",
    storageBucket: "quiz-app-bd45f.appspot.com",
    messagingSenderId: "336716650545",
    appId: "1:336716650545:web:36e949bad0e1ed24f09d10",
    measurementId: "G-J3XN9HNQQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;