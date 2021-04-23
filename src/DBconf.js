import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBoKQQakA9OwQX-IsdAvN4-jkDhlTjuuRM",
    authDomain: "usuarios-955a1.firebaseapp.com",
    projectId: "usuarios-955a1",
    storageBucket: "usuarios-955a1.appspot.com",
    messagingSenderId: "1033578770259",
    appId: "1:1033578770259:web:e9c029689e4a0ce7aa3ba6",
    measurementId: "G-L79GCMKXGV"
  };

  firebase.initializeApp(firebaseConfig);

  export const dataBase = firebase.firestore();
  export default firebase;