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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    console.log("fuck");
    return;
  }

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // if user doesn't exists in db ; create
  if (!snapShot.exists) {
    console.log(userAuth);
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(displayName, email, createdAt);

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error while creating this user", error.message);
    }
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
