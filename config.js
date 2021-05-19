import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCWBnrN1nVhPYdzAN2D2ePXcCmtc9K9v2g",
  authDomain: "pfl-plant-for-life.firebaseapp.com",
  projectId: "pfl-plant-for-life",
  storageBucket: "pfl-plant-for-life.appspot.com",
  messagingSenderId: "101189876957",
  appId: "1:101189876957:web:6eb0d0a8201e8a1a742f34",
  measurementId: "G-VSGTRGG69Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
