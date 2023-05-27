import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDfBaUmGQqKST0uo3GiuIgI8GDMoYOmjuk",
  authDomain: "pro-67-e154f.firebaseapp.com",
  projectId: "pro-67-e154f",
  storageBucket: "pro-67-e154f.appspot.com",
  messagingSenderId: "847168983095",
  appId: "1:847168983095:web:aecadf6db001a9d0cd2fb2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();