import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJ7qJJY_lgGI5eTgYMPQ6pQX-cP3lr9-g",
    authDomain: "marene-rr.firebaseapp.com",
    projectId: "marene-rr",
    storageBucket: "marene-rr.appspot.com",
    messagingSenderId: "884170180045",
    appId: "1:884170180045:web:391abf011e71501ee17084",
    measurementId: "G-R2P0QKTEHP",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
