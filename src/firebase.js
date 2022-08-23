import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
 
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMAExVM9oLb4AgkxaiKARE0UCMER0QWZo",
    authDomain: "clone-ad4c7.firebaseapp.com",
    projectId: "clone-ad4c7",
    storageBucket: "clone-ad4c7.appspot.com",
    messagingSenderId: "135658541709",
    appId: "1:135658541709:web:aaaa5b1f1ef163fda648c4",
    measurementId: "G-RXFEET2S9X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth()


  export {db,auth};
 