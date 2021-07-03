import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyB0w7HsaqpFncShoc_7USoDQmFMcbLJ7qQ",
    authDomain: "bitchat-a2531.firebaseapp.com",
    projectId: "bitchat-a2531",
    storageBucket: "bitchat-a2531.appspot.com",
    messagingSenderId: "342238617666",
    appId: "1:342238617666:web:83880f368467c0b6f40ddb",
    measurementId: "G-NHHZP32S1L"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', 8080);
}

export { db, auth };

export default firebase;