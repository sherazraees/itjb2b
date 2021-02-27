import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

export const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDLhAGDcy-Qx8QC5wIT9YCR_6bujoKG8RU",
  authDomain: "itj-b2b.firebaseapp.com",
  databaseURL: "https://itj-b2b.firebaseio.com",
  projectId: "itj-b2b",
  storageBucket: "itj-b2b.appspot.com",
  messagingSenderId: "1091567266147",
  appId: "1:1091567266147:web:b9c8bbc24fe3ece8a6cb56",
  measurementId: "G-SNKG1YH5JS",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export function getFirebaseImage(filename) {
  const fullPath = "gs://itj-b2b.appspot.com/" + filename;
  var gsReference = storage.refFromURL(fullPath);
  const url = gsReference.getDownloadURL();
  return url;
}

export function firebaseSignInWithEmail(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function firebaseSignOut() {
  return auth.signOut();
}

export function firebaseResetPassword(emailAddress) {
  return auth.sendPasswordResetEmail(emailAddress);
}
