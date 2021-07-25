import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyDRFjmXy4WgXU2D_7bwNNTGqtT8kdDmQXQ',
  authDomain: 'sprintres-dd455.firebaseapp.com',
  projectId: 'sprintres-dd455',
  storageBucket: 'sprintres-dd455.appspot.com',
  messagingSenderId: '212505791118',
  appId: '1:212505791118:web:891251d8a634a6e78617df',
  measurementId: 'G-PJRQG40QQS',
});

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export {
  db,
  googleAuthProvider,
  facebookAuthProvider,
  firebase,
};
