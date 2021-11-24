import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrD4H7CkuKrTG05MgHPO1P8F-YtlCBEio",
  authDomain: "lms-portal-1ebd2.firebaseapp.com",
  databaseURL: "https://lms-portal-1ebd2-default-rtdb.firebaseio.com",
  projectId: "lms-portal-1ebd2",
  storageBucket: "lms-portal-1ebd2.appspot.com",
  messagingSenderId: "1051381983281",
  appId: "1:1051381983281:web:82a93c777783fbd574cd10",
  measurementId: "G-WX7S9RCHW4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const functions = getFunctions(app);
