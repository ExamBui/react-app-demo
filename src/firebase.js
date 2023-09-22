import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp58WDEcIISDfSCPvwmJJpb-nJYKN0n3U",
  authDomain: "human-resource-managemen-ffb61.firebaseapp.com",
  databaseURL: "https://human-resource-managemen-ffb61-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "human-resource-managemen-ffb61",
  storageBucket: "human-resource-managemen-ffb61.appspot.com",
  messagingSenderId: "368495074470",
  appId: "1:368495074470:web:b353e03960029e2cf82867",
  measurementId: "G-4D4CR8MF1B"
};

if (!firebase.app.lenth) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
