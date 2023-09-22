import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO-lFQi0qtNYRsDVNv_pnqIO7gLnFerQc",
  authDomain: "web-demo-3c099.firebaseapp.com",
  projectId: "web-demo-3c099",
  storageBucket: "web-demo-3c099.appspot.com",
  messagingSenderId: "667551600453",
  appId: "1:667551600453:web:d5a8c05d75b290cb25f82c",
  measurementId: "G-7LZRZ1F13H"
};

if (!firebase.app.lenth) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
