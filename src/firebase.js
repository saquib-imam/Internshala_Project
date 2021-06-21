import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBgvc3c299mfv47JREZhEntIEEJ9UpInMM",
  authDomain: "internshala-project-a821e.firebaseapp.com",
  projectId: "internshala-project-a821e",
  storageBucket: "internshala-project-a821e.appspot.com",
  messagingSenderId: "1005984216786",
  appId: "1:1005984216786:web:8d2dc19df5e40e58145f0b",
  measurementId: "G-MYWH337J60",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
