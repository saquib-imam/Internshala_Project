import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkjHYyG97hc-PGnGVzYrzHDL4gtlFJMUE",
    authDomain: "get-breathe.firebaseapp.com",
    projectId: "get-breathe",
    storageBucket: "get-breathe.appspot.com",
    messagingSenderId: "340811274070",
    appId: "1:340811274070:web:60548c3625f9c2f742a8f7",
    measurementId: "G-TGJHNP6V68"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}