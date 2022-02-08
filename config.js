import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyDiYpMpJBoTtDbJ6B9dD47eOmuc8ie4rFI",
  authDomain: "classtest-3b2e3.firebaseapp.com",
  projectId: "classtest-3b2e3",
  storageBucket: "classtest-3b2e3.appspot.com",
  messagingSenderId: "195933585072",
  appId: "1:195933585072:web:20f0316e6bc202782dc575"
};
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
