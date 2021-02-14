import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKt49tNi8eJRZLQg7-icf4acQ9LKe4ue8",
    authDomain: "facebook-clone-6658e.firebaseapp.com",
    projectId: "facebook-clone-6658e",
    storageBucket: "facebook-clone-6658e.appspot.com",
    messagingSenderId: "624890266065",
    appId: "1:624890266065:web:795c19fa30870863f720f0",
    measurementId: "G-JM9KR0SH3P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;