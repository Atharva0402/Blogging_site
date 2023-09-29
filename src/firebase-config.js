import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0CjXMTpDMsvhHAv_YbweYxf-DH3L8G78",
    authDomain: "blogging-site-83ecc.firebaseapp.com",
    projectId: "blogging-site-83ecc",
    storageBucket: "blogging-site-83ecc.appspot.com",
    messagingSenderId: "428972093212",
    appId: "1:428972093212:web:5e1d03196d777b521f14d9",
    measurementId: "G-QY97GRN0SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();