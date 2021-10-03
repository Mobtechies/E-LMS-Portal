// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth"; 
import "firebase/firestore";

const app = firebase.initializeApp({
    // apiKey: "AIzaSyCrD4H7CkuKrTG05MgHPO1P8F-YtlCBEio",
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PRODUCT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    apiKey: "AIzaSyCrD4H7CkuKrTG05MgHPO1P8F-YtlCBEio",
  authDomain: "lms-portal-1ebd2.firebaseapp.com",
  databaseURL: "https://lms-portal-1ebd2-default-rtdb.firebaseio.com",
  projectId: "lms-portal-1ebd2",
  storageBucket: "lms-portal-1ebd2.appspot.com",
  messagingSenderId: "1051381983281",
  appId: "1:1051381983281:web:82a93c777783fbd574cd10",
  measurementId: "G-WX7S9RCHW4",
  }) 



  export const auth = app.auth()
  export const db = app.firestore();
  export default app;