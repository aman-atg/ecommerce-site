import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAK-8rj7QnFIcoUuYEXEMkojY2iRbqXcKM",
  authDomain: "crwn-designs.firebaseapp.com",
  databaseURL: "https://crwn-designs.firebaseio.com",
  projectId: "crwn-designs",
  storageBucket: "crwn-designs.appspot.com",
  messagingSenderId: "984176904252",
  appId: "1:984176904252:web:b0bf763ecea09210389b39",
  measurementId: "G-72825D0Z6H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
