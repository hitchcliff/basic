// Your web app's Firebase configuration

import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCZN4a2m0CARojuKJZaE0Yd0AP3IGnkJz4",
  authDomain: "scalable-portfolio.firebaseapp.com",
  databaseURL: "https://scalable-portfolio.firebaseio.com",
  projectId: "scalable-portfolio",
  storageBucket: "scalable-portfolio.appspot.com",
  messagingSenderId: "837011785164",
  appId: "1:837011785164:web:70a0820fe327655850c969",
  measurementId: "G-9K1SP4LQEC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

// refs
export const postRef = firestore.collection("posts");
export const projectRef = firestore.collection("projects");

firestore.settings({});

export default firebase;
